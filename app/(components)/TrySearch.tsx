import React from 'react'
import Link from "next/link";

const TrySearch = () => {
  return (
    <section className="mt-5">
      <hr className="border-1 opacity-20 " />
      <div className="text-center px-5 py-5">
        <h4 className="font-semibold text-lg mb-4">Looking for specific news?</h4>
        <p className="text-wh-500 my-3 w-5/6 mx-auto text-base mb-6">
          Try generating summaries of your custom news search
        </p>
        <Link href="/">
        <button className="relative bg-secondary text-primary text-base w-5/6 font-semibold rounded-sm min-w-[100px] py-2 px-5 mt-3 opacity-80 hover:opacity-100 transition-all">
          <span className="opacity-100">Search</span>
        </button>
        </Link>
      </div>
    </section>
  );
};

export default TrySearch;