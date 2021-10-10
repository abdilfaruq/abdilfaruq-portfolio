import React from "react";
import "./AboutCard.scss";

export default function AboutCard({aboutDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            aboutDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
        </div>
      </div>
    </div>
  );
}