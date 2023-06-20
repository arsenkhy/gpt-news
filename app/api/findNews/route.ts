import { NextResponse } from "next/server";
import axios from "axios";
import { fetchFullArticleContent } from '../news/route';
const data = require('../data.json');

// Constants
const CONTENT_MAX_CHAR_LIMIT = 6000;
const MAX_NUM_ARTICLES = 5;
const NUMBER_OF_DAYS_BACK = 7;
const INCLUDED_SOURCES = data.includedSources;

/**
 * Filters the articles based on specific requirements.
 * @param {Array} articles - The array of articles to filter.
 * @returns {Array} - The selected articles that meet the requirements.
 */
async function filterArticles(articles: any) {
  const selectedArticles = [];
  let count = 0;

  for (const article of articles) {
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

    selectedArticles.push(article);
    count++;

    if (count === MAX_NUM_ARTICLES) {
      break;
    }
  }

  return selectedArticles;
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

    // Check if the query parameter is missing
    const { query } = await request.json();
    if (!query) {
      return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    // Assign correct API url and params based on query
    let newsApiUrl;
    let params;

    // Query based search
    const fromDate = new Date(); // Get the current date and time
    fromDate.setDate(fromDate.getDate() - NUMBER_OF_DAYS_BACK); // Start from _ days ago
    const fromDateISOString = fromDate.toISOString().split('T')[0];

    newsApiUrl = 'https://newsapi.org/v2/everything';
    params = {
        q: query,
        sortBy: 'relevancy',
        language: 'en',
        from: fromDateISOString,
        searchIn: 'description',
    };

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

    // Filter and select up to MAX_NUM of articles that meet the requirements
    const selectedArticles = await filterArticles(articles);
    if (selectedArticles.length === 0) {
      return NextResponse.json({ error: 'No articles found' }, { status: 404 });
    }

    // Sort articles by publishedAt field in descending order (newest first)
    selectedArticles.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });

    // Fetch the full article content for each article
    const categorizedArticles = await Promise.all(
      selectedArticles.map(async article => {
        const fullArticleContent = await fetchFullArticleContent(article.url);
        return { ...article, content: fullArticleContent };
      })  
    );

    return NextResponse.json(categorizedArticles, { status: 200 });
  } catch (error) {
    console.log("request error", error);
    return NextResponse.json({ error: "Error fetching news" }, { status: 500 });
  } 
}
