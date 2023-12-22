import styled from "styled-components";
import { motion } from "framer-motion";

import Facebook from "../../img/facebook.png";
import Instagram from "../../img/instagram.png";
import Youtube from "../../img/youtube.png";
import Dribbble from "../../img/dribbble.png";
import { mobile } from "../../style/size";
import Sidebar from "../sidebar/Sidebar";

const NavbarWrapper = styled.div`
  height: 100px;

  .wrapper {
    max-width: 1366px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0px 20px;

    @media (max-width: ${mobile}) {
      justify-content: center;
      padding: 50px;
    }
    span {
      font-weight: bold;

      @media (max-width: ${mobile}) {
        display: none;
      }
    }

    .social {
      display: flex;
      gap: 20px;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lama Dev
        </motion.span>
        <div className="social">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Youtube} alt="" />
          <img src={Dribbble} alt="" />
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
