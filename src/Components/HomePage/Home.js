import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
    { icon: faFacebookF, link: "https://web.facebook.com/profile.php?id=100044216173061", className: 'facebook' },
    { icon: faLinkedinIn, link: "facebook.com", className: 'facebook' },
    { icon: faTwitter, link: "facebook.com", className: 'facebook' }
]

const Home = () => {
    return (
        <main className="min-height-100 d-flex align-items-center flex-column justify-content-center text-white text-center">
            <h1 className="name">Hi, I am <span className="custom-blue-color">Anamul Hoque</span></h1>
            <p className="col-10 my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi suscipit sunt, deleniti ea assumenda culpa, iste dolorem maiores ab aperiam doloribus id quis sit eius explicabo saepe magnam molestiae rem.</p>
            <div className="social-icon-group">
                {
                    socialIcons.map(socialIcon => <a href={socialIcon.link} target="_blanck"><FontAwesomeIcon icon={socialIcon.icon} className="facebook" /></a>)
                }
            </div>
        </main>
    );
};

export default Home;