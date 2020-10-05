import React, { useEffect } from "react";
import {
  Icon,
  List,
  Modal,
  Frame,
  TaskBar,
  ProgressBar,
  GlobalStyle,
  ThemeProvider,
} from "@react95/core";
import { useState, useCallback } from "react";
import IconBox from "./components/icon-box";
import IconText from "./components/icon-text";
import Page from "./components/page";
import Janne_pixelated from "./janne_pixelated.png";

const MODAL_DEFAULT_POSITION = { x: 60, y: 50 };

const SOCIAL_ANCHORS_LIST = [
  {
    icon: "access_227",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/janneilkka/",
  },
  {
    icon: "access_219",
    name: "Twitter",
    url: "https://twitter.com/janneilkka",
  },
  {
    icon: "access_220",
    name: "Instagram",
    url: "https://instagram.com/janne.ilkka",
  },
];

const Home = () => {
  const [showAboutModal, setShowAboutModal] = useState(true);
  const handleOpenAboutModal = useCallback(() => {
    setShowAboutModal(true);
  }, []);
  const handleCloseAboutModal = useCallback(() => {
    setShowAboutModal(false);
  }, []);

  const [showSkillsModal, setShowSkillsModal] = useState(true);
  const handleOpenSkillsModal = useCallback(() => {
    setShowSkillsModal(true);
  }, []);
  const handleCloseSkillsModal = useCallback(() => {
    setShowSkillsModal(false);
  }, []);

  const [showCVModal, setShowCVModal] = useState(true);
  const handleOpenCVModal = useCallback(() => {
    setShowCVModal(true);
  }, []);
  const handleCloseCVModal = useCallback(() => {
    setShowCVModal(false);
  }, []);

  useEffect(() => {
    setShowSkillsModal(false);
    setShowCVModal(false);
  }, []);

  const [showPhotoModal, setShowPhotoModal] = useState(true);
  const handleOpenPhotoModal = useCallback(() => {
    setShowPhotoModal(true);
  }, []);
  const handleClosePhotoModal = useCallback(() => {
    setShowPhotoModal(false);
  }, []);

  useEffect(() => {
    setShowSkillsModal(false);
    setShowPhotoModal(false);
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
      <Page>
        <IconBox>
          <Icon name="access_219" />
          <IconText>ui_components.jsx</IconText>
        </IconBox>
        <IconBox>
          <Icon name="awfxcg32_1303" />
          <IconText>user_interviews.doc</IconText>
        </IconBox>
        <IconBox>
          <Icon name="shell32_39" />
          <IconText>design_system_MASTER.fig</IconText>
        </IconBox>
        <IconBox>
          <Icon name="progman_24" />
          <IconText>design_ideas.BMP</IconText>
        </IconBox>
        <IconBox>
          <Icon name="progman_17" />
          <IconText>styles.scss</IconText>
        </IconBox>
        <IconBox>
          <Icon name="access_110" />
          <IconText>wcag_checklist.txt</IconText>
        </IconBox>
        <IconBox>
          <Icon name="shell32_36" />
          <IconText>prototypes_wireframes.pdf</IconText>
        </IconBox>
        {showAboutModal && (
          <Modal
            closeModal={handleCloseAboutModal}
            defaultPosition={MODAL_DEFAULT_POSITION}
            height="100%"
            icon="progman_37"
            menu={[
              {
                name: "Options",
                list: (
                  <List>
                    <List.Item
                      as="a"
                      href="mailto:janne.ilkka@gmail.com"
                      target="_blank"
                    >
                      Contact me
                    </List.Item>
                    <List.Divider />
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
              <a href="www.solidabis.com">Solidabis Oy</a>
              <p>
                I am working as a desinger, yet strengthening my coding skills
                in the front-end world as well - both through client projects as
                well as as a hobby.
              </p>
              <p>
                This page, sort of a playground of ideas, has been built with
                CRA and <a href="https://github.com/React95/React95">React95</a>
                , an open-source Windows95 component library for React.
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
            closeModal={handleCloseSkillsModal}
            defaultPosition={MODAL_DEFAULT_POSITION}
            height="100%"
            icon="mspaint"
            menu={[
              {
                name: "Options",
                list: (
                  <List>
                    <List.Item
                      as="a"
                      href="mailto:janne.ilkka@gmail.com"
                      target="_blank"
                    >
                      Contact me
                    </List.Item>
                    <List.Divider />
                    <List.Item onClick={handleCloseSkillsModal}>
                      Close
                    </List.Item>
                  </List>
                ),
              },
            ]}
            title="Skills"
            width={350}
          >
            <Frame
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
                I disagree with quantifying skills with numbers, percentages
                etc. - are skills really something people can measure? However,
                here is a rough estimate of my latest skills.
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
            closeModal={handleCloseCVModal}
            defaultPosition={MODAL_DEFAULT_POSITION}
            height="100%"
            icon="shdocvw_272"
            menu={[
              {
                name: "Options",
                list: (
                  <List>
                    <List.Item
                      as="a"
                      href="mailto:janne.ilkka@gmail.com"
                      target="_blank"
                    >
                      Contact me
                    </List.Item>
                    <List.Divider />
                    <List.Item onClick={handleCloseCVModal}>Close</List.Item>
                  </List>
                ),
              },
            ]}
            title="Curriculum Vitae"
            width={350}
          >
            <Frame
              bg="white"
              boxShadow="in"
              height={500}
              padding={40}
              style={{
                overflowY: "auto",
                overflowX: "auto",
              }}
            >
              <h1>(A Short) Curriculum Vitae</h1>
              <p>
                UX/UI design, usability, facilitation and research. These are
                some of the keywords that describe my interests and know-how. I
                have a long work history in communication and user-centered
                design. With my futuristic and social mind, I shine in duties
                where I get to use my social skills and design talents in
                practice.
              </p>
              <h2>Latest Work History</h2>
              <h3>UX/UI Designer - Solidabis Oy </h3>
              <p>
                Design and UX consultant work focusing on the public sector
                clients and design systems. One of the biggest achievements was
                a Storybook-based styleguide which I coded, designed and made
                from scratch as a one person team with minimal budget. Part-time
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
            defaultPosition={MODAL_DEFAULT_POSITION}
            height="100%"
            icon="user"
            menu={[
              {
                name: "Options",
                list: (
                  <List>
                    <List.Item
                      as="a"
                      href="mailto:janne.ilkka@gmail.com"
                      target="_blank"
                    >
                      Contact me
                    </List.Item>
                    <List.Divider />
                    <List.Item onClick={handleClosePhotoModal}>Close</List.Item>
                  </List>
                ),
              },
            ]}
            title="Janne"
            width={350}
          >
            <Frame
              boxShadow="in"
              height={350}
              padding={40}
              style={{
                overflowY: "auto",
                overflowX: "auto",
              }}
            >
              <img height={250} src={Janne_pixelated} alt="This is Janne"></img>
            </Frame>
            <p>janne_compressed.jpeg</p>
          </Modal>
        )}
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
                  {SOCIAL_ANCHORS_LIST.map(({ icon, name, url }) => (
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
              <List.Item icon="user" onClick={handleOpenPhotoModal}>
                Janne
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
      </Page>
    </ThemeProvider>
  );
};
export default Home;
