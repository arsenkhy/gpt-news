import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "@prisma/client";

type Props = {
  className?: string;
  post: Post;
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
  rounded?: boolean;
};

const Card = ({
  className,
  imageHeight = "h-80",
  post,
  isSmallCard = false,
  isLongForm = false,
  rounded = false,
}: Props) => {
  const { id, title, source, publishedAt, image, snippet } = post || {};

  const date = new Date(publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={className}>
      <Link
        className="basis-full opacity-90 hover:opacity-100 transition-all"
        href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      >
        <div className={`relative w-auto ${imageHeight}`}>
          <Image
            className={`${rounded ? "rounded-xl" : ""}`}
            fill
            alt="tech"
            src={image}
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 75vw,
                  (max-width: 1060px) 50vw,
                  33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="basis-full">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`} style={{ textDecoration: 'none' }} >
          <h4
            className={`font-bold hover:text-third transition-all
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            {title}
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">{source}</h5>
          <h6 className="text-secondary text-xs">{formattedDate}</h6>
        </div>
        <p
          className={`text-secondary ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        > 
          {snippet}
        </p>
      </div>
    </div>
  );
};

export default Card;
