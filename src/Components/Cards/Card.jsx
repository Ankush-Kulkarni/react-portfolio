import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card_container">
      <div className={props.Cname}>
        <a href={props.link}>
          <figure>
            <img src={props.image} alt="snow" />
            <figcaption>{props.heading}</figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
};

export default Card;
