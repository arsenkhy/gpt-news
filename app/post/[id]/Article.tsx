import React from "react";
import Image from "next/image";
import Link from "next/link";
import TextContent from "./TextContent"
import { Post } from "@prisma/client";
import GptLogo from "public/assets/gpt.svg"
import RelatedArticles from "./RelatedArticles";

type Props = {
  post: Post;
  relatedPosts: Post[];
};

const Content = ({ post, relatedPosts }: Props) => {

  const categoryMappings: { [key: string]: string } = {
    today: 'New',
    bigTech: 'Business',
    AI: 'AI',
    gadgets: 'Tech & Gadgets',
    science: 'Science',
    culture: 'Culture',
    }

    const date = new Date(post?.publishedAt);
    const options = { year: "numeric", month: "long", day: "numeric" } as any;
    const formattedDate = date.toLocaleDateString("en-US", options);

    const generatedDate = new Date(post?.createdAt);
    const generatedFormattedDate = generatedDate.toLocaleDateString("en-US", options);

  return (
    <div className="prose w-full max-w-full mb-10 mt-5">
      {/* BREADCRUMBS */}
      <h5 className="text-secondary italic">{categoryMappings[post.category]}</h5>

        {/* HEADER */}
      <h3 className="font-bold text-3xl mt-3">{post.title}</h3>
        <div className="flex gap-2 items-center">
            <div className="bg-secondary py-1 px-3 opacity-70 rounded-2xl">
                <h6 className="text-primary text-sm">{post.source}</h6>
            </div>
            <h6 className="text-secondary text-sm">|&nbsp;&nbsp;{formattedDate}</h6>
            {post.author !== "" && (
               <h5 className="text-secondary text-sm">|&nbsp;&nbsp;originally by {post.author}</h5>
            )}
        </div>


        {/* IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96 sm:h-128">
            <Image
            className="rounded-xl"
            fill
            alt={post.title}
            src={post.image}
            sizes="(max-width: 480px) 100vw,
                    (max-width: 768px) 85vw,
                    (max-width: 1060px) 75vw,
                    60vw"
            style={{ objectFit: "cover" }}
            />
        </div>

        {/* TEXT CONTENT */}
        <TextContent
          content={post?.content}
        />

      {/* SUMMARIZED BY */}
      <hr className="border-1 border-secondary max-w-maxw mx-auto opacity-20 mb-5 mt-20" />
      <div className="flex items-center justify-between flex-col sm:flex-row">
        <div className="flex items-center">
          <Image className="logo my-0" alt="main-logo" src={GptLogo} width={30} height={30} />
          <p className="ml-2 my-0">
            Article summarized by{""}
            <span className="ml-2 italic">gtp-3.5 model</span> on{""}
            <span className="ml-2">{generatedFormattedDate}.</span>
          </p>
        </div>
        <Link href={post?.url} target="_blank">
          <div className="mt-4 sm:mt-0 ml-0 sm:ml-4 px-4 py-2 text-white bg-secondary rounded transition-all hover:scale-110">
            Read original article
          </div>
        </Link>
      </div>


      {/* RELATED ARTICLES */}  
      <RelatedArticles relatedPosts={relatedPosts}/>
    </div>
  );
};

export default Content;
