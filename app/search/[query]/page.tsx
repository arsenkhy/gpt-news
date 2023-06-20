import React from "react";
import { POST as news} from 'app/api/findNews/route';
import SearchHome from "../SearchHome"
import SearchInput from "../SearchInput";
import Results from "./Results";

type Props = {
  params: { query: string };
};

async function getNews(query: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('requestKey', `${process.env.APP_KEY}`);

    const newsRequest = new Request(`${process.env.NEXT_PUBLIC_URL}/api/findNews`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
    });
  
    return await news(newsRequest)
  }

const NoResultsMessage = ({ query }: { query: string }) => {
    return (
      <div className="mt-10 items-center justify-center">
        <h3 className="text-xl font-semibold text-center">
          No articles found for "{query}"
        </h3>
        <p className="text-md text-center">
          Please try again with a different search term.
        </p>
      </div>

    );
};

const ErrorMessage = () => {
  return (
    <div className="mt-10 items-center justify-center">
      <h3 className="text-xl font-semibold text-center">Sorry, the request has exceeded the timeout limit of 10 seconds set by Vercel.</h3>
      <p className="text-md text-center">
        Please check your internet connection and try again.
      </p>
    </div>
  );
};

const Search = async ({ params }: Props) => {
  const { query } = params;
  const decodedQuery = decodeURIComponent(query);
  let newsResponse: any;
  let articles: any;
  let errorFlag: string | null = null;

  // Vercel has timeout of 10 seconds for serverless functions, stop loading after 12 seconds
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(resolve, 12000);
  });

  try {
    // Wait for either the news response or the timeout promise to resolve
    newsResponse = await Promise.race([getNews(decodedQuery), timeoutPromise]);

    if (newsResponse) {
      articles = await newsResponse.json();
    } else {
      errorFlag = "Request timed out.";
    }
  } catch (error) {
    console.log(error);
    errorFlag = "An error occurred while fetching the news.";
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-10 leading-7">
        <div className="max-w-maxw mx-auto">
        <SearchHome />
        <SearchInput s={decodedQuery}/>

        {errorFlag ? (
            <ErrorMessage />
          ) : !newsResponse || newsResponse.status !== 200 ? (
            <NoResultsMessage query={decodedQuery} />
          ) : (
            <Results articles={articles} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;

