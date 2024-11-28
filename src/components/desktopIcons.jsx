import React from "react";
import { Cursor } from "@react95/core";
import "./styles.scss";
import { Shell32133, Explorer103, CdMusic } from "@react95/icons";

function Shortcuts({ openPortfolio, openCV, openTunes }) {
  return (
    <div style={{ width: 100, marginLeft: 10, marginTop: 10 }}>
      <div className={Cursor.Pointer} onClick={() => openPortfolio()}>
        <Explorer103
          variant="32x32_4"
          style={{ marginLeft: 35, marginTop: 15 }}
        />
        <p
          style={{
            fontFamily: "MS Sans Serif",
            justifyContent: "center",
            marginTop: 5,
            width: 100,
            textAlign: "center",
            color: "black",
          }}
        >
          Portfolio.txt
        </p>
      </div>
      <div className={Cursor.Pointer} onClick={() => openCV()}>
        <Shell32133
          variant="32x32_4"
          style={{ marginLeft: 35, marginTop: 15 }}
        />
        <p
          style={{
            fontFamily: "MS Sans Serif",
            justifyContent: "center",
            marginTop: 5,
            width: 100,
            textAlign: "center",
            color: "black",
          }}
        >
          CV.txt
        </p>
      </div>
      <div className={Cursor.Pointer} onClick={() => openTunes()}>
        <CdMusic variant="32x32_4" style={{ marginLeft: 35, marginTop: 15 }} />
        <p
          style={{
            fontFamily: "MS Sans Serif",
            justifyContent: "center",
            marginTop: 5,
            width: 100,
            textAlign: "center",
            color: "black",
          }}
        >
          Tunes
        </p>
      </div>
    </div>
  );
}

export default Shortcuts;
