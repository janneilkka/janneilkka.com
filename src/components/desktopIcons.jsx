import React from "react";
import { Cursor } from "@react95/core";
import "./styles.scss";
import { Shell32133, Explorer103, CdMusic, Mspaint } from "@react95/icons";

function Shortcuts({ openPortfolio, openCV, openTunes, openPaint }) {
  return (
    <div style={{ width: 100, marginLeft: 10, marginTop: 10 }}>
      <div className={Cursor.Pointer} onClick={() => openPortfolio()}>
        <Explorer103
          variant="32x32_4"
          style={{ marginLeft: 32, marginTop: 15 }}
        />
        <p
          style={{
            fontFamily: "MS Sans Serif",
            fontSize: 13,
            justifyContent: "center",
            marginTop: 5,
            width: 100,
            textAlign: "center",
            color: "black",
          }}
        >
          Portfolio
        </p>
      </div>
      <div className={Cursor.Pointer} onClick={() => openCV()}>
        <Shell32133
          variant="32x32_4"
          style={{ marginLeft: 32, marginTop: 15 }}
        />
        <p
          style={{
            fontFamily: "MS Sans Serif",
            fontSize: 13,
            justifyContent: "center",
            marginTop: 5,
            width: 100,
            textAlign: "center",
            color: "black",
          }}
        >
          CV
        </p>
      </div>
      <div className={Cursor.Pointer} onClick={() => openTunes()}>
        <CdMusic variant="32x32_4" style={{ marginLeft: 32, marginTop: 15 }} />
        <p
          style={{
            fontFamily: "MS Sans Serif",
            fontSize: 13,
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
      <div className={Cursor.Pointer} onClick={() => openPaint()}>
        <Mspaint variant="32x32_4" style={{ marginLeft: 32, marginTop: 15 }} />
        <p
          style={{
            fontFamily: "MS Sans Serif",
            fontSize: 13,
            justifyContent: "center",
            marginTop: 5,
            width: 100,
            textAlign: "center",
            color: "black",
          }}
        >
          Paint
        </p>
      </div>
    </div>
  );
}

export default Shortcuts;
