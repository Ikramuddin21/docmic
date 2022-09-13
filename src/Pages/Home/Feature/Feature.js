import React from 'react';
import './Feature.css';

const Feature = ({ feature }) => {
    const { title, description, img } = feature;
    return (
        <div className="feature">
            <img src={require(`../../../${img}`)} alt="" />
            <div className="feature-text-area">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Feature;