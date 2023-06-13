import React from "react";
import { Grid } from "@mui/material";
import TextAnimation from "react-text-animations";
import emoji from "react-easy-emoji";

import HeroImg from "../../assets/images/heroImage.png";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../utils/portfolio";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <Grid container>
        <Grid xs={12} md={6}>
          <div className="greeting-text-div">
            <div>
              <h3 className={"greeting-text"}>
                <span className="colorText">{"<b>"}</span>
                <TextAnimation.Slide
                  target="Hello"
                  text={["Hello", "Halo", "Holla"]}
                >
                  {"Hello"}
                </TextAnimation.Slide>
                <span className="colorText">{"</b>"}</span>
                <span className="wave-emoji">{emoji("👋")}</span> <br />
                <span className="colorText">{greeting.title} </span>
              </h3>
              <p className={"greeting-text-p subTitle"}>{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text="Contact me"
                  href={"mailto:shraddhagoelwork@gmail.com"}
                  className="contact-button-center"
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={12} md={6}>
          <img className="hero-img" src={HeroImg} />
          {/* <SocialMedia /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
