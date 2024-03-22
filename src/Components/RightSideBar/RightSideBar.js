import React, { useEffect, useState } from "react";
import "./RightSideBar.css";
import Card from "../Card/Card";

const RightSideBar = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((error) => setError(error.message)); // Handle fetch errors
  }, []); // Empty dependency array to execute the effect only once

  console.log(data);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="rightSideBar">
      {data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default RightSideBar;
