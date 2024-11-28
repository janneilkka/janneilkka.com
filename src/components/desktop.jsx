import React from "react";
import {
  List,
  Frame,
  ProgressBar,
  TaskBar,
  TitleBar,
  Modal,
} from "@react95/core";
import Janne_pixelated from "../assets/janne_pixelated.png";
import Shortcuts from "./desktopIcons";
import * as S from "./layoutStyling";
import "./styles.scss";
import {
  Mspaint,
  User,
  CdMusic,
  Progman34,
  Textchat,
  Explorer103,
  Awfxcg321303,
} from "@react95/icons";
import Portfolio from "./portfolio";
import CV from "./cv";
import Tunes from "./tunes";
import About from "./about";
import Skills from "./skills";
import useModal from "./useModal";

function Desktop() {
  const [showAboutModal, handleOpenAboutModal, handleCloseAboutModal] =
    useModal(true);
  const [showSkillsModal, handleOpenSkillsModal, handleCloseSkillsModal] =
    useModal(false);
  const [showPhotoModal, handleOpenPhotoModal, handleClosePhotoModal] =
    useModal(false);
  const [
    showVaporwaveModal,
    handleOpenVaporwaveModal,
    handleCloseVaporwaveModal,
  ] = useModal(false);
  const [
    showPortfolioModal,
    handleOpenPortfolioModal,
    handleClosePortfolioModal,
  ] = useModal(false);
  const [showCVModal, handleOpenCVModal, handleCloseCVModal] = useModal(false);
  const [showTunesModal, handleOpenTunesModal, handleCloseTunesModal] =
    useModal(false);

  const socialMedia = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/janneilkka/",
    },
    {
      id: 2,
      name: "Github",
      url: "https://www.github.com/janneilkka/",
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://instagram.com/janne.ilkka",
    },
    {
      id: 4,
      name: "Spotify",
      url: "https://open.spotify.com/user/rogergregor",
    },
  ];

  return (
    <>
      <TaskBar
        list={
          <List>
            <List.Item
              icon={<Progman34 variant="32x32_4" />}
              className="listLink"
            >
              Socials
              <List>
                {socialMedia.map(({ id, name, url }) => (
                  <List.Item
                    as="a"
                    href={url}
                    key={id}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="listLink"
                  >
                    {name}
                  </List.Item>
                ))}
              </List>
            </List.Item>
            <List.Item
              icon={<CdMusic variant="32x32_4" />}
              className="listLink"
            >
              Tunes
              <List>
                <List.Item
                  onClick={handleOpenVaporwaveModal}
                  icon={<CdMusic variant="16x16_4" />}
                  className="listLink"
                >
                  Janne's Vaporwave Story from 2018
                </List.Item>
                <List.Item
                  onClick={handleOpenTunesModal}
                  icon={<CdMusic variant="16x16_4" />}
                  className="listLink"
                >
                  Janne's Ultimate House Playlist on Spotify
                </List.Item>
              </List>
            </List.Item>
            <List.Item
              icon={<Awfxcg321303 variant="32x32_4" />}
              onClick={handleOpenCVModal}
              className="listLink"
            >
              CV{" "}
            </List.Item>
            <List.Item
              icon={<Explorer103 variant="32x32_4" />}
              onClick={handleOpenPortfolioModal}
              className="listLink"
            >
              Portfolio{" "}
            </List.Item>
            <List.Item
              icon={<User variant="32x32_4" />}
              onClick={handleOpenPhotoModal}
              className="listLink"
            >
              Janne
            </List.Item>
            <List.Item
              icon={<Mspaint variant="32x32_4" />}
              onClick={handleOpenSkillsModal}
              className="listLink"
            >
              Skills
            </List.Item>
            <List.Divider />
            <List.Item
              icon={<Textchat variant="32x32_4" />}
              onClick={handleOpenAboutModal}
              className="listLink"
            >
              Welcome
            </List.Item>
          </List>
        }
      />

      <Shortcuts
        openPortfolio={handleOpenPortfolioModal}
        openCV={handleOpenCVModal}
        openTunes={handleOpenTunesModal}
      />
      {showAboutModal && <About closeAboutModal={handleCloseAboutModal} />}
      {showSkillsModal && <Skills closeSkillsModal={handleCloseSkillsModal} />}
      {showPhotoModal && (
        <S.styledModal
          title={"janne_compressed_for_web.jpeg"}
          titleBarOptions={<TitleBar.Close onClick={handleClosePhotoModal} />}
          icon={<User variant="16x16_4" />}
        >
          <Frame boxShadow="none" className="fullWidthImage">
            <img
              src={Janne_pixelated}
              aria-hidden
              alt="Janne as a pixelated image"
              className="fullWidthImage"
            ></img>
          </Frame>
        </S.styledModal>
      )}
      {showVaporwaveModal && (
        <S.styledModal
          closeModal={handleCloseVaporwaveModal}
          height="100%"
          icon={<CdMusic variant="16x16_4" />}
          width={340}
          title="My_Alter_Ego.doc"
        >
          <h1>A Vaporwave Album</h1>
          <p>
            In 2018 I took part in a workshop in Lithuania at the Vilnius Art
            Academy in producing a Vaporwave Album with participants coming in
            from around Europe.
          </p>
          <p>
            Over the course of the weekend we produced music videos, songs and
            more. I produced two songs for the album and a music video. The
            album can be found on streaming services.
          </p>
          <a href="https://open.spotify.com/album/0pCqTDsI4zOZXZJnxx2yPT?si=JW5qpLJJQsO3eK2m65FQBQ">
            The album on Spotify
          </a>
          <p></p>
          <br></br>
          <div>
            <iframe
              src="https://www.youtube.com/embed/7SyxEF-QG_M"
              width="100%"
              title="A Song from a Vaporwave Album"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </S.styledModal>
      )}
      {showPortfolioModal && (
        <Portfolio closePortfolio={handleClosePortfolioModal} />
      )}
      {showCVModal && <CV closeCV={handleCloseCVModal} />}
      {showTunesModal && <Tunes closeTunes={handleCloseTunesModal} />}
    </>
  );
}

export default Desktop;
