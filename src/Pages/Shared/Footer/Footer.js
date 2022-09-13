import React from 'react';
import logo from '../../../images/logo.png';
import facebook from '../../../images/footer/facebook.svg';
import instagram from '../../../images/footer/design_instagram.svg';
import google from '../../../images/footer/icons_google.svg';
import twitter from '../../../images/footer/design_twitter.svg';
import youtube from '../../../images/footer/icons_youtube.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                {/* footer left */}
                <div className="footer-left">
                    <img className="footer-logo" src={logo} alt="" />
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                    <ul>
                        <li><a href="#"><img src={facebook} alt="" /></a></li>
                        <li><a href="#"><img src={instagram} alt="" /></a></li>
                        <li><a href="#"><img src={google} alt="" /></a></li>
                        <li><a href="#"><img src={twitter} alt="" /></a></li>
                        <li><a href="#"><img src={youtube} alt="" /></a></li>
                    </ul>
                </div>

                {/* footer quick links */}
                <div className="footer-quick-links">
                    <h4 className="shared-h4 highlight-2">Quick Links</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Pricing</a></li>
                        <li><a href="#">Our Gallery</a></li>
                        <li><a href="#">Appointment</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* footer links */}
                <div className="footer-links">
                <h4 className="shared-h4 highlight-2">Links</h4>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Our Doctors</a></li>
                        <li><a href="#">Our Latest News</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* footer right */}
                <div className="footer-right">
                    <h4 className="shared-h4 highlight-2">Opening Hours</h4>
                    <ul>
                        <li><span className="opening-day highlight-1">Mon-Tue</span> <span>08:00 AM - 05:00 PM</span></li>
                        <li><span className="opening-day highlight-1">Wed-Tue</span> <span>08:00 AM - 05:00 PM</span></li>
                        <li><span className="opening-day highlight-1">Fri-Tue</span> <span>08:00 AM - 05:00 PM</span></li>
                        <li><span className="opening-day highlight-1">Sunday</span> <span>Emergency Only</span></li>
                        <li><span className="opening-day highlight-1">Personal</span> <span>Mon - 05:00 PM</span></li>
                    </ul>
                </div>
            </div>
            <p className="copy-right"><small>Copyright @222 Medicom All Rights Reserved</small></p>
        </footer>
    );
};

export default Footer;