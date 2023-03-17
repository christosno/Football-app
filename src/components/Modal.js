import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

const portalElement = document.getElementById("overlays");

const Modal = ({ onCloseModal }) => {
  return (
    <div className="bg-white">
      {ReactDOM.createPortal(<Search />, portalElement)}
    </div>
  );
};

export default Modal;
