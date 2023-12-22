import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import Stars from "../../img/stars.png";
import Mountains from "../../img/mountains.png";
import Planets from "../../img/planets.png";
import Sun from "../../img/sun.png";

const ParallaxWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h1 {
    font-size: 100px;

    @include mobile {
      font-size: 72px;
      text-align: center;
    }
  }

  .mountains {
    background-image: url(${Mountains});
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;

    @include mobile {
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .planets {
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    @include mobile {
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .stars {
    background-image: url(${Stars});
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
`;

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <ParallaxWrapper
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? Planets : Sun})`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </ParallaxWrapper>
  );
};

export default Parallax;
