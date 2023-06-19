import { Post } from "@prisma/client";
import React from "react";
import TodayCard from "app/(components)/TodayCard";

type Props = {
  todayPosts: Array<Post>;
};

const Today = ({ todayPosts }: Props) => {
  return (
    <section className="pt-3">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-5 mt-2">
        <p className="font-bold text-2xl ">Today's Spotlight</p>
      </div>

      <div className="sm:grid gap-3 grid-cols-7 grid-rows-2 sm:h-[600px] my-3 ">
        <TodayCard
          className="col-span-2 row-span-1 "
          post={todayPosts[1]}
        />
        <TodayCard
          className="col-span-3 row-span-2 "
          post={todayPosts[0]}
        />  
        <TodayCard
          className="col-span-2 row-span-1 "
          post={todayPosts[2]}
        />
        <TodayCard
          className="col-span-2 row-span-1 "
          post={todayPosts[3]}
        />
        <TodayCard
          className="col-span-2 row-span-1 "
          post={todayPosts[4]}
        />
      </div>
    </section>
  );
};

export default Today;