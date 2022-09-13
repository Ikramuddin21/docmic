import React from 'react';
import './Testimonials.css';
import testimonialImg from '../../../images/testimonials/ikbal1.png';

const Testimonials = () => {
    return (
        <section className="testimonials-container">
            <div className="testimonials-wrapper">
                <h4 className="shared-h4 text-center highlight-2">Testimonial</h4>
                <h2 className="shared-h2 text-center">What they say?</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <div className="testimonial-left">
                            <h5>David Jeams</h5>
                            <h6>Patient</h6>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div className="testimonial-right">
                            <img src={testimonialImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;