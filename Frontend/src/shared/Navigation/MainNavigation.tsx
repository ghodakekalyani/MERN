import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElement/Backdrop";
import "./MainNavigation.less";
import Navlink from "./Navlink";

const MainNavigation = () => {
  const [isOpenDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      {isOpenDrawer && <Backdrop setOpenDrawer={setOpenDrawer} />}
      {isOpenDrawer && (
        <SideDrawer
          className="main-navigation__drawer-nav"
          show={isOpenDrawer}
          onClick={setOpenDrawer}
        >
          <Navlink />
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => setOpenDrawer(true)}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/newplace">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <Navlink />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
