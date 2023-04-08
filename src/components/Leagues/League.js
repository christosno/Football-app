import React from "react";
import { Mask } from "react-daisyui";
import { useDispatch } from "react-redux";
import {
  setDisplayComponent,
  setSelectedLeague,
} from "../../store/displaySlice";

const League = ({ name, logo, id }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setDisplayComponent("MATCHES"));
    dispatch(setSelectedLeague(name));
  };

  return (
    <div
      onClick={clickHandler}
      className="flex w-full px-2 py-1 mb-1 space-x-4 justify-strech items-center align-middle hover:bg-base-200 rounded-xl cursor-pointer "
    >
      <div className=" md:w-1/4 w-1/8">
        <Mask src={logo} className="rounded h-6 w-6" />
      </div>
      <div className="md:w-3/4 w-2/8 text-neutral-content text-sm">
        {name?.length > 11 ? name.slice(0, 10) + "..." : name}
      </div>
    </div>
  );
};

export default League;
