import React from "react";
import "./TopBar.scss";
import { Person, Mail } from "@material-ui/icons";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"TopBar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#Works" className="logo">
            Skilled Team
          </a>
          <div className="itemContact">
            <Person className="icon" />
            <span>+212666687687</span>
          </div>
          <div className="itemContact">
            <Mail className="icon" />
            <span>oussouka.karim@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="humberg" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
