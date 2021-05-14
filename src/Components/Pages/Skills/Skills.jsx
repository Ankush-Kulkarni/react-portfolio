import React from "react";
import "./Skills.css";
import Photo1 from "../../../Images/Photo1.svg";
import Photo2 from "../../../Images/Photo2.svg";
import Photo3 from "../../../Images/Photo3.svg";
import Photo4 from "../../../Images/Photo4.svg";
import Photo5 from "../../../Images/Photo5.svg";
import Photo6 from "../../../Images/Photo6.svg";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <img src={Photo1} alt="Photo1" />

        <img src={Photo2} alt="Photo2" />
        <img src={Photo3} alt="Photo3" />
        <img src={Photo4} alt="Photo4" />
        <img src={Photo5} alt="Photo5" />
        <img src={Photo6} alt="Photo6" />
      </div>
    </>
  );
};

export default Skills;
