import Image from "next/image";
import Link from "next/link";
import React from "react";

type TodayCardProps = {
    className?: string;
    // post: Post;
  };
  
  const TodayCard = ({ className }: TodayCardProps) => {
    return (
      <Link
        className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70 rounded-lg`}
        // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
        href={`/`}
      >
        <div className="z-0 relative w-full h-full">
          {/* <Image
            fill
            alt="tech"
            placeholder="blur"
            src={post?.image}
            sizes="(max-width: 480px) 100vw,
            src={post?.image}
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{ objectFit: "cover" }}
            /> */}
        </div>
        <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual rounded-lg"/>
        <div className="absolute z-2 bottom-0 left-0 p-3">
          <h4 className="inline-block px-5 py-1 bg-primary text-secondary">
            category
          </h4>
          <div className="text-primary mt-2">title</div>
        </div>
      </Link>
    );
  };

export default TodayCard;
