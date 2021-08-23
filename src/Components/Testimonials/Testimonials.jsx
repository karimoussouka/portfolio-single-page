import React from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Helena Abi",
      icon: "img/youtube.png",
      title: "Senior Developer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium.",
      img: "https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg",
    },
    {
      id: 2,
      name: "Karim Suka",
      icon: "img/linkedin.png",
      title: "CEO Skill-team",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium.",
      img: "https://blogs-images.forbes.com/danschawbel/files/2017/12/Dan-Schawbel_avatar_1512422077-400x400.jpg",
      featured: true,
    },
    {
      id: 3,
      name: "Marta Seman",
      icon: "img/twitter.png",
      title: "Co-Founder Of Alka",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium.",
      img: "https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg",
    },
  ];
  return (
    <div className="Testimonials" id="Testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="img/rightArrow.png" className="left" alt="" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h5>{d.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
