import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu, handleCloseMenu, handleSelect }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          {/* <img className="logo" src={logo} alt="" /> */}
          <button
            class="close-button"
            aria-label="Close alert"
            type="button"
            data-close
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <ul>
            <li onClick={() => handleSelect("SHOP")}>
              <a className="menu-item">SHOP</a>{" "}
            </li>
            <li onClick={() => handleSelect("SKILLS")}>
              <a className="menu-item">SKILLS</a>{" "}
            </li>
            <li onClick={() => handleSelect("STORIES")}>
              <a className="menu-item">STORIES</a>{" "}
            </li>
            <li onClick={() => handleSelect("ABOUT")}>
              <a className="menu-item">ABOUT</a>{" "}
            </li>
            <li onClick={() => handleSelect("CONTACT US")}>
              <a className="menu-item">CONTACT US</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
