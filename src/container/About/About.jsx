/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type== "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div className="app__about">
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 0.4, delay: 0.1, type: "tween" }}
        className="head-text"
      >
        I believe <span className="head-text">Good Designer</span>
        <br />
        designs<span className="head-text"> Good Company</span>
      </motion.div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1], y: [60, 0] }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.4, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
