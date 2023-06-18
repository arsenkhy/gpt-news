import Image from "next/image";
import React from "react";
import { prisma } from "@/app/api/client";
import { Post } from "@prisma/client";
import Sidebar from "../(components)/Sidebar";
import TextContent from "../(components)/TextContent";
import Card from "../(components)/Card";

const getPost = async (id: string) => {
    const post: Post | null = await prisma.post.findUnique({
      where: { id },
    });
  
    if (!post) {
      console.log(`Post with id: ${id} not found`);
      return null;
    }
    
    return post;
  };

const TLDR = async () => {
  const id1 = 'clizglnhb0000wdyinekt1hyz';
  const id2 = 'climhrfif0004wd1a2yw0jb19';
  const post = await getPost(id1);  
  const post2 = await getPost(id2);  

  if (!post) {
    return <div>Post Not Found</div>;
  } else if (!post2) {
    return <div>Post Not Found</div>;
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-10 leading-7">
        <div className="max-w-[1120px] mx-auto">

            <div className="flex items-center mt-5 sm:mt-10">
                <span className="text-xl sm:text-3xl mr-4">Key highlights:</span>
                <h1 className="text-xl sm:text-3xl font-bold">{formattedDate}</h1>
            </div>

            <div className="md:flex gap-10 mb-5">
                <div className="basis-3/4 mt-5 md:mt-10">
                    <hr className="border-1 opacity-20" />

                    {/*IN THIS ISSUE*/}
                    <div className="flex items-center gap-3 my-4">
                        <p className="font-bold text-2xl">In this issue</p>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row items-center mb-6">
                        <ul className="list-disc list-inside w-full md:w-1/2">
                            <li className="text-lg mb-3">Twitter's Chaotic Future: Social Movements 🔀</li>
                            <li className="text-lg mb-3">Toyota's Fun Ride Manual EV🚗</li>
                            <li className="text-lg mb-3">AI's Cognitive Limitations🤖</li>
                            <li className="text-lg mb-3">Climate Crisis Monetization🌍</li>
                            <li className="text-lg mb-3">AI Revolution in Corporate America💼</li>
                        </ul>

                        <div className="relative w-full md:w-1/2 mb-3 md:mb-0 h-64">
                            <Image
                                fill
                                alt="tech"
                                src={post2?.image}
                                sizes="(max-width: 480px) 100vw,
                                    (max-width: 768px) 75vw,
                                    (max-width: 1060px) 50vw,
                                    33vw"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    {/*IMPORTANT*/}
                    <hr className="border-1 opacity-20" />
                    <div className="flex items-center gap-3 my-4">
                        <p className="font-bold text-2xl">Important</p>
                    </div>

                    <div className="flex items-center mb-6">
                        <TextContent
                            content={post2?.content}
                        />
                    </div>

                    {/*INTRESTING*/}
                    <hr className="border-1 opacity-20" />
                    <div className="flex items-center gap-3 my-4">
                        <p className="font-bold text-2xl">Intresting</p>
                    </div>

                    <div className="flex items-center mb-6">
                        <TextContent
                            content={post2?.snippet}
                        />
                    </div>

                    {/*IN OTHER NEWS*/}
                    <hr className="border-1 opacity-20" />
                    <div className="flex items-center gap-3 my-4">
                        <p className="font-bold text-2xl">The big important story</p>
                    </div>

                    <Card
                        className=" sm:flex justify-between items-center gap-3 mt-7 mb-8"
                        post={post }
                    />

                     {/*THIS WEEK*/}
                    <hr className="border-1 opacity-20" />
                    <div className="flex items-center gap-3 my-4">
                        <p className="font-bold text-2xl">This week</p>
                    </div>

                    <div className="flex items-center mb-6">
                        <TextContent
                            content={post2?.title}
                        />
                    </div>

                </div>
                <div className="basis-1/4">
                    {/* <div className="overflow-y-auto sticky top-0"> */}
                        <Sidebar />
                    {/* </div>   */}
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};

export default TLDR;
