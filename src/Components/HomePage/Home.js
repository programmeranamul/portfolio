import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import cvIcon from "../../image/cv4.png";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Typed from 'react-typed';

const socialIcons = [
  {
    icon: faFacebookF,
    link: "https://web.facebook.com/profile.php?id=100044216173061",
    className: "facebook",
  },
  { icon: faLinkedinIn, link: "linkdin.com", className: "facebook" },
  { icon: faGithub, link: "github.com", className: "facebook" },
  { cvIcon: cvIcon, link: "cv.com", className: "facebook" },
];

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-between px-5">
        <h5 className="text-white">Anamul Hoque</h5>
        <button className="btn btn-primary mt-2 mb-3">Download CV</button>
      </div>
      <main className="min-height-100 d-flex align-items-center flex-column justify-content-center text-white text-center">
        <h1 className="name">
          Hi, I am <span className="custom-blue-color"><Typed
            strings={["Web Developer", "Life time Learner", "Javascript Lover"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          ></Typed></span>
        </h1>        
        <p className="col-10 my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          suscipit sunt, deleniti ea assumenda culpa, iste dolorem maiores ab
          aperiam doloribus id quis sit eius explicabo saepe magnam molestiae
          rem.
        </p>

        <div className="social-icon-group">
          {socialIcons.map((socialIcon) => (
            <a key={socialIcon.link} href={socialIcon.link} target="_blanck">
              {socialIcon.icon ? (
                <FontAwesomeIcon icon={socialIcon.icon} className="facebook" />
              ) : (
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Download CV</Tooltip>}
                >
                  <img
                    src={socialIcon.cvIcon}
                    alt="Cv Icon"
                    className="cv-icon"
                  />
                </OverlayTrigger>
              )}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
