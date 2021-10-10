import React from "react";
import Header2 from "../components/header2/Header2";
import Achievement2 from "./achievement/Achievement2";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

const Projects = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header2 />
        <Achievement2 />
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
};

export default Projects;