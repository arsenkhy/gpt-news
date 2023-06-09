import { NextResponse } from "next/server";
import { prisma } from "../client";
import { POST as news} from '../news/route';
import { POST as openai} from '../openai/route';

const serverTimeout = 60000;
let updateStatus = '';

async function getNews(category: any, requestKey: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('requestKey', requestKey);

    const newsRequest = new Request(`${process.env.NEXT_PUBLIC_URL}/api/news`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ category }),
    });
  
     return await news(newsRequest)
  }

async function generateSummary(content: any, requestKey: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('requestKey', requestKey);

    const aiContentRequest = new Request(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ content }),
    });

    return await openai(aiContentRequest)
}
     
async function updateDatabase(category: any, requestKey: any) {
    try {
      console.log('Database update started.');
      updateStatus = 'started';

      // Get the news articles for the given category
      const newsResponse = await getNews(category, requestKey);
      const currentNews = await newsResponse.json();
      if (newsResponse.status !== 200) {
        console.log('Error fetching news:', currentNews.error);
        updateStatus = 'completed';
        return;
      }
  
      // Generate the summary for each article
      let postCount = 1;
      for (const article of currentNews) {
        console.log('\n', 'Started generating ', postCount++, ' out of ', currentNews.length, ': ', article.title);
      
        const aiContentResponse = await generateSummary(article.content, requestKey);
        if (aiContentResponse !== undefined) {
          const aiContent = await aiContentResponse.json();
          if (aiContentResponse.status !== 200) {
            console.log('Error generating summary: ', aiContent.error);
            updateStatus = 'completed';
            return;
          }

          // Push to db
          const publishedAt = article.publishedAt ?? new Date();
          const category = article.category;
          const title = article.title;
          const source = article.source.name;
          const author = article.author ?? "";
          const url = article.url ?? "";;
          const image = article.urlToImage ?? "";;
          const content = aiContent.content;
          const snippet = article.description ?? "";

          const post = await prisma.post.create({
            data: {
                publishedAt,    
                category,
                title,
                source,
                author,
                url,
                image,
                content,
                snippet,
            },
          });

          console.log('Post created: \nid: ', post.id, '\ncategory: ', post.category, '\ntitle: ', post.title, '\ncontent: ', post.content);
          console.log('\n\n');

        } else {
          console.log('Error generating summaries');
          updateStatus = 'completed';
          return;
        }
      }
       console.log('Database update completed.');
       updateStatus = 'completed';
    } catch (error) {
        console.log('Database update failed:', error);
       updateStatus = 'completed';
    }   
}

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

        if (updateStatus === 'started') {
           return NextResponse.json({ message: 'Database update is already in progress. Please wait...' }, { status: 200 }); 
        }

        // Start the database update process in the background
        const initialResponse = NextResponse.json({ message: 'Triggered database update' }, { status: 200 });
        updateDatabase(category, requestKey);

        return initialResponse;
    } catch (error) {
      console.log("request error", error);
      NextResponse.json({ error: "Error generating news" }, { status: 500 });
    }
  }
