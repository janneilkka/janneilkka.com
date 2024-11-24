import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import Page from "./components/mainPage";
import Desktop from "./components/desktop";

const Home = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Page>
        <Desktop />
      </Page>
    </ThemeProvider>
  );
};
export default Home;
