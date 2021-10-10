import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  aboutSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAbout = aboutSection.display;
  const viewAchievement = achievementSection.display;
  
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="lname">
            <img
                crossOrigin={"anonymous"}
                className="greeting-roundedimg"
                src={greeting.logo}
                alt={greeting.logoName}
              />
            </span>
            <span className="logo-name">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">SKILLS</a>
            </li>
          )}
          {viewAbout && (
            <li>
              <a href="#about">ABOUT</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">EXPERIENCES</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#project">PROJECTS</a>
            </li>
          )}
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;