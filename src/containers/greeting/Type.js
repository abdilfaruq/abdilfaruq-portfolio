import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <p>
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Frontend Developer",
          "Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </p>
  );
}

export default Type;