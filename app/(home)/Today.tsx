// "use client"; 
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TodayCard from "app/(components)/TodayCard";
// import { Editor, EditorContent, useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import { Post } from "@prisma/client";

type Props = {
  todayPosts: Array<Post>;
};

const Today = ({ todayPosts }: Props) => {

  // const editor = useEditor({
  //   extensions: [StarterKit],
  //   editorProps: {
  //     editable: (state) => false,
  //     attributes: {
  //       class:
  //         "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
  //     },
  //   },
  //   content: "<h1> Apple Launches Disappointing 15-Inch MacBook Air at WWDC 2023 </h1>\n<h2> Update: Saturday June 3rd </h2>\n<p> Jason Snell cautions that while Mac hardware may be launched at the WWDC event, the new Headset may take away the spotlight from a new MacBook Air reveal. </p>\n<h2> Update: Sunday June 4th </h2>\n<p> Alex Wawro questions the need for a 15-inch MacBook Air. He wonders which MacBook is the best to buy among Apple's vast laptop portfolio, and notes that Apple will need to explain the thinking behind the new MacBook and the difference it can make. </p>\n<p> Apple's new 15-inch MacBook Air seems to be a compelling retail package with disappointing specs. It uses last year's M2 chipset and does not offer anything new to the MacBook Air line, except for the larger display. Apple also plans to launch two new desk-bound Macs, which will showcase Apple Silicon chips, ahead of the Mac Studio release. </p>",
  // });


  return (
    <section className="pt-3 pb-10">
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
      <p className="text-sm">
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </p>



      {/* <div>
        <EditorContent editor={editor} />
      </div> */}



    </section>
  );
};

export default Today;