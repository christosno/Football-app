import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCountry,
  setDisplayComponent,
} from "../../store/displaySlice";

const DisplaySelectedCountry = () => {
  const selectedCountry = useSelector((store) => store.display.selectedCountry);

  const dispatch = useDispatch();

  return (
    <div className="flex items-center px-2 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
        onClick={() => {
          dispatch(setSelectedCountry(null));
          dispatch(setDisplayComponent("COUNTRIES"));
        }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
      <span className="text-center ml-4 text-neutral-content justify-self-start text-lg font-medium">
        {selectedCountry}
      </span>
    </div>
  );
};

export default DisplaySelectedCountry;
