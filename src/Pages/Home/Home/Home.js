import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Experiences from '../Experiences/Experiences';
import FAQ from '../FAQ/FAQ';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            <Services />
            <Experiences />
            <Features />
            <FAQ />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;