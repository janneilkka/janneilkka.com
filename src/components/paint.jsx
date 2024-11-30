import React from "react";
import { TitleBar } from "@react95/core";
import { Mspaint } from "@react95/icons";
import * as S from "./layoutStyling";

function Paint({ closePaint }) {
  return (
    <S.styledModal
      icon={<Mspaint variant="16x16_4" />}
      title={"Paint"}
      titleBarOptions={[<TitleBar.Close onClick={closePaint} key="close" />]}
      width={"800px"}
      height={"800px"}
    >
      <S.styledModalFrame style={{ padding: 0 }}>
        <iframe src="https://jspaint.app" width="100%" height="100%"></iframe>
      </S.styledModalFrame>
    </S.styledModal>
  );
}

export default Paint;
