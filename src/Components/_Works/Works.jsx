import React from "react";
import "./Works.scss";
import { useState } from "react";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "img/mobile.png",
      title: "Web App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium.",
      img: "img/slide1.jpeg",
    },
    {
      id: 2,
      icon: "img/globe.png",
      title: "Mobile Aplication",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium.",
      img: "img/slide2.jpg",
    },
    {
      id: 3,
      icon: "img/writing.png",
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium.",
      img: "img/slide3.jpg",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="Works">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgCont">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc} </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="img/arrow.png"
        className="arrow arrowLeft"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="img/arrow.png"
        className="arrow arrowright"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
