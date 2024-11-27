import React from "react";

import "./styles.scss";
import { Shell32133, Explorer103, CdMusic } from "@react95/icons";

function Shortcuts({ openPortfolio, openCV, openTunes }) {
  return (
    <div style={{ width: 100, marginLeft: 10, marginTop: 10 }}>
      <div className="pointer" onClick={() => openPortfolio()}>
        <Explorer103
          className="pointer"
          variant="32x32_4"
          style={{ marginLeft: 35, marginTop: 15 }}
        />
        <p
          className="pointer"
          style={{
            fontFamily: "MS Sans Serif",
            justifyContent: "center",
            width: 100,
            textAlign: "center",
            color: "black",
          }}
        >
          Portfolio.txt
        </p>
      </div>
      <div className="pointer" onClick={() => openCV()}>
        <Shell32133
          className="pointer"
          variant="32x32_4"
          style={{ marginLeft: 35, marginTop: 15 }}
        />
        <p
          className="pointer"
          style={{
            fontFamily: "MS Sans Serif",
            justifyContent: "center",
            width: 100,
            textAlign: "center",
            color: "black",
          }}
        >
          CV.txt
        </p>
      </div>
      <div className="pointer" onClick={() => openTunes()}>
        <CdMusic
          className="pointer"
          variant="32x32_4"
          style={{ marginLeft: 35, marginTop: 15 }}
        />
        <p
          style={{
            fontFamily: "MS Sans Serif",
            justifyContent: "center",
            width: 100,
            textAlign: "center",
            color: "black",
          }}
          className="pointer"
        >
          Tunes
        </p>
      </div>
    </div>
  );
}

export default Shortcuts;
