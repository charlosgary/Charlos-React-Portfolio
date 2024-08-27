import React from "react";
import "./aboutMe.css";
import headshot from "../../images/headshot.jpg";

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={headshot} alt="cg icon" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          I have 30 years of experience as graphic designer, art director and
          illustrator, with almost 12 years in the financial services industry
          and over 10 years working in the newspaper industry. I specialize in
          transforming abstract data into visualizations that are both easy to
          understand and aesthetically appealing. I have expert-level knowledge
          of design applications including Illustrator, Photoshop, InDesign,
          Adobe XD, Powerpoint and Adobe After Effects. I am also proficient in
          html, CSS, Javascript. I am currently learning ReactJS . My experience
          includes creating infographics, graphics for the internet, 3D product
          design, business charts, motion graphics, comic strips, illustrations,
          motion graphics and 2D animation.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
