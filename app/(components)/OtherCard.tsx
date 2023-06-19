import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "@prisma/client";

type Props = {
    className?: string;
    categoryTitle: string;
    posts: Post[];
};

const OtherCard = ({
    className,
    categoryTitle,
    posts,
  }: Props) => {
  return (
    <div className={`mb-10 ${className}`}>
        <div className="inline-block border-2 border-secondary rounded-2xl mb-2">
            <p className="text-lg font-bold text-secondary mx-3 my-1">{categoryTitle}</p>
        </div>
            
        {/* IMAGE */}
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${posts[0]?.id}`}
              className="opacity-90 hover:opacity-100 transition-all"      
            >
            <div className="relative w-auto mb-3 bg-gray h-80" >
            <Image
                fill
                alt="tech"
                src={posts[0]?.image}
                sizes="(max-width: 480px) 100vw,
                    (max-width: 768px) 75vw,
                    (max-width: 1060px) 50vw,
                    33vw"
                style={{ objectFit: "cover" }}
            />
            </div>
        </Link> 

        {/* LINKS */}
        <div className="flex flex-col gap-3">
            <Link className="font-semibold text-lg line-clamp-2" href={`${process.env.NEXT_PUBLIC_URL}/post/${posts[0]?.id}`}>{posts[0].title}</Link>
            <hr className="border-1 opacity-20" />
            <Link className="font-semibold text-lg line-clamp-2" href={`${process.env.NEXT_PUBLIC_URL}/post/${posts[1]?.id}`}>{posts[1].title}</Link>
            <hr className="border-1 opacity-20" />
            <Link className="font-semibold text-lg line-clamp-2" href={`${process.env.NEXT_PUBLIC_URL}/post/${posts[2]?.id}`}>{posts[2].title}</Link>
        </div>    

            
    </div>
  );
};

export default OtherCard;