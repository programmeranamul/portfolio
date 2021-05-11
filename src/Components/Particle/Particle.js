import React from "react";
import Particles from "react-particles-js";
import react from "../../image/logo512.png";
import nodejs from "../../image/node-js.png";
import mongodb from "../../image/mongo.png";
import css from "../../image/css.png"
import html from '../../image/html.png'

const Particle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: "out",
          },
          shape: {
            type: ["image"],
            image: [
              {
                src: react,
                height: 20,
                width: 23,
              },
              {
                src: mongodb,
                height: 20,
                width: 20,
              },
              {
                src: nodejs,
                height: 20,
                width: 20,
              },
              {
                src: css,
                height: 20,
                width: 20,
              },
              {
                src: html,
                height: 20,
                width: 20,
              },
              
              
            ],
          },
          color: {
            value: "#CCC",
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
};

export default Particle;
