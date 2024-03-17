/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Projects.png";

const imageAltText = "Projects header image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Plant Disease Detection using CNN, SVM & KNN🎉",
    description: "Group Project to develop a model that can help detect diseases in leaves.",
    url: "https://github.com/NimraBasit7/Plant-Disease-Detection",
  },
  {
    title: "Text Summarizer using NLP",
    description:
      "Contributed in creating a Streamlit Web app for Text Summarization using NTLK & spaCy.",
    url: "https://github.com/NimraBasit7/Text_Summarizer",
  },
  {
    title: "Pelicula",
    description:
      "A software that allows user to search TV shows and movies details based on name, year, genre, and synopsis.",
    url: "https://github.com/NimraBasit7/Pelicula",
  },
  {
    title: "Breakout Game",
    description:
      "Breakout is a classic arcade game from the 1970s, still cherished today. Players control a horizontal paddle, aiming to break a wall of colorful bricks above. They use a bouncing ball to hit the bricks and earn points. The game tests hand-eye coordination and reflexes, with increasing difficulty as players progress.",
    url: "https://github.com/NimraBasit7/Breakout_Game",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "0.5s ease-in-out slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
