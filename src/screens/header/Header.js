import React from "react";
import { ReactTyped } from "react-typed";
import "./header.css";

function Header() {
  return (
    <div className="main-info">
      <h1>What am I?</h1>
      <ReactTyped
        strings={[
          "An Art Director",
          " ",
          "A Senior Graphic Designer",
          " ",
          "An Illustrator",
          " ",
          "A Cartoonist",
          " ",
          "A Front-End Developer",
          " ",
          "A Motion Graphics Designer",
          " ",
          "A Print Designer",
          " ",
          " ",
          " ",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
}

export default Header;
