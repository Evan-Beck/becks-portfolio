import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
    return (
      <section id="experience">
        <h5>The Skills I Have</h5>
        <h2>Skills</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Full-Stack Development</h3>
            <div className="experience__content">
            <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>HTML</h4>
              </article>
              <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React , MERN Stack</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Express</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Typescript</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience