import React, { use } from "react";
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

const Search = async ({ params }: Props) => {
  const { query } = params;
  const decodedQuery = decodeURIComponent(query);
  let newsResponse: any;
  let articles: any;

  try {
    newsResponse = await getNews(decodedQuery);
    articles = await newsResponse.json();

  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-10 leading-7">
        <div className="max-w-maxw mx-auto">
        <SearchHome />
        <SearchInput s={decodedQuery}/>

        {!newsResponse || newsResponse.status !== 200 ? (
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

