import React, { useState, useEffect } from "react";
import { useClippy } from "@react95/clippy";

const talks = [
  "Hello! Nice to see you here today! Hope you have a great day.",
  "Wuff wuff! Or Hau hau as we say in Finnish!",
  "Check out more information from the Start-menu.",
];

const Clippy = () => {
  const { clippy } = useClippy();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    if (clippy) {
      setAgent(clippy);
      clippy.show();
    }
  }, [clippy]);

  useEffect(() => {
    if (agent) {
      const interval = setInterval(() => {
        const randomTalk = talks[Math.floor(Math.random() * talks.length)];
        agent.speak(randomTalk);
        agent.animate();
      }, 100000);

      return () => clearInterval(interval);
    }
  }, [agent]);

  return <div style={{ cursor: "pointer" }}></div>;
};

export default Clippy;