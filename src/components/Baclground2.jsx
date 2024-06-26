"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useTheme } from "next-themes";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Background2 = (props) => {
  const { resolvedTheme } = useTheme();
  const [bgcolor, setBgcolor] = useState("");
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      setBgcolor(() => resolvedTheme);
      console.log(resolvedTheme);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadAll(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, [resolvedTheme]);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: bgcolor === "light" ? "#fafafa" : "000000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: { enable: false, force: 60, smooth: 10 },
          },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#3cbff0" },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.05,
            sync: true,
            startValue: "max",
            count: 1,
            destroy: "min",
          },
          value: {
            min: 0,
            max: 0.8,
          },
        },
        shape: {
          type: "circle",
        },

        size: {
          value: { min: 1, max: 5 },
        },
      },
    }),
    [bgcolor]
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default Background2;
