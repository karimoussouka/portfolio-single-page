import React from "react";
import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,

      strings: [
        " Web Developer",
        " Wordpress Manager",
        " SEO Manager",
        " Chef de projet",
      ],
    });
  }, []);
  return (
    <div className="Intro" id="Intro">
      <div className="leftpart">
        <div className="imagecontainer">
          <img src="img/man.png" alt="" />{" "}
        </div>
      </div>
      <div className="rightpart">
        <div className="wrapper">
          <h2>Hi there, i'm</h2>
          <h1>Abdelkarim oussouka</h1>
          <h3>
            Freelancer
            <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#Portfolio">
          <img src="img/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
