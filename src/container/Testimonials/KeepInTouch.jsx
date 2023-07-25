// KeepInTouch.js
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const KeepInTouch = () => {
  return (
    <div className="keep-in-touch">
      {/* <h2>Keep in Touch</h2> */}
      <div className="social-icons">
      <a href="https://github.com/Shaina-08">

        <AiFillGithub />
        </a>

        <a href="https://twitter.com/@Shaina48222434">

        <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/shaina-bhardwaj-84a66a202">

        <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default KeepInTouch;
