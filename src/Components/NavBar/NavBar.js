import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../images/Logo.svg";
import shopping_bag from "../../images/shopping-bag.svg";
import heart from "../../images/heart.svg";
import language from "../../images/Language.svg";
import profile from "../../images/profile.svg";
import search_icon from "../../images/search-normal.svg";
import menu from "../../images/solar_hamburger-menu-linear.svg";
import MobileNav from "./MobileNav/MobileNav";

const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState("SHOP");
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <MobileNav
        isOpen={openMenu}
        toggleMenu={toggleMenu}
        handleCloseMenu={handleCloseMenu}
        handleSelect={handleSelect}
      />
      <div className="navbar">
        <div className="topbar">
          <div className="left">
            <img
              src={menu}
              alt=""
              className="icon menu-icon"
              onClick={toggleMenu}
            />
            <img src={logo} alt="" className="icon" />
          </div>
          <div className="mid">
            <h2>LOGO</h2>
          </div>
          <div className="right">
            <img src={search_icon} alt="" className="icon" />
            <img src={heart} alt="" className="icon" />
            <img src={shopping_bag} alt="" className="icon" />
            <img src={profile} alt="" className="icon profile-icon" />
            <select id="" name="language" className="language-select">
              <option value="ENG">ENG</option>
              <option value="HINDI">HINDI</option>
              <option value="ODIA">ODIA</option>
            </select>
          </div>
        </div>
        <div className="midbar">HOME | {selectedItem}</div>
        <div className="downbar">
          <ul>
            <li onClick={() => handleSelect("SHOP")}>SHOP</li>
            <li onClick={() => handleSelect("SKILLS")}>SKILLS</li>
            <li onClick={() => handleSelect("STORIES")}>STORIES</li>
            <li onClick={() => handleSelect("ABOUT")}>ABOUT</li>
            <li onClick={() => handleSelect("CONTACT US")}>CONTACT US</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
