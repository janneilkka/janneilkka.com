import React, { useState, useEffect } from "react";
import Desktop from "./components/desktop";
import { Button } from "@react95/core";
import "@react95/core/GlobalStyle";
import "@react95/core/themes/storm.css";
import { ClippyProvider } from "@react95/clippy";
import Clippy from "./components/clippy";

const App = () => {
  return (
    <ClippyProvider agentName="Rover">
      <Clippy />
      <Desktop />
    </ClippyProvider>
  );
};

export default App;
