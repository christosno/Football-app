import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

const portalElement = document.getElementById("overlays");

const Modal = ({ onCloseSearchModal }) => {
  return (
    <div className="bg-white">
      {ReactDOM.createPortal(
        <Search position="absolute" onCloseSearchModal={onCloseSearchModal} />,
        portalElement
      )}
    </div>
  );
};

export default Modal;
