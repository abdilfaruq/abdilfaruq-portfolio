import React, {createRef} from "react";
import "./FreelanceCard.scss";

export default function FreelanceCard({freelance, isDark}) {
  const imgRef = createRef();

  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div onClick={() => openUrlInNewTab(freelance.url)}>
      <div className={isDark ? "freelance-container dark-mode" : "freelance-container"}>
        <a
          className={
            isDark ? "dark-mode freelance-card freelance-card-shadow" : "freelance-card"
          }
          href="#freelance"
        >
        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="freelance-roundedimg"
          src={freelance.image}
          alt={freelance.imageName}
        />
          <h3 className={isDark ? "small-dark freelance-title" : "freelance-title"}>
            {freelance.title}
          </h3>
          <p className={isDark ? "small-dark freelance-date" : "freelance-date"}>
            {freelance.date}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
          <ul className="freelance-descBullets">
            <GetDescBullets descBullets={freelance.descBullets} isDark={isDark} />
          </ul>
        </a>
      </div>
    </div>
  );
}
