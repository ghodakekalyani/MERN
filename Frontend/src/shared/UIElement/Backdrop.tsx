import React from "react";
import ReactDOM from "react-dom";
import "./Backdrop.less";

const Backdrop = (props: any) => {
  const portalDiv = document.getElementById("backdrop-hook")!;
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={() => props.setOpenDrawer(false)}></div>,
    portalDiv
  );
};

export default Backdrop;
