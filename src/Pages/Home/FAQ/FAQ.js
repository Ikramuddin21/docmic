import React, { useEffect, useState } from 'react';
import pose8 from '../../../images/faqs/pose_8.png';
import experts from '../../../images/faqs/experts.png';
import './FAQ.css';

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchFeatures = async () => {
            const res = await fetch("data.json");
            const data = await res.json();
            setFaqs(data.faqsData);
        };
        fetchFeatures();
    }, []);

    return (
        <section className="faq-container">
            <div className="faq-wrapper">
                <div className="faq-left">
                    <h4 className="shared-h4 highlight-2">FAQ Questions</h4>
                    <h2 className="shared-h2">Get Your General Answer</h2>
                    <div className="faqs">
                        {
                            faqs.map(faq => <div key={faq.id} className="faq">
                                <h4>
                                    <span>{faq.question}</span>
                                    <span className="faq-plus-icon highlight-1">+</span>
                                </h4>
                            </div>)
                        }
                    </div>
                </div>

                <div className="faq-right">
                    <img src={pose8} alt="" />
                    <div className="experts">
                        <img src={experts} alt="" />
                        <span>Get Solutions From <br /> Our Experts</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;