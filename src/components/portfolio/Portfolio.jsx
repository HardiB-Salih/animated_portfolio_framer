import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import { mobile } from "../../style/size";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const PortfolioWrapper = styled.div`
  position: relative;

  .progress {
    position: sticky;
    top: 0;
    left: 0;
    padding-top: 50px;
    text-align: center;
    color: orange;
    font-size: 36px;

    @media (max-width: ${mobile}) {
      padding-top: calc(100vh - 100px);
      font-size: 24px;
    }

    .progressBar {
      height: 10px;
      background-color: white;
    }
  }
`;
const Containerdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .wrapper {
    max-width: 1366px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: ${mobile}) {
      flex-direction: column;
    }

    .imageContainer {
      flex: 1;
      height: 50%;

      @media (max-width: ${mobile}) {
        width: 100%;
        max-height: 300px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media (max-width: ${mobile}) {
          object-fit: contain;
        }
      }
    }

    .textContainer {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 30px;

      @media (max-width: ${mobile}) {
        transform: none !important;
        padding: 10px;
        align-items: center;
        text-align: center;
      }

      h2 {
        font-size: 72px;

        @include mobile {
          font-size: 36px;
        }
      }

      p {
        color: gray;
        font-size: 20px;

        @media (max-width: ${mobile}) {
          font-size: 16px;
        }
      }

      button {
        background-color: orange;
        border: none;
        border-radius: 10px;
        padding: 10px;
        width: 200px;
        cursor: pointer;
      }
    }
  }
`;

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <Containerdiv>
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </Containerdiv>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <PortfolioWrapper ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </PortfolioWrapper>
  );
};

export default Portfolio;
