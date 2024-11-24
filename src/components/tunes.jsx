import React from "react";
import { Frame } from "@react95/core";
import { CdMusic } from "@react95/icons";
import * as S from "./layoutStyling";

function Tunes({ closeTunes, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Tunes"}
      closeModal={closeTunes}
      height="100%"
      icon={<CdMusic variant="32x32_4" />}
    >
      <Frame
        boxShadow="none"
        style={{
          height: "352px",
        }}
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/42lX7a4yx3rJJcDSimyS9S?utm_source=generator&theme=0"
          width="100%"
          height="352px"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="The Ultimate Lo-Fi House Playlist on Spotify"
        />
      </Frame>
    </S.layoutMain>
  );
}

export default Tunes;
