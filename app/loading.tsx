import React from "react";

function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow px-10 leading-7">
      <div className="max-w-maxw mx-auto">

        <section className="pt-3 pb-10 hidden sm:block">
            <div className="flex w-1/2 h-8 bg-gray opacity-30 animate-pulse"/>
            <div className="sm:grid gap-3 grid-cols-7 grid-rows-2 sm:h-[600px] my-3 ">
                <div
                className="col-span-2 row-span-1 bg-gray opacity-30 rounded-lg animate-pulse"
                />
                <div
                className="col-span-3 row-span-2 bg-gray opacity-30 rounded-lg animate-pulse"
                />  
                <div
                className="col-span-2 row-span-1 bg-gray opacity-30 rounded-lg animate-pulse"
                />
                <div
                className="col-span-2 row-span-1 bg-gray opacity-30 rounded-lg animate-pulse"
                />
                <div
                className="col-span-2 row-span-1 bg-gray opacity-30 rounded-lg animate-pulse"
                />
            </div>
            <p className="text-sm bg-gray opacity-30 animate-pulse text-transparent">
                Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
                pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
                viverra in aliquam feugiat pellentesque.
            </p>
        </section>


        <div className="md:flex gap-10 mb-5">
            <div className="basis-3/4">
                <section className="mt-10">
                    <hr className="border-1 opacity-20 hidden sm:block" />
                    <div className="flex items-center gap-3 my-8">
                        <p className="font-bold text-2xl bg-gray opacity-30 animate-pulse text-transparent">Big tech & Startups</p>
                    </div>

                    <div className="flex items-center">
                        <div className="sm:flexjustify-between items-center relative w-full sm:w-1/2 h-80 gap-3 mt-7 sm:mb-5 bg-gray opacity-30 animate-pulse" />
                        <div className="w-96 sm:block hidden">
                                <div className="ml-4 bg-gray opacity-30 animate-pulse h-5 w-1/2"></div>
                                <div className="ml-4 mt-16 bg-gray opacity-30 animate-pulse h-5 w-full"></div>
                                <div className="ml-4 mt-4 bg-gray opacity-30 animate-pulse h-5 w-2/3"></div>
                                <div className="ml-4 mt-4 bg-gray opacity-30 animate-pulse h-5 w-3/4"></div>
                        </div>
                    </div>


                    <div className="sm:flex justify-between gap-8">
                        <div
                        className="basis-1/3 mt-5 sm:mt-0 bg-gray opacity-30 animate-pulse h-80"
                        />
                        <div
                        className="basis-1/3 mt-5 sm:mt-0 bg-gray opacity-30 animate-pulse h-80"
                        />
                        <div
                        className="basis-1/3 mt-5 sm:mt-0 bg-gray opacity-30 animate-pulse h-80"
                        />
                    </div>
                </section>
            </div>

            <div className="basis-1/4">
                <section className="mt-10 overflow-y-auto sticky top-0">
                    <hr className="border-1 opacity-20 pt-5" />
                    <div className="text-center px-5 py-10 h-96 bg-gray bg-opacity-30 animate-pulse"/>
                    <div className="text-center px-5 mt-10 h-64 bg-gray bg-opacity-30 animate-pulse"/>
                </section>
            </div>
        </div>


      </div>
    </main>
  </div>
  );
}

export default Loading;
