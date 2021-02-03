import React from 'react';
import Particles from 'react-particles-js';

const Parcelcomponent = () => {
  return (
    <Particles
      params={{
        "particles": {
          "number": {
            "value": 160,
            "density": {
              "enable": false
            }
          },
          "size": {
            "value": 10,
            "random": true
          },
          "move": {
            "direction": "bottom",
            "out_mode": "out"
          },
          "line_linked": {
            "enable": false
          }
        },
        "interactivity": {
          "events": {
            "onclick": {
              "enable": true,
              "mode": "remove"
            }
          },
          "modes": {
            "remove": {
              "particles_nb": 10
            }
          }
        }
      }} />
  );
};

export default Parcelcomponent;