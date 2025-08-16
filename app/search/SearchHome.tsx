import React from "react";

const SearchHome = () => {
    return (
      <div className="flex gap-10 mb-5 flex-col items-center">
        {/* HEADERS */}
        <h1 className="text-center font-bold text-2xl sm:text-4xl mt-10">
           Summarize tech news with <br className="" />
           <span className="bg-gradient-blue bg-clip-text text-transparent">ChatGPT</span>
        </h1>
        <h2 className="desc text-center max-w-[768px] mx-5 md:mx-auto  text-md sm:text-lg">
           Personalize and enhance your news search. Stay informed and empowered on the tech stories that matter to you.
           Navigate the vast world of technology effortlessly, and efficiently
        </h2>
      </div>
  );
};

export default SearchHome;
