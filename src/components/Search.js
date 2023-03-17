import React from "react";
import { Input, Button } from "react-daisyui";

const Search = ({ onCloseSearchModal }) => {
  return (
    <div className="w-full component-preview p-4 items-center justify-center gap-2 font-sans absolute top-24 z-30 ">
      <Input className="w-full max-w" placeholder="Search" />
      <Button
        onClick={onCloseSearchModal}
        size="sm"
        shape="circle"
        className="absolute right-2 top-2"
      >
        ✕
      </Button>
    </div>
  );
};

export default Search;
