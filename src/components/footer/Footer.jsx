import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <h3 className="menuItem">About me</h3>
        <div className="infoText">
        Hi, I'm Nikhil, a skilled UI developer with expertise in ReactJS, JavaScript, HTML, CSS, Sass, Redux, and Redux Toolkit. With 1.9 years of experience, I specialize in creating captivating and user-friendly interfaces that elevate web experiences. Meticulous and collaborative, I stay up-to-date with the latest trends, ensuring I deliver innovative solutions with precision and style.
        </div>
        <div className="socialIcons">
          <a
            href="https://github.com/Nikhil1254"
            target="_blank"
            className="icon"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://leetcode.com/np0129999/"
            target="_blank"
            className="icon"
            title="Leetcode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-patil-759377180/"
            target="_blank"
            className="icon"
            title="Linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
