import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../../style/size";
import { motion } from "framer-motion";

const CursorWrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid white;
  position: fixed;
  z-index: 999;

  @media (max-width: ${mobile}) {
    display: none;
  }
`;

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <CursorWrapper
      animate={{ x: position.x + 8, y: position.y + 12 }}
    ></CursorWrapper>
  );
};

export default Cursor;
