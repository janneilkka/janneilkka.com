import React from "react";
import IconBox from "./iconBox";
import IconText from "./iconText";
import "./styles.scss";
import { Shell32133, Explorer103, CdMusic } from "@react95/icons";

function Shortcuts({ openPortfolio, openCV, openTunes }) {
  return (
    <div>
      <IconBox className="pointer" onClick={() => openPortfolio()}>
        <Explorer103 className="pointer" variant="32x32_4" />
        <IconText className="pointer">Portfolio.txt</IconText>
      </IconBox>
      <IconBox className="pointer" onClick={() => openCV()}>
        <Shell32133 className="pointer" variant="32x32_4" />
        <IconText className="pointer">CV.txt</IconText>
      </IconBox>
      <IconBox className="pointer" onClick={() => openTunes()}>
        <CdMusic className="pointer" variant="32x32_4" />
        <IconText className="pointer">Tunes</IconText>
      </IconBox>
    </div>
  );
}

export default Shortcuts;
