"use client"
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type TodayCardProps = {
    className?: string;
    post: Post;
  };
  
  const TodayCard = ({ className, post }: TodayCardProps) => {
    const [ref, inView] = useInView({
      triggerOnce: true, 
    });

    return (
      <Link
        className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 rounded-lg`}
        href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      >
        <div className="z-0 relative w-full h-full">
          <Image
            className="rounded-lg"
            fill
            alt="tech"
            src={post?.image}
            sizes="(max-width: 480px) 100vw,
            src={post?.image}
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{ objectFit: "cover" }}
            />
        </div>
        <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual rounded-lg opacity-80 hover:opacity-100 transition-all"/>
        <motion.div 
        className="absolute z-2 bottom-0 left-0 p-3"
        ref={ref}
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: inView ? 1 : 0, y:0 }}
        transition={{ duration: 0.5 }}
        >
          <h4 className="inline-block px-5 py-1 bg-secondary bg-opacity-40 rounded-2xl text-primary text-xs">
          {post?.source}
          </h4> 
          <div className="text-primary mt-2 text-lg font-semibold hover:opacity-80 transition-all" >{post?.title}</div>
        </motion.div>
      </Link>
    );
  };

export default TodayCard;
