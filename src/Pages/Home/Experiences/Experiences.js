import React from 'react';
import pose4 from '../../../images/experiences/pose_4.png';
import './Experiences.css';

const Experiences = () => {
    return (
        <section className="experiences-container">
            <div className="experiences-wrapper">
                <div className="experiences-left">
                    <h4 className="highlight-2 shared-h4">16+ Years Experiences</h4>
                    <h2 className="shared-h2">We Are Always ensure Best Medical Treatment For Your Health</h2>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                </div>

                <div className="experiences-right">
                    <img src={pose4} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Experiences;