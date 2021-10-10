import React, {useContext} from "react";
import "./about.scss";
import AboutCard from "../../components/aboutCard/AboutCard";
import {aboutSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function About() {
  const {isDark} = useContext(StyleContext);
  if (!aboutSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="about">
      <div className="about-header">
          <h1 className="about-header-title">{aboutSection.title}</h1>
      {aboutSection.about.map((about, i) => {
            return (
              <AboutCard
                key={i}
                aboutDetails={{ title: about.title, isDark }}
              />
            );
          })}
          <p
            className={
              isDark
                ? "dark-mode about-header-subtitle"
                : "subTitle about-header-subtitle"
            }
          > {aboutSection.subtitle}
          <p>{aboutSection.subtitle2}</p>
            {aboutSection.subtitle3}
          </p>
        </div>
      </div>
    </Fade>
  );
}