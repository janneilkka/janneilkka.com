import React, { useCallback, useState } from "react";
import {
  GlobalStyle,
  ThemeProvider,
  List,
  Modal,
  Frame,
  ProgressBar,
  TaskBar,
} from "@react95/core";
import Janne_pixelated from "../janne_pixelated.png";
import socialMedia from "./socialMedia";
// import Iframe from "react-iframe";
import "./styles.css";

function Desktop() {
  /* Modal Position */
  const modalDefaultPosition = { x: 60, y: 50 };

  /* About Modal */
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

  /* CV Modal */
  const [showCVModal, setShowCVModal] = useState(false);
  const handleOpenCVModal = useCallback(() => {
    setShowCVModal(true);
  }, []);
  const handleCloseCVModal = useCallback(() => {
    setShowCVModal(false);
  }, []);

  /* Photo Modal */
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const handleOpenPhotoModal = useCallback(() => {
    setShowPhotoModal(true);
  }, []);
  const handleClosePhotoModal = useCallback(() => {
    setShowPhotoModal(false);
  }, []);

  /* Vaporwave Modal */
  const [showVaporwaveModal, setShowVaporwaveModal] = useState(false);
  const handleOpenVaporwaveModal = useCallback(() => {
    setShowVaporwaveModal(true);
  }, []);
  const handleCloseVaporwaveModal = useCallback(() => {
    setShowVaporwaveModal(false);
  }, []);

  /* Portfolio Modal */
  // const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  // const handleOpenPortfolioModal = useCallback(() => {
  //   setShowPortfolioModal(true);
  // }, []);
  // const handleClosePortfolioModal = useCallback(() => {
  //   setShowPortfolioModal(false);
  // }, []);

  return (
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
      {showAboutModal && (
        <Modal
          className="responsive-modal"
          closeModal={handleCloseAboutModal}
          defaultPosition={modalDefaultPosition}
          height="100%"
          icon="progman_37"
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseAboutModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
          title="About"
          width={300}
        >
          <Frame
            bg="white"
            boxShadow="in"
            height="100%"
            padding={20}
            style={{
              overflowY: "auto",
            }}
          >
            <h1>Hi!</h1>I am Janne, UX/UI Designer working at{" "}
            <a href="https://www.solidabis.com">Solidabis Oy</a>
            <p>
              I am working as a designer, yet strengthening my coding skills in
              the front-end world as well - both through client projects as well
              as as a hobby.
            </p>
            <p>
              This page, sort of a playground of ideas, has been built with CRA
              and <a href="https://github.com/React95/React95">React95</a>, an
              open-source Windows95 component library for React.
            </p>
            <p>
              Should you be interested in seeing my portfolio, hit me an{" "}
              <a href="mailto:janne.ilkka@gmail.com">email</a> and I will send
              the link and a password your way!
            </p>
            <br />
          </Frame>
        </Modal>
      )}
      {showSkillsModal && (
        <Modal
          className="responsive-modal"
          closeModal={handleCloseSkillsModal}
          defaultPosition={modalDefaultPosition}
          height="100%"
          icon="mspaint"
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseSkillsModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
          title="Skills"
          width={350}
        >
          <Frame
            className="responsive-frame"
            bg="white"
            boxShadow="in"
            height={500}
            padding={40}
            style={{
              overflowY: "auto",
              overflowX: "auto",
            }}
          >
            <h1>Some of my skills</h1>
            <p>
              I disagree with quantifying skills with numbers, percentages etc.
              - are skills really something people can measure? However, here is
              a rough estimate of my latest skills.
            </p>
            <h2>Design</h2>
            <h3>Adobe CC</h3>
            <ProgressBar width={250} percent={90} />
            <h3>Sketch</h3>
            <ProgressBar width={250} percent={85} />
            <h3>InVision</h3>
            <ProgressBar width={250} percent={85} />
            <h3>WCAG 2.1</h3>
            <ProgressBar width={250} percent={50} />
            <h3>Figma</h3>
            <ProgressBar width={250} percent={40} />
            <br />
            <h2>Dev</h2>
            <h3>Storybook(JS)</h3>
            <ProgressBar width={250} percent={70} />
            <h3>HTML, CSS, SASS</h3>
            <ProgressBar width={250} percent={65} />
            <h3>Wordpress</h3>
            <ProgressBar width={250} percent={60} />
            <h3>Raspberry Pi & Arduino</h3>
            <ProgressBar width={250} percent={30} />
            <h3>Git</h3>
            <ProgressBar width={250} percent={30} />
            <h3>React</h3>
            <ProgressBar width={250} percent={25} />
            <br />
            <h2>Other Skills</h2>
            <ul>
              <li>User Interviews</li>
              <li>User Testing</li>
              <li>Wireframing and prototyping</li>
              <li>Visual design</li>
              <li>Research</li>
              <li>Copywriting and Social Media</li>
              <li>Content Creation</li>
              <li>Workshops</li>
              <li>Facilitation</li>
            </ul>
          </Frame>
        </Modal>
      )}
      {showCVModal && (
        <Modal
          className="responsive-modal"
          closeModal={handleCloseCVModal}
          defaultPosition={modalDefaultPosition}
          height="100%"
          icon="shdocvw_272"
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseCVModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
          title="Curriculum Vitae"
          width={350}
        >
          <Frame
            className="responsive-frame"
            bg="white"
            boxShadow="in"
            padding={40}
            height={500}
            style={{
              overflowY: "auto",
              overflowX: "auto",
            }}
          >
            <h1>(A Short) Curriculum Vitae</h1>
            <p>
              UX/UI design, usability, facilitation and research. These are some
              of the keywords that describe my interests and know-how. I have a
              long work history in communication and user-centered design. With
              my futuristic and social mind, I shine in duties where I get to
              use my social skills and design talents in practice.
            </p>
            <h2>Latest Work History</h2>
            <h3>UX/UI Designer - Solidabis Oy </h3>
            <p>
              Design and UX consultant work focusing on the public sector
              clients and design systems. One of the biggest achievements was a
              Storybook-based styleguide which I coded, designed and made from
              scratch as a one person team with minimal budget. Part-time
              managing Solidabis marketing strategy.
            </p>
            <h3>UX/UI Designer - IBM </h3>
            <p>
              UI development, front-end collaboration, visual and graphic
              design. Client cooperation and usability assessments of
              implemented products daily. One of the greatest accomplishments
              was to get my team to use the Carbon design system, therefore
              increasing consistency and scaling with demos.
            </p>
            <h2>Education</h2>
            <h3>Master of Arts in New Media - Aalto University</h3>
            <p>
              My Master’s Thesis in New Media Design & Production handled the
              issues faced by a UI/UX designer on a daily basis with design
              systems with a designed concept to improve the use of systems in
              daily tasks. Usability School as minor, major New Media studies.
            </p>
            <h3>
              Bachelor of Arts in Audiovisual Media - University of Lapland
            </h3>
            <p>
              Bachelor studies in Audiovisual Media with a focus in user
              inter-action and multimedia studies. Thesis work on proactive UX
              design for a mobile interface. Exchange studies at Institut
              d'Études Politiques de Paris in Latin American Studies.
            </p>
            <h3>International Baccalaureate - UWC Costa Rica</h3>
            <p>
              International Baccalaureate degree at the United World College
              Costa Rica as the Finnish Cultural Fund fellow and Finnish
              repre-sentative.
            </p>
            <h2>Languages in order of strength</h2>
            <ul>
              <li>Finnish</li>
              <li>English</li>
              <li>Spanish</li>
            </ul>
            <p>Elementary knowledge in following</p>
            <ul>
              <li>French</li>
              <li>Swedish</li>
              <li>Portuguese</li>
            </ul>
          </Frame>
        </Modal>
      )}
      {showPhotoModal && (
        <Modal
          closeModal={handleClosePhotoModal}
          defaultPosition={modalDefaultPosition}
          icon="user"
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleClosePhotoModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
          title="Janne"
        >
          <Frame boxShadow="in">
            <img
              src={Janne_pixelated}
              alt="This is Janne"
              className="full-width-image"
            ></img>
          </Frame>
          <p>janne_compressed.jpeg</p>
        </Modal>
      )}
      {showVaporwaveModal && (
        <Modal
          closeModal={handleCloseVaporwaveModal}
          defaultPosition={modalDefaultPosition - 2}
          height="100%"
          icon="cd_music"
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseVaporwaveModal}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
          title="2/2 Tunes from the Internet"
        >
          <div>
            <iframe
              src="https://www.youtube.com/embed/vwnAeIsg3as"
              frameborder="0"
              allowfullscreen
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              title="Artist: Home, song: Resonance - a slowed version of the song"
            ></iframe>
          </div>
        </Modal>
      )}
      {showVaporwaveModal && (
        <Modal
          closeModal={handleCloseVaporwaveModal}
          defaultPosition={modalDefaultPosition}
          height="100%"
          icon="cd_music"
          width={340}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseVaporwaveModal - 1}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
          title="1/2 Tunes from Lithuania"
        >
          <Frame
            className="responsive-frame"
            bg="white"
            boxShadow="in"
            padding={10}
            style={{
              overflowX: "auto",
            }}
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
                frameborder="0"
                title="A Song from a Vaporwave Album"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Frame>
        </Modal>
      )}
      {/* {showPortfolioModal && (
        <Modal
          closeModal={handleClosePortfolioModal}
          icon="explorer_103"
          height={600}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleClosePortfolioModal}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
          title="Portfolio"
        >
          <Frame
            bg="none"
            boxShadow="in"
            className="styled-frame"
            height={500}
            style={{
              overflowY: "auto",
              overflowX: "auto",
            }}
          >
            <Iframe
              className="full-screen"
              src="https://app.koofr.net/links/737200ad-b241-4184-a6bc-9d07a4cd4539"
              title="Portfolio"
            ></Iframe>
          </Frame>
        </Modal>
      )} */}
      <TaskBar
        list={
          <List>
            <List.Item
              as="a"
              href="mailto:janne.ilkka@gmail.com"
              icon="mail"
              target="_blank"
            >
              Contact me
            </List.Item>
            <List.Item icon="systray_306">
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
                  >
                    {name}
                  </List.Item>
                ))}
              </List>
            </List.Item>
            <List.Item icon="cd_music" onClick={handleOpenVaporwaveModal}>
              Tunes
            </List.Item>
            <List.Item icon="user" onClick={handleOpenPhotoModal}>
              Janne
            </List.Item>
            <List.Item icon="explorer_103">
              Portfolio
              <List>
                <List.Item
                  icon="explorer_103"
                  as="a"
                  href="https://k00.fr/wpbbvrye"
                  target="_blank"
                  // onClick={handleOpenPortfolioModal}
                >
                  View portfolio
                </List.Item>
                <List.Item
                  icon="key"
                  as="a"
                  href="mailto:janne.ilkka@gmail.com?subject=Hi! I would like access to your Portfolio!&body=Hello, I would like access to your portfolio please."
                  target="_blank"
                >
                  Request password
                </List.Item>
              </List>
            </List.Item>
            <List.Item icon="shdocvw_272" onClick={handleOpenCVModal}>
              CV
            </List.Item>
            <List.Item icon="mspaint" onClick={handleOpenSkillsModal}>
              Skills
            </List.Item>
            <List.Divider />
            <List.Item icon="progman_37" onClick={handleOpenAboutModal}>
              About
            </List.Item>
          </List>
        }
      />
    </ThemeProvider>
  );
}

export default Desktop;
