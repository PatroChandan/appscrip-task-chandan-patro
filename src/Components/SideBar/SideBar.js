import React from "react";
import "./SideBar.css";
import checkbox from "../../images/Checkbox.svg";
import arrow_down from "../../images/arrow-left1.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <img src={checkbox} alt="" /> CUSTOMIZBLE
        </li>
        <li>
          <div>
            OCCASSION <img src={arrow_down} alt="" />
          </div>
          <h6>All</h6>
        </li>
        <li>
          <div>
            WORK <img src={arrow_down} alt="" />
          </div>
          <h6>All</h6>
        </li>
        <li>
          <div>
            FABRIC <img src={arrow_down} alt="" />
          </div>
          <h6>All</h6>
        </li>
        <li>
          <div>
            SEGMENT <img src={arrow_down} alt="" />
          </div>
          <h6>All</h6>
        </li>
        <li>
          <div>
            SUITABLE FOR <img src={arrow_down} alt="" />
          </div>
          <h6>All</h6>
        </li>
        <li>
          <div>
            RAW MATERIALS <img src={arrow_down} alt="" />
          </div>
          <h6>All</h6>
        </li>
        <li>
          <div>
            PATTERN <img src={arrow_down} alt="" />
          </div>
          <h6>All</h6>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
