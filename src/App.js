import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import Page from "./components/mainPage";
import Desktop from "./components/desktop";
import DesktopIcons from "./components/desktopIcons";

const Home = () => {
  return (
    <body class="background">
      <ThemeProvider>
        <GlobalStyle />
        <Page>
          <Desktop></Desktop>
          {DesktopIcons}
        </Page>
      </ThemeProvider>
    </body>
  );
};
export default Home;
