import React from "react";
import "./Work.css";
import snow_winter from "../../../Images/snow_winter.svg";
import Aeroplane from "../../../Images/Aeroplane.svg";

const Work = () => {
  return (
    <>
      <div className="photos">
        <div className="whit_box">
          <a href="https://laughing-mestorf-34e765.netlify.app/">
            <figure>
              <img src={snow_winter} alt="snow" />
              <figcaption>Weather app</figcaption>
            </figure>
          </a>
        </div>

        <div className="blac_box">
          <a href="https://confident-jang-2b18ab.netlify.app/">
            <figure>
              <img src={Aeroplane} alt="Aeroplane" />
              <figcaption>Nature Travels</figcaption>
            </figure>
          </a>
        </div>

        {/* 2nd */}

        {/* <div className="blac_box1">
          <h1>
            Hi i'm <strong>Ankush kulkarni</strong>
          </h1>
          <hr />
          <p>I Love to make Amazing websites</p>
        </div> */}
      </div>
    </>
  );
};

export default Work;
