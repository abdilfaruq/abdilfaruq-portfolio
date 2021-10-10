import React, {useContext} from "react";
import "./freelance.scss";
import FreelanceCard from "../../components/freelanceCard/FreelanceCard";
import {freelanceSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Freelance() {
  const {isDark} = useContext(StyleContext);
  if (!freelanceSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="freelance">
        <div className="freelance-header">
          <h1 className="freelance-header-text">{freelanceSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode freelance-subtitle" : "subTitle freelance-subtitle"
            }
          >
            {freelanceSection.subtitle}
          </p>
        </div>
        <div className="freelance-main-div">
          <div className="freelance-text-div">
            {freelanceSection.freelance.map((freelance, i) => {
              return (
                <FreelanceCard
                  key={i}
                  isDark={isDark}
                  freelance={{
                    image: freelance.image,
                    title: freelance.title,
                    date: freelance.date,
                    description: freelance.description,
                    descBullets: freelance.descBullets
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}