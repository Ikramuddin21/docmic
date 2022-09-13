import React, { useEffect, useState } from 'react';
import pose7 from '../../../images/features/pose_7.png';
import Feature from '../Feature/Feature';
import './Features.css';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        const fetchFeatures = async () => {
            const res = await fetch("data.json");
            const data = await res.json();
            setFeatures(data.featuresData);
        };
        fetchFeatures();
    }, []);

    return (
        <section className="features-container">
            <div className="features-wrapper">
                <div className="features-left">
                    <img src={pose7} alt="" />
                </div>
                <div className="features-right">
                    <h4 className="shared-h4 highlight-2">Our Hospital Feature</h4>
                    <h2 className="shared-h2">Make An Appointment Easy And Fast Services</h2>
                    <div className="features">
                        {
                            features.map(feature => <Feature key={feature.id} feature={feature} />)
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Features;