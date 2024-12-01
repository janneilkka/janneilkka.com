import React from "react";
import { Frame, TitleBar } from "@react95/core";
import { CdMusic } from "@react95/icons";
import * as S from "./layoutStyling";

function Tunes({ closeTunes }) {
  return (
    <S.styledModal
      title={"Tunes"}
      titleBarOptions={<TitleBar.Close onClick={closeTunes} key="close" />}
      icon={<CdMusic variant="16x16_4" />}
    >
      <Frame>
        <iframe
          src="https://open.spotify.com/embed/playlist/42lX7a4yx3rJJcDSimyS9S?utm_source=generator&theme=0"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="The Ultimate Lo-Fi House Playlist on Spotify"
          style={{ height: "400px" }}
        />
      </Frame>
    </S.styledModal>
  );
}

export default Tunes;
