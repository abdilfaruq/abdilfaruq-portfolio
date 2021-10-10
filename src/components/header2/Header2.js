import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header2.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  achievementSection
} from "../../portfolio";

function Header2() {
  const {isDark} = useContext(StyleContext);
  const viewAchievement = achievementSection.display;

  return (
    <Headroom>
      <header2 className={isDark ? "dark-menu header2" : "header2"}>
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
          {viewAchievement && (
            <li>
              <a href="#project">PROJECTS</a>
            </li>
          )}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header2>
    </Headroom>
  );
}

export default Header2;