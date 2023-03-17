import React from "react";
import { Input } from "react-daisyui";

const Search = () => {
  return (
    <div className="w-full component-preview p-4 items-center justify-center gap-2 font-sans fixed top-24 z-30 ">
      <Input className="w-full max-w" placeholder="Search" />
    </div>
  );
};

export default Search;
