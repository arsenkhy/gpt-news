import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/assets/main_logo.png'
import { BiSearch } from 'react-icons/bi'

type Props = {}

const Header = ({}: Props) => {
  return (
    <header className="mb-0">
      <nav className="flex justify-between items-center w-full text-secondary px-10 py-4">
        
        {/* LOGO */}
        <div className="flex justify-between items-center gap-7">
          <Link className= "flex justify-between items-center gap-5" href="/" rel="noreferrer">
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
          <Link className="hidden sm:block text-lg font-semibold sm:hover:text-third transition-all" href={`${process.env.NEXT_PUBLIC_URL}`}>Home</Link>
          <Link className="text-lg font-semibold sm:hover:text-third transition-all" href={`${process.env.NEXT_PUBLIC_URL}/tldr`}>TLDR</Link>
          <Link className="text-lg font-semibold sm:hover:text-third transition-all" href={`${process.env.NEXT_PUBLIC_URL}/about`}>About</Link>
        </div>

        {/* SEARCH BUTTON */}
        <Link className="flex items-center hover:text-secondary bg-secondary border-2 border-secondary rounded-3xl mb-2 shadow-xl hover:shadow-3xl focus:outline-none focus:ring-3 focus:ring-secondary sm:opacity-80 hover:opacity-100 transition-all" href={`${process.env.NEXT_PUBLIC_URL}/search`}>
          <BiSearch className="text-xl text-primary ml-3 sm:text-3xl" />
          <p className="text-md sm:text-lg font-semibold search p-3 mr-2 text-primary">Search</p>
        </Link>
      </nav>

      <div className="px-10">
        <hr className="border-1 opacity-20" />
      </div>
    </header>  
  )
}

export default Header