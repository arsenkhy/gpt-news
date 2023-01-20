import React from 'react'
import OtherCard from 'app/(components)/OtherCard';
import { Post } from "@prisma/client";

type Props = {
  otherPosts: Array<Array<Post>>;
}

const Other = ({otherPosts}: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1 opacity-20" />

      <div className="sm:flex justify-between items-strech gap-3 mt-7 mb-5">
        <OtherCard className="basis-1/3" categoryTitle="Tech & Gadgets" posts={otherPosts[0]}/>
        <OtherCard className="basis-1/3 md:mx-8" categoryTitle="Science" posts={otherPosts[1]}/>
        <OtherCard className="basis-1/3" categoryTitle="Culture" posts={otherPosts[2]}/>
      </div>  
    </section>
  );
};

export default Other;