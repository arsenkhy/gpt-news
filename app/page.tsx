import Image from 'next/image'
import Today from './(home)/Today'
import BigTech from './(home)/BigTech'
import Sidebar from './(components)/Sidebar'
import NewsCarousel from './(home)/NewsCarousel'
import Other from './(home)/Other'
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";

export const revalidate = 10;

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      return {
        ...post,
      };
    })
  );

  return formattedPosts;
};

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const todayPosts: Array<Post> = [];
    const bigTechPosts: Array<Post> = [];
    const hotTopicPosts: Array<Post> = [];
    const gadgetsPosts: Array<Post> = [];
    const sciencePosts: Array<Post> = [];
    const culturePosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (post?.category === "today") {
        todayPosts.push(post);
      } else if (post?.category === "bigTech") {
        bigTechPosts.push(post); 
      } else if (post?.category === "AI") {
        hotTopicPosts.push(post);
      } else if (post?.category === "gadgets") {
        gadgetsPosts.push(post);
      } else if (post?.category === "science") {
        sciencePosts.push(post);
      } else if (post?.category === "culture") {
        culturePosts.push(post);
      }
    });

    return [todayPosts, bigTechPosts, hotTopicPosts, gadgetsPosts, sciencePosts, culturePosts];
  };

  const [todayPosts, bigTechPosts, hotTopicPosts, gadgetsPosts, sciencePosts, culturePosts] = formatPosts();

  return (
    <main className="leading-7 px-10">
      <div className="max-w-maxw mx-auto">
        <Today todayPosts={todayPosts}/>
        <div className="md:flex gap-10 mb-5">
          <div className="basis-3/4">
            <BigTech bigTechPosts={bigTechPosts}/>
          </div>
          <div className="basis-1/4">
            <Sidebar />
          </div>
        </div>
        <NewsCarousel hotTopicPosts={hotTopicPosts}/>        
        <Other otherPosts={Array(gadgetsPosts, sciencePosts, culturePosts)}/>
      </div>
    </main>
  );
}
