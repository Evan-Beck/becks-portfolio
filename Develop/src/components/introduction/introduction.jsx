import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/me.jpg';


const Intro = () => {
    return (
        <section id="about">
        <h5>Get to know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
        <img src={img} alt="Evan Beck" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            1 year of experience in front-end development, with hands on experience
            and in full-stack web development. Proficient in leveraging back-end languages
            and APIs to create robust, scalable applications. Skilled in the MERN stack,
            with a particular strength in React and developing responsive web applications 
            with the MERN stack. 
          </p>
          <a href="#contact" className="btn btn-primary">
            Connect With Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;