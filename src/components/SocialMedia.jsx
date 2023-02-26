import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/pradeep-khanal-9751ab145/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/pradeepkhanal23"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/pradeep.khanal.54"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
