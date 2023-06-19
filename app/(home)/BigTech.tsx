import React from "react";
import Card from "app/(components)/Card";
import { Post } from "@prisma/client";

type Props = {
  bigTechPosts: Array<Post>;
};

const BigTech = ({ bigTechPosts }: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1 opacity-20" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <p className="font-bold text-2xl">Big Tech & Startups</p>
      </div>

      {/* MAIN CARD */}
      <Card
        className=" sm:flex justify-between items-center gap-3 mt-7 mb-5"
        post={bigTechPosts[0]}
      />

      {/* CARDS ROW */}
      <div className="sm:flex justify-between gap-8">
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          post={bigTechPosts[1]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          post={bigTechPosts[2]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          post={bigTechPosts[3]}
        />
      </div>
    </section>
  );
};

export default BigTech;