import React from "react";
import Image from "next/image";
import Logo from 'public/assets/main_logo.png'

const About = async () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-10 leading-7">
        <div className="max-w-[920px] mx-auto">

          <div className="md:flex gap-10 mb-5 md:mt-48">
            <div className="basis-1/2 mt-5 md:mt-10">
              <h1 className="text-3xl font-bold mb-10">About</h1>

              <p className="text-lg mb-5">
                Welcome to a tech-focused web blog that is revolutionizing news consumption. Powered by ChatGPT, the automated system generates concise summaries of tech articles sourced from the industry's best. Say goodbye to lengthy reads and information overload as the essence of each article is extracted and presented in a easily digestible format.
              </p>

              <p className="text-lg mb-5">
                With a <a className="underline text-third" href={`${process.env.NEXT_PUBLIC_URL}/search`}>custom search</a> feature and quick summaries, you have the power to explore specific topics and access tailored articles. This platform is dedicated to simplifying the way tech news are consumed. Stay up-to-date on your preferred topics with summarized news delivery, bringing you the main points you need to know
              </p>
              
            </div>

            <div className="basis-1/2 mt-5 md:mt-10 flex-col flex justify-center items-center">
              <Image
                className="logo"
                alt="main-logo"
                src="https://img.icons8.com/material-outlined/96/decentralized-network.png"
                width={150}
                height={150}
              />
              <h1 className="text-5xl md:text-5xl text-secondary font-bold mt-3">Tech Digest</h1>
            </div>    


          </div>


        </div>
      </main>
    </div>
  );
};

export default About;
