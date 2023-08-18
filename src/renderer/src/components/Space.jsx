import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function Space() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                name: "NASA",
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 1,
                        },
                        animation: {
                            enable: true,
                            speed: 1,
                            sync: false,
                        },
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 3,
                        },
                    },
                    move: {
                        enable: true,
                        speed: {
                            min: 0.1,
                            max: 1,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 250,
                            size: 0,
                            duration: 2,
                            opacity: 0,
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4,
                        },
                        push: {
                            quantity: 4,
                        },
                        remove: {
                            quantity: 2,
                        },
                    },
                },
                background: {
                    zIndex: "1",
                    color: "#000000",
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "20%",
                },
            }}
        />
    );
};