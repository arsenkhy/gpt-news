import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/assets/main_logo.png'
import { BiSearch } from 'react-icons/bi'

type Props = {}

function Header({}: Props) {
  return (
    <header className="mb-0">
      <nav className="flex justify-between items-center w-full text-secondary px-10 py-8">
        
        {/* LOGO */}
        <div className="flex justify-between items-center gap-7">
          <Link className= "flex justify-between items-center gap-5" href="/" target="_blank" rel="noreferrer">
            <Image
              className="logo"
              alt="main-logo"
              src={Logo}
              width={50}
              height={50}
            />
          <h1 className="text-3xl md:text-5xl hidden sm:block text-secondary font-bold">Tech Digest</h1>
          </Link>
        </div>

        {/* NAV LINKS */}  
        <div className="flex justify-between items-center gap-4 sm:gap-10">
          <Link className="hidden sm:block text-lg font-semibold hover:text-third hover:underline" href="/">Home</Link>
          <Link className="text-lg font-semibold hover:text-third hover:underline" href="/">TLDR
            {/* <h4 className="inline-block ml-2 px-3 py-1 rounded-lg bg-third text-primary">
              new
            </h4> */}
          </Link>
          <Link className="text-lg font-semibold hover:text-third hover:underline" href="/">About</Link>
        </div>

        {/* SEARCH BUTTON */}
        <Link className="flex items-center hover:text-secondary bg-secondary border-2 border-secondary rounded-3xl mb-2 shadow-xl hover:shadow-3xl focus:outline-none focus:ring-3 focus:ring-secondary hover:opacity-70" href="/">
          <BiSearch className="text-xl text-primary ml-3 sm:text-3xl" />
          <p className="text-md sm:text-lg font-semibold search p-3 mr-2 text-primary">Search</p>
        </Link>
      </nav>

      {/* 2ND HEADER */}
      <div className="px-10">
        <div className="flex justify-between gap-8 mt-5 mb-4 max-w-maxw mx-auto">
          {/* <div className="basis-2/3 md:mt-3">
            <h1 className="font-bold text-3xl md:text-5xl hidden sm:block">QUICK DAILY TECH UPDATES</h1>
            <p className="text-sm mt-3 hidden sm:block">
            Summarized insights into the world of technology by GPT-3
            </p>
          </div> */}
          <div className="basis-full w-full sm:w-auto h-32 bg-gray">
            For Image
          </div>
        </div>
        <hr className="border-1 max-w-maxw mx-auto opacity-20" />
      </div>
    </header>  
  )
}

export default Header