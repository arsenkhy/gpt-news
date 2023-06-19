import React from "react";
import Image from 'next/image'
import GithubLogo from 'public/assets/github-mark.svg'

const Footer = () => {
  return (
    <footer className="text-secondary py-5 px-10">
      <hr className="border-1 max-w-maxw mx-auto mb-4 opacity-20" />
      <div className="justify-between mx-auto gap-16 sm:flex max-w-maxw">
        <div className="basis-2/3 sm:mt-0">
            <h4 className="font-bold">Tech Digest</h4>
            <p className="my-5">
            Tech Digest is the ultimate destination for tech enthusiasts seeking a simplified
            and insightful way to stay up-to-date with the latest trends. It serves as a trusted
            source of information, providing a clear understanding of the ever-evolving world of
            technology. From culture to business, science to design, Tech Digest delves into the
            transformative power of technology in our lives. Unwrap the world of technology with concise daily 
            summaries. Get a snapshot of the most significant tech stories in no time.
            </p>
            <a href="https://github.com/arsenkhy" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center">
                    <Image
                    className="github-logo mr-3"
                    alt="github-logo"
                    src={GithubLogo}
                    width={20}
                    height={20}
                    />
                    <p className="font-mono text-lg">arsenkhy</p>
                </div>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;