import React, { useState } from "react";
import "./Home.css";
import NavBar from "../../Components/NavBar/NavBar";
import FilterBar from "../../Components/FilterBar/FilterBar";
import SideBar from "../../Components/SideBar/SideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [hide, setHide] = useState(false);
  return (
    <div>
      <NavBar />
      <div className="header">
        <div className="head">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
      <div className="home">
        <FilterBar setHide={setHide} hide={hide} />
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          {hide && <SideBar />}
          <RightSideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
