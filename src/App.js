import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import Page from "./components/mainPage";
import Desktop from "./components/desktop";
import DesktopIcons from "./components/desktopIcons";

const Home = () => {
  return (
    <ThemeProvider>
      <GlobalStyle>
        <body style={{ backgroundColor: "red" }}></body>
      </GlobalStyle>
      <Page>
        <Desktop></Desktop>
        {DesktopIcons}
      </Page>
    </ThemeProvider>
  );
};
export default Home;
