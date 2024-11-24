import React, { useState, useCallback } from "react";
import {
  GlobalStyle,
  ThemeProvider,
  List,
  Frame,
  ProgressBar,
  TaskBar,
} from "@react95/core";
import Janne_pixelated from "../janne_pixelated.png";
import socialMedia from "./socialMedia";
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

function Desktop() {
  /* Mobile detection */
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const [items] = useState([]);

  /* Welcome Modal */
  const [showAboutModal, setShowAboutModal] = useState(true);
  const handleOpenAboutModal = useCallback(() => {
    setShowAboutModal(true);
  }, []);
  const handleCloseAboutModal = useCallback(() => {
    setShowAboutModal(false);
  }, []);

  /* Skills Modal */
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const handleOpenSkillsModal = useCallback(() => {
    setShowSkillsModal(true);
  }, []);
  const handleCloseSkillsModal = useCallback(() => {
    setShowSkillsModal(false);
  }, []);

  /* Photo Modal */
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const handleOpenPhotoModal = useCallback(() => {
    setShowPhotoModal(true);
  }, []);
  const handleClosePhotoModal = useCallback(() => {
    setShowPhotoModal(false);
  }, []);

  /* Vaporwave Modal 1 */
  const [showVaporwaveModal1, setShowVaporwaveModal1] = useState(false);
  const handleOpenVaporwaveModal1 = useCallback(() => {
    setShowVaporwaveModal1(true);
  }, []);
  const handleCloseVaporwaveModal1 = useCallback(() => {
    setShowVaporwaveModal1(false);
  }, []);

  /* Portfolio Shortcut */
  const closePortfolio = () => {
    togglePortfolio(false);
  };

  const openPortfolio = () => {
    togglePortfolio(true);
  };
  const [explorerOpened, togglePortfolio] = useState(false);

  /* CV Shortcut */

  const closeCV = () => {
    toggleCV(false);
  };

  const openCV = () => {
    toggleCV(true);
  };

  const [cvOpened, toggleCV] = useState(false);

  /* Tunes Shortcut */

  const closeTunes = () => {
    toggleTunes(false);
  };

  const openTunes = () => {
    toggleTunes(true);
  };

  const [tunesOpened, toggleTunes] = useState(false);

  return (
    <ThemeProvider theme="millenium">
      <GlobalStyle></GlobalStyle>
      {showAboutModal && (
        <S.layoutMain
          isMobile={isMobile}
          icon={<Textchat variant="32x32_4" />}
          title={"Welcome.txt"}
          closeModal={handleCloseAboutModal}
        >
          <S.layoutMainContent bg="white" boxShadow="out">
            <S.textModal>
              <h1>Hello!</h1>
              <p>
                I'm Janne, a designer of many talents from Helsinki. I've been
                working lately with product development in many roles and
                domains: from ecommerce, to public sector, to startups. I'm into
                structured and systems oriented software development, where
                design is agile and rapid.
                <br />
                This app, sort of a playground of ideas, has been built with
                Create React App and{" "}
                <a
                  href="https://github.com/React95/React95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React95
                </a>
                , an open-source Windows95 component library for React. If
                you're interested in this project even further check out the{" "}
                <a
                  href="https://www.figma.com/community/file/1217110360892669474"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React95 component library on Figma
                </a>{" "}
                that I made as a past-time project.
              </p>
              <p>
                <a
                  href="https://windowswallpaper.miraheze.org/wiki/File:Clouds_(Windows_95).png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Background
                </a>{" "}
                by WindowsAesthetics /{" "}
                <a
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC BY-SA 4.0
                </a>
              </p>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showSkillsModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"Skills.txt"}
          closeModal={handleCloseSkillsModal}
          icon={<Mspaint variant="32x32_4" />}
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <S.textModal>
              <h1>Some of my skills</h1>
              <p>
                I disagree with quantifying skills with numbers, percentages
                etc. - are skills really something people can measure? However,
                here is a rough estimate of my latest skills.
              </p>
              <br />
              <hr />
              <h2>Design tools</h2>
              <h3>Figma, Sketch</h3>
              <ProgressBar width={250} percent={90} />
              <h3>Adobe CC</h3>
              <ProgressBar width={250} percent={85} />
              <h3>Prototyping, wireframing, user flows</h3>
              <ProgressBar width={250} percent={80} />
              <h3>User testing, interviewing</h3>
              <ProgressBar width={250} percent={80} />
              <h3>WCAG 2.1</h3>
              <ProgressBar width={250} percent={75} />
              <br />
              <hr />
              <h2>Dev tools</h2>
              <h3>Storybook(JS)</h3>
              <ProgressBar width={250} percent={75} />
              <h3>HTML, CSS, SASS</h3>
              <ProgressBar width={250} percent={75} />
              <h3>Wordpress (PHP/Themes)</h3>
              <ProgressBar width={250} percent={70} />
              <h3>Git</h3>
              <ProgressBar width={250} percent={60} />
              <h3>Raspberry Pi & Arduino</h3>
              <ProgressBar width={250} percent={30} />
              <h3>React</h3>
              <ProgressBar width={250} percent={30} />
              <h3>Vue</h3>
              <ProgressBar width={250} percent={15} />
              <br />
              <hr />
              <h2>Other Skills</h2>
              <li>Agile methods</li>
              <li>Product development</li>
              <li>Project management</li>
              <li>Design systems</li>
              <li>User interviews</li>
              <li>User testing</li>
              <li>Wireframing and prototyping</li>
              <li>Visual design</li>
              <li>Research</li>
              <li>Copywriting and social media</li>
              <li>Content creation</li>
              <li>Workshops</li>
              <li>Facilitation</li>
              <li>Concept creation</li>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showPhotoModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"janne_compressed_for_web.jpeg"}
          closeModal={handleClosePhotoModal}
          icon={<User variant="32x32_4" />}
        >
          <Frame
            boxShadow="none"
            style={{
              margin: "auto",
            }}
          >
            <img
              src={Janne_pixelated}
              aria-hidden
              alt="Janne as a pixelated image"
              className="full-width-image"
            ></img>
          </Frame>
          <div className="image-text">
            <p>janne_compressed_for_web.jpeg</p>
          </div>
        </S.layoutMain>
      )}
      {showVaporwaveModal1 && (
        <S.layoutMain
          isMobile={isMobile}
          closeModal={handleCloseVaporwaveModal1}
          height="100%"
          icon={<CdMusic variant="32x32_4" />}
          width={340}
          title="My_Alter_Ego.doc"
        >
          <S.textModal>
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
          </S.textModal>
        </S.layoutMain>
      )}
      <TaskBar
        list={
          <List>
            <List.Item
              icon={<Progman34 variant="32x32_4" />}
              className="listLink"
            >
              Socials
              <List>
                {socialMedia.map(({ icon, name, url }) => (
                  <List.Item
                    as="a"
                    href={url}
                    icon={icon}
                    key={name}
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
                  onClick={handleOpenVaporwaveModal1}
                  icon={<CdMusic variant="32x32_4" />}
                  className="listLink"
                >
                  Janne's Vaporwave Story from 2018
                </List.Item>
                <List.Item
                  onClick={openTunes}
                  icon={<CdMusic variant="32x32_4" />}
                  className="listLink"
                >
                  Janne's Ultimate House Playlist on Spotify
                </List.Item>
              </List>
            </List.Item>
            <List.Item
              icon={<Awfxcg321303 variant="32x32_4" />}
              onClick={openCV}
              className="listLink"
            >
              CV{" "}
            </List.Item>
            <List.Item
              icon={<Explorer103 variant="32x32_4" />}
              onClick={openPortfolio}
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
      <React.Fragment>
        <Shortcuts
          openPortfolio={openPortfolio}
          openCV={openCV}
          openTunes={openTunes}
        />
        {explorerOpened && (
          <Portfolio
            items={items}
            closePortfolio={closePortfolio}
            isMobile={isMobile}
          />
        )}
        {cvOpened && <CV items={items} closeCV={closeCV} isMobile={isMobile} />}
        {tunesOpened && (
          <Tunes items={items} closeTunes={closeTunes} isMobile={isMobile} />
        )}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Desktop;
