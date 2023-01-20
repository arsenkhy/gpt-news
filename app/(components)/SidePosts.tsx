import React from "react";
import SideCard from "app/(components)/SideCard";
import { Post } from "@prisma/client";

type Props = {
  bigTechPosts: Array<Post>;
};

const SidePosts = ({ bigTechPosts }: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1 opacity-20" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-4">
        <p className="font-bold text-2xl">Top headlines today</p>
      </div>

      {/* CARDS */}
      <div className="flex flex-col gap-8">
        {bigTechPosts.map((post, index) => (
          <SideCard
            key={index}
            post={post}
          />
        ))}
      </div>
    </section>
  );
};

export default SidePosts;
