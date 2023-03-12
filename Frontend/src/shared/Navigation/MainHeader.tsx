import React from "react";
import "./MainHeader.less";

const MainHeader = (props: any) => {
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
