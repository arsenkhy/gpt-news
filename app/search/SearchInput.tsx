"use client";
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';

type Props = {
     s?: string;
  };

const SearchInput = ({ s = "" }: Props) => {
    const [searchTerm, setSearchTerm] = useState(s);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const encodedSearchQuery = encodeURIComponent(searchTerm);
        const searchRoute = `${process.env.NEXT_PUBLIC_URL}/search/${encodedSearchQuery}`;
        window.location.href = searchRoute;
      };
    
    return (
      <form onSubmit={handleSearch} className="mt-20 flex justify-center w-full">
        <div className="relative w-full max-w-[600px]">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search topic..."
            className="pl-10 pr-4 py-2 sm:py-3 ml-4 text-base border border-gray rounded-xl shadow-xl w-full"
          />
          <FaSearch size={15} className="absolute top-1/2 left-4 transform -translate-y-1/2 ml-3 text-gray" />
        </div>
      </form>
    );
};

export default SearchInput;
