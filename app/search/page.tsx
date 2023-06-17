import React from "react";
import SearchHome from "./SearchHome"
import SearchInput from "./SearchInput";

const Search = async () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-10 leading-7">
        <div className="max-w-maxw mx-auto">
          <SearchHome />
          <SearchInput />
        </div>
      </main>
    </div>
  );
};

export default Search;
