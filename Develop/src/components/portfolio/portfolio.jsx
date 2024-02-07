import "./portfolio.css";

import IMG1 from "../../assets/TF2.png";
import IMG2 from "../../assets/ATMGUI.png";
import IMG3 from "../../assets/Your-Nutrition-Radar.png";
import React from "react";

const Portfolio = () => {
    const soloProjects = [
      {
        id: 1,
        title: "Team Fortress 2 Trading Platform",
        img: IMG1,
        description:
          "A trading platform that allows users to be identified by SteamID, where they can post items they wish to trade or receive from their profiles, which can be accepted by other users!",
        technologies: "TypeScript | MySQL | Javascript | Express",
        link: "https://demo-swap-354ed4292240.herokuapp.com/",
        github: "https://github.com/Evan-Beck/Beck-Demo-Swap",
      },
      {
        id: 2,
        title: "ATM GUI Simulator",
        img: IMG2,
        description:
          "An educational ATM simulator for online banking which allows users to create accounts and use standard banking features such as deposits or transfers, which update in real time!",
        technologies: "Java | MySQL",
        github: "https://github.com/Evan-Beck/Beck-ATM-Sim",
      },
      {
        id: 3,
        title: "Your Nutrition Radar",
        img: IMG3,
        description: "A recipe finder that allows users to pick different diet options and ingredients and be presented with hundreds of recipes based on their choices!",
        technologies: "HTML | CSS | JavaScript | Node JS",
        link: "https://mykhailozakh.github.io/Your-Nutrition-Radar/#",
        github: "https://github.com/MykhailoZakh/Your-Nutrition-Radar",
      },
    ];

    return (
        <section id="portfolio">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
      
          <div className="container portfolio__container">
            {soloProjects.map((pro) => (
              <article className="portfolio__item" key={pro.id}>
                <div className="portfolio__item-image">
                  <img src={pro.img} alt={pro.title} />
                </div>
                <div className="portfolio__item-content">
                  <h3>{pro.title}</h3>
                  <p>{pro.description}</p>
                  <p>{pro.technologies}</p>
                </div>
                <div className="portfolio__item-cta">
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {pro.link && (
                    <a
                      href={pro.link}
                      target="_blank"
                      className="btn btn-primary"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )};
      
      export default Portfolio;

