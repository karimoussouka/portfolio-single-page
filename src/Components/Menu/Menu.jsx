import "./Menu.scss";

import React from "react";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#Intro">Intro</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#Works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
