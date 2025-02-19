import React from "react";
import "./Destinations.css";
import rio from "../../assets/christtheredeemer.jpg";
import americas from "../../assets/america.svg";
import safari from "../../assets/safari.jpg";
import africa from "../../assets/africa.svg";
import rome from "../../assets/rome.jpg";
import europe from "../../assets/europe.svg";
import buddha from "../../assets/hongkong.webp";
import asia from "../../assets/asia.svg";
import opera from "../../assets/opera.jpg";
import aussie from "../../assets/asia.svg";
import seas from "../../assets/seas.webp";
import world from "../../assets/world.svg";


const Destinations = () => {
  return (
      <div className="destinations">
        <div className="destination">
          <img src={rio} alt="" />
          <div className="caption">
            <img src={americas} alt="" />
            <p>The Americas</p>
          </div>
        </div>
        <div className="destination">
          <img src={safari} alt="" />
          <div className="caption">
            <img src={africa} alt="" />
            <p>Africa</p>
          </div>
        </div>
        <div className="destination">
          <img src={rome} alt="" />
          <div className="caption">
            <img src={europe} alt="" />
            <p>Europe</p>
          </div>
        </div>
        <div className="destination">
          <img src={buddha} alt="" />
          <div className="caption">
            <img src={asia} alt="" />
            <p>Asia</p>
          </div>
        </div>
        <div className="destination">
          <img src={opera} alt="" />
          <div className="caption">
            <img src={aussie} alt="" />
            <p>Australia</p>
          </div>
        </div>
        <div className="destination">
          <img src={seas} alt="" />
          <div className="caption">
            <img src={world} alt="" />
            <p>High Seas</p>
          </div>
        </div>
      </div>
  );
};

export default Destinations;
