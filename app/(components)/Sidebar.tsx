import Subscribe from "./Subscribe";
import TrySearch from "./TrySearch";
import React from "react";
import SidePosts from "app/(components)/SidePosts";
import { Post } from "@prisma/client";

type Props = {
  todayPosts?: Array<Post>;
};

const Sidebar = ({ todayPosts = [] }: Props) => {
  return (
    <section className="mt-10 overflow-y-auto sticky top-0">
      <hr className="border-1 opacity-20 pt-5" />
      <Subscribe />
      {todayPosts && todayPosts.length > 0 && <SidePosts bigTechPosts={todayPosts} />}
      <TrySearch />
    </section>
  );
};

export default Sidebar;