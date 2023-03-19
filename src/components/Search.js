import React from "react";
import { Input, Button } from "react-daisyui";

const Search = ({ onCloseSearchModal, position = null }) => {
  return (
    <div
      className={`w-full component-preview items-center justify-center gap-2 font-sans ${
        position === "absolute" && "p-4 absolute top-24 z-30"
      } `}
    >
      <Input
        size={position ? "md" : "sm"}
        className="w-full max-w"
        placeholder="Search"
      />
      {position && (
        <Button
          onClick={onCloseSearchModal}
          size="sm"
          shape="circle"
          className="absolute right-2 top-2"
        >
          ✕
        </Button>
      )}
    </div>
  );
};

export default Search;
