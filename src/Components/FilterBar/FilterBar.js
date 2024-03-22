import React, { useState } from "react";
import "./FilterBar.css";
import arrow_left from "../../images/arrow-left.svg";
import arrow_down from "../../images/arrow-left1.svg";
import arrow_right from "../../images/arrow-right.svg";

const FilterBar = ({ setHide, hide }) => {
  const [recommended, setRecommended] = useState(false);

  const handleHide = () => {
    setHide(!hide);
  };

  const handleRecommended = () => {
    setRecommended(!recommended);
  };
  return (
    <div className="filterbar">
      <div className="left">
        <ul>
          <li>3425 Items</li>
          <li onClick={handleHide}>
            {hide === true ? (
              <a href="#">
                <img src={arrow_left} alt="" /> HIDE FILTER
              </a>
            ) : (
              <a href="#">
                <img src={arrow_right} alt="" /> SHOW FILTER
              </a>
            )}
          </li>
        </ul>
      </div>
      <div className="leftbar">FILTER</div>
      <div className="right" onClick={handleRecommended}>
        RECOMMENDED <img src={arrow_down} alt="" />
        {recommended && (
          <div className="menu">
            <ul>
              <li>RECOMMENDED</li>
              <li>NEWEST FIRST</li>
              <li>POPULAR</li>
              <li>PRICE:HIGH TO LOW</li>
              <li>PRICE:LOW TO HIGH</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
