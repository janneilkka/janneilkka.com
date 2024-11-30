import React, { useState, useEffect } from "react";
import { useClippy } from "@react95/clippy";
import { Button } from "@react95/core";

const talks = [
  "Hello! How can I assist you today?",
  "Did you know you can customize me?",
  "I'm here to help you with anything you need!",
];

const Clippy = () => {
  const { clippy } = useClippy();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    if (clippy) {
      console.log("Clippy loaded:", clippy);
      setAgent(clippy);
      clippy.show();
    }
  }, [clippy]);

  const handleClippyClick = () => {
    if (agent) {
      console.log("Clippy clicked:", agent);
      const randomTalk = talks[Math.floor(Math.random() * talks.length)];
      agent.speak(randomTalk);
      agent.animate();
    } else {
      console.log("Agent not available");
    }
  };

  return <div onClick={handleClippyClick} style={{ cursor: "pointer" }} />;
};

export default Clippy;
