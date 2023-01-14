import Image from 'next/image'
import Today from './(home)/Today'
import BigTech from './(home)/BigTech'
import Subscribe from './(components)/Subscribe'
import Sidebar from './(components)/Sidebar'
import NewsCarousel from './(home)/NewsCarousel'
import Other from './(home)/Other'
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";

export const revalidate = 60;

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      // const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        // image: imageModule.default,
      };
    })
  );

  return formattedPosts;
};

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 5) {
        trendingPosts.push(post);
      }
      if (post?.category === "today") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();
  
  return (
    <main className="leading-7 px-10">
      <div className="max-w-maxw mx-auto">
        <Today todayPosts={techPosts}/>
        <div className="md:flex gap-10 mb-5">
          <div className="basis-3/4">
            <BigTech />
          </div>
          <div className="basis-1/4">
            <Sidebar />
          </div>
        </div>
        <NewsCarousel/>        
        <Other/>
      </div>
    </main>
  );
}
