import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "./Logo";
import resume from "../data/resume.pdf";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <a href="#home">
            <Logo />
          </a>
        </div>

        <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* <a
          href={resume}
          className="app__navbar-download"
          download="Pradeep Khanal_resume"
        >
          Download CV
        </a> */}

        <div className="app__navbar-menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "work", "skills", "contact"].map((item) => (
                  <li key={item} className="app__flex p-text">
                    <a
                      href={`#${item}`}
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
