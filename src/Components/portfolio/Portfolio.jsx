import React from "react";
import "./Portfolio.scss";
import Listp from "../PotfolioList/ListP";
import { useState, useEffect } from "react";
import {
  DesignPortfolio,
  webPortfolio,
  BrandingPotfolio,
  DesktopPotfolio,
  FeaturedPorftolio,
} from "../../Data";

const Portfolio = () => {
  const [selected, seteSelected] = useState("Featured");
  const [data, seteData] = useState([]);

  const List = [
    {
      id: "Featured",
      title: "Featured",
    },
    {
      id: "Web",
      title: "Web APP",
    },
    {
      id: "Design",
      title: "Design",
    },
    {
      id: "Desktop",
      title: "Desktop App",
    },
    {
      id: "Branding",
      title: "Branding",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        seteData(FeaturedPorftolio);
        break;
      case "Web":
        seteData(webPortfolio);
        break;
      case "Design":
        seteData(DesignPortfolio);
        break;
      case "Desktop":
        seteData(DesktopPotfolio);
        break;
      case "Branding":
        seteData(BrandingPotfolio);
        break;

      default:
        seteData(FeaturedPorftolio);
        break;
    }
  }, [selected]);

  // ===============================
  // ===============================
  return (
    <div className="Portfolio" id="Portfolio">
      <h1>Potfolio </h1>
      <ul>
        {List.map((item) => (
          <Listp
            title={item.title}
            active={selected === item.id}
            seteSelected={seteSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} width="400px" alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
