import React from "react";


function Loading() {
return (    
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5 max-w-maxw mx-auto">

        <div className="basis-3/4">
            <div className="prose w-full max-w-full mb-10 mt-5">
                {/* BREADCRUMBS */}
                <h5 className="bg-gray opacity-30 animate-pulse text-transparent w-1/5">Bussiness</h5>

                    {/* HEADER */}
                <h3 className="w-full h-14 mt-3 bg-gray opacity-30 animate-pulse"></h3>
                <div className="flex gap-2 items-center mb-5 w-full">
                    <div className="bg-gray opacity-30 animate-pulse py-1 px-3 h-8 text-transparent rounded-2xl">Business</div>
                </div>


                {/* IMAGE */}
                <div className="relative w-auto mt-2 mb-10 h-96 sm:h-128 bg-gray opacity-30 animate-pulse rounded-xl">
                </div>

                {/* TEXT CONTENT */}
                <div className="animate-pulse">
                    <div className="bg-gray opacity-30 h-20 mb-12 w-full"></div>
                    <div className="bg-gray opacity-30 h-5 mb-3 w-full"></div>
                    <div className="bg-gray opacity-30 h-6 mb-3 w-5/6"></div>
                    <div className="bg-gray opacity-30 h-5 mb-10 w-9/10"></div>
                    <div className="bg-gray opacity-30 h-7 mb-3 w-1/2"></div>
                    <div className="bg-gray opacity-30 h-5 mb-3 w-full"></div>
                    <div className="bg-gray opacity-30 h-6 mb-3 w-5/6"></div>
                    <div className="bg-gray opacity-30 h-5 mb-3 w-9/10 text-transparent line-clamp-1">
                    The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
                    </div>
                </div>

                {/* RELATED ARTICLES */}  
                <section className="mt-2">
                    <hr className="border-1 border-secondary opacity-20" />
                    {/* HEADER */}
                    <div className="inline-flex items-center gap-3 bg-gray opacity-30 animate-pulse">
                        <p className="m-0 font-bold text-2xl text-transparent">Related Articles</p>
                    </div>


                    {/* CARDS ROW */}
                    <div className="sm:flex justify-between gap-8">
                        <div className="basis-1/3 sm:mt-5 h-64 mb-10 bg-gray opacity-30 animate-pulse"/>
                        <div className="basis-1/3 sm:mt-5 h-64 mb-10 bg-gray opacity-30 animate-pulse"/>
                        <div className="basis-1/3 sm:mt-5 h-64 mb-10 bg-gray opacity-30 animate-pulse"/>
                    </div>
                </section>
            </div>
        </div>

        <div className="basis-1/4">
            <section className="mt-10">
                <hr className="border-1 opacity-20 pt-5" />
                <div className="text-center px-5 py-10 h-96 bg-gray bg-opacity-30 animate-pulse"/>
                <div className="text-center px-5 mt-10 h-64 bg-gray bg-opacity-30 animate-pulse"/>
            </section>
        </div>

    </div>
    </main>
  );
}

export default Loading;

