import React from 'react';
import {
    faFacebookF,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Map.css'


const socialIcons = [
    { icon: faFacebookF, link: "https://web.facebook.com/profile.php?id=100044216173061", className: 'facebook' },
    { icon: faLinkedinIn, link: "facebook.com", className: 'facebook' },
    { icon: faTwitter, link: "facebook.com", className: 'facebook' }
]

const Map = () => {
    return (
        <div className="map-area w-100">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29449.19811511862!2d90.62635010342366!3d22.685468093293654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754d44be3791f4b%3A0xdf8a000125a851b9!2sBhola!5e0!3m2!1sen!2sbd!4v1617868614011!5m2!1sen!2sbd"
                className="w-100 border-0 rounded"
                loading="lazy"
            ></iframe>
            <div className="social-icon-group">
                {
                    socialIcons.map(socialIcon => <a href={socialIcon.link} target="_blanck"><FontAwesomeIcon icon={socialIcon.icon} className="facebook" /></a>)
                }
            </div>
        </div>
    );
};

export default Map;