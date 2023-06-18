import React from "react";


function Loading() {
return (    
    <div className="flex flex-col min-h-screen">
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5 max-w-[1120px] mx-auto">

        <div className="basis-3/4">
            <div className="prose w-full max-w-full mb-10 mt-5">
                {/* BREADCRUMBS */}
                <h5 className="bg-gray opacity-30 animate-pulse text-transparent mb-5 h-12 w-full sm:w-2/5">Bussiness</h5>

                {/* In this issue */}
                <div className="flex flex-col-reverse sm:flex-row items-center mb-6">
                  <ul className="list-disc list-inside w-full md:w-1/2 ">
                      <li className="text-lg mb-3 mr-4 bg-gray opacity-30 animate-pulse text-transparent">Bussiness</li>
                      <li className="text-lg mb-3 mr-4 bg-gray opacity-30 animate-pulse text-transparent">Bussiness</li>
                      <li className="text-lg mb-3 mr-4 bg-gray opacity-30 animate-pulse text-transparent">Bussiness</li>
                      <li className="text-lg mb-3 mr-4 bg-gray opacity-30 animate-pulse text-transparent">Bussiness</li>
                      <li className="text-lg mb-3 mr-4 bg-gray opacity-30 animate-pulse text-transparent">Bussiness</li>
                  </ul>

                  <div className="relative w-full md:w-1/2 mb-3 md:mb-0 h-64 bg-gray opacity-30 animate-pulse"/>
                </div>
                      
                {/* TEXT CONTENT */}
                <div className="animate-pulse mb-40">
                    <div className="bg-gray opacity-30 h-7 mb-3 w-1/2"></div>
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

                <div className="animate-pulse">
                    <div className="bg-gray opacity-30 h-7 mb-3 w-1/2"></div>
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
    </div>
  );
}

export default Loading;

