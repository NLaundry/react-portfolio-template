import React from 'react'
import Particles from 'react-particles-js';

const ParticleBG = () => {
    return (
        <Particles className="Particles"
            params={{
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 2500
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "opacity": 0.02
                    },
                    "move": {
                        "direction": "right",
                        "speed": 0.05
                    },
                    "size": {
                        "value": 2
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.05
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }} />
    );
}

export default ParticleBG
