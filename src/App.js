import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import Page from "./components/mainPage";
import Desktop from "./components/desktop";
import desktopIcons from "./components/desktopIcons";
import "./components/styles.css";

const Home = () => {
  return (
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
      <Page>
        <Desktop></Desktop>
        {desktopIcons}
      </Page>
    </ThemeProvider>
  );
};
export default Home;
