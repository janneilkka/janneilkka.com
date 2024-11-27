import React from "react";

import IconText from "./iconText";
import "./styles.scss";
import { Shell32133, Explorer103, CdMusic } from "@react95/icons";

function Shortcuts({ openPortfolio, openCV, openTunes }) {
  return (
    <div>
      <div className="pointer" onClick={() => openPortfolio()}>
        <Explorer103
          className="pointer"
          variant="32x32_4"
          style={{ marginLeft: 30, marginTop: 10 }}
        />
        <IconText className="pointer">Portfolio.txt</IconText>
      </div>
      <div className="pointer" onClick={() => openCV()}>
        <Shell32133
          className="pointer"
          variant="32x32_4"
          style={{ marginLeft: 30, marginTop: 10 }}
        />
        <IconText className="pointer">CV.txt</IconText>
      </div>
      <div className="pointer" onClick={() => openTunes()}>
        <CdMusic
          className="pointer"
          variant="32x32_4"
          style={{ marginLeft: 30, marginTop: 10 }}
        />
        <IconText className="pointer">Tunes</IconText>
      </div>
    </div>
  );
}

export default Shortcuts;
