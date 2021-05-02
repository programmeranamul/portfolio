import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import cvIcon from "../../image/cv4.png";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Typed from "react-typed";
import Particle from "../Particle/Particle";

const socialIcons = [
  {
    icon: faFacebookF,
    link: "https://web.facebook.com/profile.php?id=100044216173061",
    className: "facebook",
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/anamul-hoque-b90327204/",
    className: "facebook",
  },
  {
    icon: faGithub,
    link: "https://github.com/programmeranamul",
    className: "facebook",
  },
  {
    cvIcon: cvIcon,
    link:
      "https://drive.google.com/uc?export=download&id=1PhF-IyNOHMdZKFx94dttD1zhIMNLnhNd",
    className: "facebook",
  },
];

const randomcolor = ["red", "green", "white", "blue"];
const randomClassName = ["text-danger", "text-white", "text-primary"];

console.log(Math.floor(Math.random() * randomcolor.length))
const Home = () => {
  const handelDownload = () => {
    const a = document.createElement("a");
    a.href =
      "https://drive.google.com/uc?export=download&id=1PhF-IyNOHMdZKFx94dttD1zhIMNLnhNd";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="min-height-100">
      <Particle />
      <div className="home-content">
        <main className="min-height-100 d-flex align-items-center flex-column justify-content-center text-white text-center">
          <h1 className="name">
            Hi, I am <span className="custom-blue-color">Anamul Hoque</span>
          </h1>
          <h5
            className={`${
              randomClassName[1]
            }`}
          >
            <Typed
              strings={[
                "Web Designer",
                "JavaScript Developer",
                "Web Developer",                
                "MERN Stack Developer",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            ></Typed>
          </h5>
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
                  <FontAwesomeIcon
                    icon={socialIcon.icon}
                    className="facebook"
                  />
                ) : (
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">Download CV</Tooltip>
                    }
                  >
                    <img
                      src={socialIcon.cvIcon}
                      alt="Cv Icon"
                      className="cv-icon"
                      onClick={handelDownload}
                    />
                  </OverlayTrigger>
                )}
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
