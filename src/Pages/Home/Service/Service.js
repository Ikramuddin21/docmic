import React from "react";
import './Service.css';

const Service = ({ service }) => {
  const { title, description, img } = service;

  return (
    <div className="service">
      <img src={require(`../../../${img}`)} alt="" />
      <div className="service-text-area">
        <h5>{title}</h5>
        <p>{description}.</p>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
};

export default Service;
