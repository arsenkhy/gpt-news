import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "@prisma/client";

type Props = {
  post: Post;
};

const SideCard = ({
  post,
}: Props) => {
  const { title, source, image } = post || {};

  return (
    <div className="flex justify-between gap-3">
      <Link
        className="basis-1/3 opacity-90 hover:opacity-100 transition-all"
        href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      >
        <div className={`relative w-auto h-24 md:h-16 `}>
          <Image
            fill
            alt="tech"
            src={image}
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="basis-2/3">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`} style={{ textDecoration: 'none' }} >
          <h4
            className="font-bold hover:text-third transition-all text-base line-clamp-4">
            {title}
          </h4>
        </Link>
        <div className="flex items-center my-2 gap-3 text-primary rounded-lg">
            <div className="inline-block bg-secondary bg-opacity-70 rounded-2xl py-1 px-2">
                <h5 className="text-xs">{source}</h5>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;

