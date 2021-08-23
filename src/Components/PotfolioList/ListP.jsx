import "./Listp.scss";
import React from "react";

const ListP = ({ id, title, active, seteSelected }) => {
  return (
    <li
      className={active ? "Listp active" : "Listp"}
      onClick={() => seteSelected(id)}
    >
      {title}
    </li>
  );
};

export default ListP;
