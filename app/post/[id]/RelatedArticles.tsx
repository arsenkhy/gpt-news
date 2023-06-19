import React from "react";
import Card from "app/(components)/Card";
import { Post } from "@prisma/client";

type Props = {
   relatedPosts: Array<Post>;
};

const RelatedArticles = ({ relatedPosts }: Props) => {
  return (
    <section className="">
      <hr className="border-1 border-secondary opacity-20 my-6" />
      {/* HEADER */}
      <div className="inline-flex items-center gap-3">
        <p className="m-0 font-bold text-2xl">Related Articles</p>
      </div>


      {/* CARDS ROW */}
      <div className="sm:flex justify-between gap-8">
        <Card
          className="basis-1/3 sm:mt-0"
          imageHeight="h-64 mb-10"
          rounded={true}
          post={relatedPosts[0]}
        />
        <Card
          className="basis-1/3 sm:mt-0"
          imageHeight="h-64 mb-10"
          rounded={true}
          post={relatedPosts[1]}
        />
        <Card
          className="basis-1/3 sm:mt-0"
          imageHeight="h-64 mb-10"
          rounded={true}
          post={relatedPosts[2]}
        />
      </div>
    </section>
  );
};

export default RelatedArticles;