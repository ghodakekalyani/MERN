import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.less";

const SideDrawer = (props: any) => {
  const content = (
    <aside className="side-drawer" onClick={() => props.onClick()}>
      {props.children}
    </aside>
  );
  const portalDiv = document.getElementById("drawer-hook")!;
  return ReactDOM.createPortal(content, portalDiv);
};

export default SideDrawer;
