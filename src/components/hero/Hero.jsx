import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Scroll from "../../img/scroll.png";
import HeroPic from "../../img/hero.png";
import { tablet } from "../../style/size";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const HeroWrapper = styled.div`
  height: calc(100vh - 100px);
  overflow: hidden;
  background: linear-gradient(180deg, #0c0c1d, #111132);
  position: relative;

  .wrapper {
    max-width: 1366px;
    height: 100%;
    margin: auto;

    .textContainer {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;

      @media (max-width: ${tablet}) {
        height: 50%;
        width: 100%;
        gap: 20px;
        align-items: center;
        text-align: center;
      }

      h2 {
        font-size: 30px;
        color: rebeccapurple;
        letter-spacing: 10px;
      }

      h1 {
        font-size: 88px;

        @media (max-width: ${tablet}) {
          font-size: 36px;
        }
      }

      .buttons {
        button {
          padding: 20px;
          border: 1px solid white;
          border-radius: 10px;
          background-color: transparent;
          color: white;
          margin-right: 20px;
          cursor: pointer;
          font-weight: 300;
        }
      }

      img {
        width: 50px;
      }
    }
  }

  .imageContainer {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: ${tablet}) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      width: 100%; /* Use max-width to limit the width */
      top: unset;
      bottom: 0;
      right: 0; /* Use 0 right for centering */
    }

    img {
      width: 60%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slidingTextContainer {
    position: absolute;
    font-size: 30vh;
    bottom: -10px;
    white-space: nowrap;
    color: #ffffff09;
    width: 50%;
    font-weight: bold;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={Scroll}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src={HeroPic} alt="" />
      </div>
    </HeroWrapper>
  );
};

export default Hero;
