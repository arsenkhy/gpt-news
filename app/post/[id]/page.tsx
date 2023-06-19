import React from "react";
import { prisma } from "@/app/api/client";
import { Post } from "@prisma/client";
import Sidebar from "@/app/(components)/Sidebar";
import Article from "@/app/post/[id]/Article";
import ServiceUnavailable from "@/app/(components)/ServiceUnavailable";

type Props = {
  params: { id: string };
};

export const revalidate = 6000;

const getPost = async (id: string) => {
  try {
    const post: Post | null = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      console.log(`Post with id: ${id} not found`);
      return null;
    }
    
    return post;
  } catch (error) {
    console.log("Error retrieving posts:", error);  
    return []; 
  }
};

const getRelatedPosts = async (postId: string, category: string): Promise<Post[]> => {
  try {
  if (category === 'today') {
    const relatedPosts: Post[] = await prisma.post.findMany({
      where: {
        NOT: {
          category: 'today',
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
    });

    return relatedPosts;
  } else {
    // Fetch posts from the same category
    const post: Post | null = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      console.log(`Post with id: ${postId} not found`);
      return [];
    }

    const relatedPosts: Post[] = await prisma.post.findMany({
      where: {
        category: post.category,
        NOT: {
          id: postId,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
    });

    return relatedPosts;
  }
} catch (error) {
  console.log("Error retrieving posts:", error);
  return []; 
}
};

const getTodayPosts = async (postId: string, category: string): Promise<Post[]> => {
  try {
  const todayPosts: Post[] = await prisma.post.findMany({
    where: {
      category: category,
      NOT: {
        id: postId,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 5,
  });

  return todayPosts;
} catch (error) {
  console.log("Error retrieving posts:", error);
  return []; 
}
};


const PostPage = async ({ params }: Props) => {
  const { id } = params;
  const post = await getPost(id);
  
  if (!post) {
    return <ServiceUnavailable />;
  } 
  //@ts-ignore
  const relatedPosts = await getRelatedPosts(id, post?.category || '');
  const todayPosts = await getTodayPosts(id, 'today');

  if (!relatedPosts || !todayPosts) {
    return (
      <ServiceUnavailable/>
    )
  }

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5 max-w-maxw mx-auto">
        <div className="basis-3/4">
          <Article post={post as Post} relatedPosts={relatedPosts}/>
        </div>
        <div className="basis-1/4">
          <Sidebar todayPosts={todayPosts}/>
        </div>
      </div>
    </main>
  );
};

export default PostPage;
