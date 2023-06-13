import React from 'react';

import './About.scss';
import  { aboutSection, greeting } from '../../utils/portfolio';
import Button from '../../components/button/Button';

const About = () => {
    return (
      <div id="about" className="about-section ">
        <div className="title colorText">About Me</div>
        <div className="desc">{aboutSection.desc}</div>
        <Button
          text="Download CV"
          href={greeting.resumeLink}
          className="contact-button-center"
        />
        <br />
        <br />
      </div>
    );
}

export default About;