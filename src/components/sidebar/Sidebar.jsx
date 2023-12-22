import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

const SidebarWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;

  .bg {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 400px;
    background: white;

    @include mobile {
      width: 200px;
    }

    .links {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;

      a {
        font-size: 40px;

        @include mobile {
          font-size: 20px;
        }
      }
    }
  }

  button {
    z-index: 999;
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    top: 25px;
    left: 25px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarWrapper animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </SidebarWrapper>
  );
};

export default Sidebar;
