import React from "react";

function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow px-10 leading-7">
      <div className="max-w-maxw mx-auto">

        <div className="flex mb-5 flex-col items-center">
            {/* HEADERS */}
            <h1 className="text-center font-bold text-2xl sm:text-4xl mt-10 bg-gray bg-opacity-30 animate-pulse text-transparent">
                Summarize tech news with
            </h1>
            <h1 className="text-center font-bold text-2xl sm:text-4xl mt-2 bg-gray bg-opacity-30 animate-pulse text-transparent">
                ChatGHpt 3.5
            </h1>
            <h2 className="desc text-center max-w-[768px] mt-10 mx-5 md:mx-auto  text-md sm:text-lg bg-gray bg-opacity-30 animate-pulse text-transparent">
                Personalize and enhance your news search. Stay informed and empowered on the tech stories that matter to you.
                Navigate the vast world of technology effortlessly, and efficiently
            </h2>
        </div>

        <div className="mt-20 flex justify-center w-full">
        <div className="relative w-full max-w-[600px]">
            <div className="flex h-12 max-w-[600px] justify-center items-center bg-gray rounded-xl bg-opacity-30 animate-pulse text-transparent">
            </div>
        </div>
        </div>

      </div>
    </main>
  </div>
  );
}

export default Loading;
