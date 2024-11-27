import React from "react";
import Page from "./components/mainPage";
import Desktop from "./components/desktop";
import "@react95/core/GlobalStyle";
import "@react95/core/themes/win95.css";

const App = () => {
  return (
    <Page>
      <Desktop />
    </Page>
  );
};

export default App;
