import React from "react";
import styled from "styled-components";
import { Modal, Frame, List } from "@react95/core";
import { Awfxcg321303, CdMusic } from "@react95/icons";
import * as S from "./layoutStyling";

function Tunes({ closeTunes, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Tunes"}
      closeModal={closeTunes}
      height="100%"
      icon={<CdMusic variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeTunes}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <Frame
        style={{
          height: "300px",
        }}
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/42lX7a4yx3rJJcDSimyS9S"
          width="100%"
          height="100%"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="The Ultimate Lo-Fi House Playlist on Spotify"
        ></iframe>
      </Frame>
    </S.layoutMain>
  );
}

export default Tunes;
