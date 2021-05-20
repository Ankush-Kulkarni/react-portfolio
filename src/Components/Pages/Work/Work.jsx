import React from "react";
import "./Work.css";
import Card from "../../Cards/Card";
import Sdata from "../../Data/Sdata";

const Work = () => {
  return (
    <>
      <div className="photos">
        {Sdata.map((val, index) => {
          return (
            <>
              <Card
                key={val.id}
                Cname={val.Cname}
                link={val.link}
                image={val.image}
                heading={val.heading}
              />
            </>
          );
        })}
        {/* <Card
          Cname="whit_box"
          link="https://laughing-mestorf-34e765.netlify.app/"
          image={snow_winter}
          heading="Weather app"
        />
        <Card
          Cname="blac_box"
          link="https://confident-jang-2b18ab.netlify.app/"
          image={Aeroplane}
          heading="Nature Travels"
        /> */}
        {/* <div className="whit_box">
          <a href="https://laughing-mestorf-34e765.netlify.app/">
            <figure>
              <img src={snow_winter} alt="snow" />
              <figcaption>Weather app</figcaption>
            </figure>
          </a>
        </div> */}

        {/* <div className="blac_box">
          <a href="https://confident-jang-2b18ab.netlify.app/">
            <figure>
              <img src={Aeroplane} alt="Aeroplane" />
              <figcaption>Nature Travels</figcaption>
            </figure>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Work;
