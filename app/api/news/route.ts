import { NextResponse } from "next/server";
import axios from "axios";
import { prisma } from "../client";

const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const data = require('../data.json');

// Constants
const CONTENT_MAX_CHAR_LIMIT = 6000;
const MAX_NUM_ARTICLES = 5;
const NUMBER_OF_DAYS_BACK = 7;
const CATEGORIES = data.categories.map((category: any) => category.name);
const INCLUDED_SOURCES = data.includedSources;

/**
 * Fetches the full article content from the given URL.
 * @param {string} url - The URL of the article.
 * @returns {Promise<string>} - A promise that resolves to the full article content.
 */
async function fetchFullArticleContent(url: string) {
  const fullArticleResponse = await axios.get(url);
  const fullArticleHtml = fullArticleResponse.data;
  const dom = new JSDOM(fullArticleHtml, {
    pretendToBeVisual: true,
    url: url
  });
  const article = new Readability(dom.window.document).parse();
  const articleContent = article && article.textContent ? article.textContent.slice(0, CONTENT_MAX_CHAR_LIMIT): '';
  return articleContent;
}

/**
 * Filters the articles based on specific requirements.
 * @param {Array} articles - The array of articles to filter.
 * @returns {Array} - The selected articles that meet the requirements.
 */
async function filterArticles(articles: any) {
  const selectedArticles = [];
  let count = 0;

  for (const article of articles) {

    // Check if article is not a duplicate
    const existingPost = await prisma.post.findFirst({
      where: { title: article.title },
    });

    if (existingPost) {
      continue;
    }

    if (!article.urlToImage) {
      continue;
    }
    if (!article.url) {
      continue;
    }

    if (!article.content || article.content.length < 100 || article.content.length > CONTENT_MAX_CHAR_LIMIT) {
      continue;
    }

    if (!INCLUDED_SOURCES.includes(article.source.name)) {
      continue;
    }

    // Check if 'content' contains the '+X chars' notation with X between 100 and 6000
    const charRegex = /\+(\d+) chars/;
    const match = article.content.match(charRegex);
    if (!match || match.length < 2) {
      continue;
    }
    const charCount = parseInt(match[1]);
    if (charCount < 100 || charCount > CONTENT_MAX_CHAR_LIMIT) {
      continue;
    }

    // Check if content is readable from url
    const fullArticleContent = fetchFullArticleContent(article.url);
    if (!fullArticleContent) {
      continue;
    }

    selectedArticles.push(article);
    count++;

    if (count === MAX_NUM_ARTICLES) {
      break;
    }
  }

  return selectedArticles;
}

interface Category {
  name: string;
  query: string;
}

/**
 * Handles the POST request for fetching news articles.
 * @param {Request} request - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to the Next.js response.
 */
export async function POST(request: Request) {
  try {
    // Check if the required key matches the expected value
    const requestKey = request.headers.get('requestKey');
    if (!requestKey) {
      return NextResponse.json({ error: 'Required header is missing' }, { status: 400 });
    }

    if (requestKey !== process.env.APP_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if the category parameter is missing
    const { category } = await request.json();
    if (!category) {
      return NextResponse.json({ error: 'Category parameter is required' }, { status: 400 });
    }

    if (!CATEGORIES.includes(category)) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
    } 

    // Assign correct API url and params based on category
    let newsApiUrl;
    let params;
    const ctg: Category = data.categories.find((ctg: Category) => ctg.name === category);
    const QUERY_STRING = ctg?.query || "";

    // Top headlines based search
    if (category === 'today') {
        newsApiUrl = 'https://newsapi.org/v2/top-headlines';
        params = {
          country: 'us',
          category: 'technology',
          pageSize: 40,
        };
    } else if (category === 'science') {
        newsApiUrl = 'https://newsapi.org/v2/top-headlines';
        params = {
          country: 'us',
          category: 'science',
          pageSize: 50,
        };
    } else {  // Query based search
      const fromDate = new Date(); // Get the current date and time
      fromDate.setDate(fromDate.getDate() - NUMBER_OF_DAYS_BACK); // Start from _ days ago
      const fromDateISOString = fromDate.toISOString().split('T')[0];

      newsApiUrl = 'https://newsapi.org/v2/everything';
      params = {
        q: QUERY_STRING,
        sortBy: 'relevancy',
        from: fromDateISOString,
      };
    }

    // Make request to News API  
    const response = await axios.get(newsApiUrl, {
      headers: {
        'x-api-key': process.env.NEWS_API_KEY || '',
      },
      params: params,
    });

    const articles = response.data.articles;
    // Check if there are any articles
    if (articles.length === 0) {
      return NextResponse.json({ error: 'No articles found' }, { status: 404 });
    }

    // Filter and select up to five articles that meet the requirements
    const selectedArticles = await filterArticles(articles);
    if (selectedArticles.length === 0) {
      return NextResponse.json({ error: 'No articles found' }, { status: 404 });
    }

    // Fetch the full article content for each article, and add category
    const categorizedArticles = await Promise.all(
      selectedArticles.map(async article => {
        const fullArticleContent = await fetchFullArticleContent(article.url);
        return { ...article, content: fullArticleContent, category: category };
      })  
    );

    return NextResponse.json(categorizedArticles, { status: 200 });
  } catch (error) {
    console.error("request error", error);
    return NextResponse.json({ error: "Error fetching news" }, { status: 500 });
  } 
}
