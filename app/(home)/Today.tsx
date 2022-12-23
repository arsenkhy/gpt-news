import Image from "next/image";
import Link from "next/link";
import React from "react";
import TodayCard from "app/(components)/TodayCard";
// import { Post } from "@prisma/client";

type Props = {
//   todayPosts: Array<Post>;
};

const Today = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="sm:grid gap-2 grid-cols-7 grid-rows-2 sm:h-[600px] my-3 ">
        <TodayCard
          className="col-span-2 row-span-1 bg-gray"
          // post={trendingPosts[1]}
        />
        <TodayCard
          className="col-span-3 row-span-2 bg-gray"
          // post={trendingPosts[0]}
        />  
        <TodayCard
          className="col-span-2 row-span-1 bg-gray"
          // post={trendingPosts[2]}
        />
        <TodayCard
          className="col-span-2 row-span-1 bg-gray"
          // post={trendingPosts[1]}
        />
        <TodayCard
          className="col-span-2 row-span-1 bg-gray"
          // post={trendingPosts[1]}
        />
      </div>
      <p className="text-sm">
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </p>  
    </section>
  );
};

export default Today;