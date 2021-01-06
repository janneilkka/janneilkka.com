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
import * as S from "./layoutStyling";
import "./styles.scss";

function Desktop() {
  /* Mobile detection */
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

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

  /* Vaporwave Modal 1 */
  const [showVaporwaveModal1, setShowVaporwaveModal1] = useState(false);
  const handleOpenVaporwaveModal1 = useCallback(() => {
    setShowVaporwaveModal1(true);
  }, []);
  const handleCloseVaporwaveModal1 = useCallback(() => {
    setShowVaporwaveModal1(false);
  }, []);

  /* Vaporwave Modal 2 */
  const [showVaporwaveModal2, setShowVaporwaveModal2] = useState(false);
  const handleOpenVaporwaveModal2 = useCallback(() => {
    setShowVaporwaveModal2(true);
  }, []);
  const handleCloseVaporwaveModal2 = useCallback(() => {
    setShowVaporwaveModal2(false);
  }, []);

  /* Portfolio Modal */
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const handleOpenPortfolioModal = useCallback(() => {
    setShowPortfolioModal(true);
  }, []);
  const handleClosePortfolioModal = useCallback(() => {
    setShowPortfolioModal(false);
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
      {showAboutModal && (
        <S.layoutMain
          isMobile={isMobile}
          icon="progman_37"
          title={"About.txt"}
          closeModal={handleCloseAboutModal}
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
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <Frame
              bg="white"
              boxShadow="in"
              height="100%"
              padding={20}
              style={{
                overflowY: "auto",
              }}
            >
              <div class="text-content">
                <h1>Moikka!</h1>
                <p>
                  I am Janne, UX/UI Designer working at{" "}
                  <a href="https://www.solidabis.com">Solidabis Oy</a>, a rapidly growing Finnish IT-consultancy.
                  I am working as a designer, yet strengthening my coding skills
                  in the front-end world as well.
                </p>
                <p>
                  This app, sort of a playground of ideas, has been built with
                  Create React App and{" "}
                  <a href="https://github.com/React95/React95">React95</a>, an
                  open-source Windows95 component library for React.
                </p>
                <p>Oh and by the way, I made a <a href="https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit">Design Kit for React95</a>, check it out!</p>
              </div>
            </Frame>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showSkillsModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"Skills.txt"}
          closeModal={handleCloseSkillsModal}
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
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <Frame
              bg="white"
              boxShadow="in"
              padding={20}
              style={{
                overflowY: "auto",
              }}
            >
              <div class="text-content">
                <p>
                  {" "}
                  <h1>Some of my skills</h1>I disagree with quantifying skills
                  with numbers, percentages etc. - are skills really something
                  people can measure? However, here is a rough estimate of my
                  latest skills.
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
                </p>
              </div>
            </Frame>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showCVModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"CV.txt"}
          closeModal={handleCloseCVModal}
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
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <Frame
              bg="white"
              boxShadow="in"
              padding={20}
              style={{
                overflowY: "auto",
              }}
            >
              <div class="text-content">
                <h1>Curriculum Vitae</h1>
                <p>
                  UX/UI design, usability, facilitation and research. These are
                  some of the keywords that describe my interests and know-how.
                  I have a long work history in communication and user-centered
                  design. With my futuristic and social mind, I shine in duties
                  where I get to use my social skills and design talents in
                  practice.
                </p>
                <h2>Latest Work History</h2>
                <h3>UX/UI Designer - Solidabis Oy </h3>
                <p>
                  Design and UX consultant work focusing on the public sector
                  clients and design systems. One of the biggest achievements
                  was a Storybook-based styleguide which I coded, designed and
                  made from scratch as a one person team with minimal budget.
                  Part-time managing Solidabis marketing strategy.
                </p>
                <h3>UX/UI Designer - IBM </h3>
                <p>
                  UI development, front-end collaboration, visual and graphic
                  design. Client cooperation and usability assessments of
                  implemented products daily. One of the greatest
                  accomplishments was to get my team to use the Carbon design
                  system, therefore increasing consistency and scaling with
                  demos.
                </p>
                <h2>Education</h2>
                <h3>Master of Arts in New Media - Aalto University</h3>
                <p>
                  <a href="https://aaltodoc.aalto.fi/handle/123456789/40753">
                    My Master’s Thesis
                  </a>{" "}
                  in New Media Design & Production handled the issues faced by a
                  UI/UX designer on a daily basis with design systems with a
                  designed concept to improve the use of systems in daily tasks.
                  Usability School as minor, major New Media studies.
                </p>
                <h3>
                  Bachelor of Arts in Audiovisual Media - University of Lapland
                </h3>
                <p>
                  Bachelor studies in Audiovisual Media with a focus in user
                  inter-action and multimedia studies. Thesis work on proactive
                  UX design for a mobile interface. Exchange studies at Institut
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
              </div>
            </Frame>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showPhotoModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"janne_compressed_for_web.jpeg"}
          closeModal={handleClosePhotoModal}
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
        >
          <Frame
            boxShadow="none"
            style={{
              margin: "auto",
            }}
          >
            <img
              src={Janne_pixelated}
              aria-hidden alt="Janne as a pixelated image"
              class="full-width-image"
            ></img>
          </Frame>
          <div class="image-text">
            <p>janne_compressed_for_web.jpeg</p>
          </div>
        </S.layoutMain>
      )}
      {showVaporwaveModal1 && (
        <S.layoutMain
          isMobile={isMobile}
          closeModal={handleCloseVaporwaveModal1}
          height="100%"
          icon="cd_music"
          width={340}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseVaporwaveModal1}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
          title="My_Alter_Ego.doc"
        >
          <Frame
            bg="white"
            boxShadow="in"
            padding={10}
            style={{
              overflowX: "auto",
            }}
          >
            <div class="text-content">
              <h1>A Vaporwave Album</h1>
              <p>
                In 2018 I took part in a workshop in Lithuania at the Vilnius
                Art Academy in producing a Vaporwave Album with participants
                coming in from around Europe.
              </p>
              <p>
                Over the course of the weekend we produced music videos, songs
                and more. I produced two songs for the album and a music video.
                The album can be found on streaming services.
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
            </div>
          </Frame>
        </S.layoutMain>
      )}
      {showVaporwaveModal2 && (
        <S.layoutMain
          isMobile={isMobile}
          title={"Epic_Song.html"}
          closeModal={handleCloseVaporwaveModal2}
          defaultPosition={(0, 0)}
          height="100%"
          icon="cd_music"
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseVaporwaveModal2}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            style={{
              margin: "auto",
            }}
          >
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
          </Frame>
        </S.layoutMain>
      )}
      {showPortfolioModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"Portfolio_short_2020.txt"}
          closeModal={handleClosePortfolioModal}
          height="100%"
          icon="awfxcg32_1303"
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
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <Frame
              bg="white"
              boxShadow="in"
              padding={20}
              style={{
                overflowY: "auto",
              }}
            >
              <div class="text-content">
                <h1>Short Portfolio</h1>
                <p>
                  This is a shortened, non-visual version of my portfolio
                  without detailed information on any of the projects to give
                  you a context of what I have been working on lately. If you
                  are interested in seeing any of the work I have done, please
                  contact me for a visual portfolio as well.
                </p>
                <hr />
                <h2>Maintenance website</h2>
                <h3>
                  Patentti- ja rekisterihallitus / Finnish Patent and
                  Registration Office Helsinki, Finland
                </h3>
                <span>Role: UI Designer & Developer</span>
                <p>
                  <h4>Background</h4>
                  The Finnish Patent and Registration Office (PRH) needed a
                  website that would go online in the case of a service outage,
                  maintenance break or any other unexpected event. The website
                  would need to have three pages in Finnish, English and
                  Swedish: front page, a list of unaffected services and contact
                  information page, editable in Dreamweaver. The goal is to
                  portray a message, that the service outage is temporary and
                  will be fixed as soon as possible.
                  <h4>Solution</h4>
                  Using custom Bootstrap styling from the other project I had
                  developed for PRH, I designed the page entity that responded
                  to the aforementioned challenges. The page entity was a
                  Bootstrap 4-powered website that would be customizable by the
                  PRH communications department. I designed the elements and
                  outlined the page which then complemented the style guide as
                  an example page as well.
                </p>
                <hr />
                <h2>Edunsaaja-apuri accessibility fixes</h2>
                <h3>
                  Patentti- ja rekisterihallitus / Finnish Patent and
                  Registration Office Helsinki, Finland
                </h3>
                <span>Role: UI Designer & Developer</span>
                <p>
                  <h4>Background</h4>
                  Edunsaaja-apuri can be used to determine if an entity is
                  entitled to benefits or required for providing extra
                  information. After an accessibility audit, some fixes needed
                  to be done to make the website accessible and WCAG 2.1
                  compliant.
                  <h4>Solution</h4>
                  Using WCAG guidelines and the audit, I fixed the accessibility
                  errors and problems with the website which was done with
                  JavaScript and HTML5&CSS. Most of the work was only code.
                </p>
                <hr />
                <h2>Auditor search service</h2>
                <h3>
                  Patentti- ja rekisterihallitus / Finnish Patent and
                  Registration Office Helsinki, Finland
                </h3>
                <span>Role: UX&UI Designer</span>
                <p>
                  <h4>Background</h4>
                  The Auditor Oversight business unit of PRH had tendered out
                  the redevelopment of their digital services to Gofore, a
                  Finnish digital consultancy. However, the bid didn’t include
                  any designers but only process and software developers. As the
                  only designer present in the redevelopment processes, I took
                  it upon myself to ensure that the solutions were usable,
                  accessible and responded to business demands.
                  <h4>Solution</h4>
                  The Auditor search service was done in React with Bootstrap
                  and custom styling I had started to redevelop on another
                  project. It reflected on a developing style guide and provided
                  ideas for improvement for the design system as well.
                </p>
                <hr />
                <h2>Official PDF-document templates</h2>
                <h3>
                  Patentti- ja rekisterihallitus / Finnish Patent and
                  Registration Office Helsinki, Finland
                </h3>
                <span>Role: Designer</span>
                <p>
                  <h4>Background</h4>
                  The Finnish Patent and Registration Office (PRH) didn’t have
                  an official document model that was used on
                  digitally-generated documents. The documents followed a simple
                  automatically generated format, meaning that they were
                  unaccessible, unrecognizable and subject to fraud. The
                  documents would have to reflect PRH and their documents’
                  official nature throughout their services from receipts to
                  registrations and patents.
                  <h4>Solution</h4>
                  Together with another designer we designed a variety of
                  document templates that we tested in workshops internally in
                  each business unit that would be using the model. After, we
                  modified the documents to respond to workshop feedback, made
                  the documents accessible to screen readers and clarified the
                  font usage and header levels, which were then delivered to the
                  technical team as templates and instructions.
                </p>
                <hr />
                <h2>
                  Design System - Bootstrap 4 -styles, StorybookJS,
                  Sketch-library
                </h2>
                <h3>
                  Patentti- ja rekisterihallitus / Finnish Patent and
                  Registration Office Helsinki, Finland
                </h3>
                <span>Role: UI Designer & Developer</span>
                <p>
                  <h4>Background</h4>
                  The Finnish Patent and Registration Office (PRH) partnered
                  with us to maintain, redevelop and redesign their custom
                  Bootstrap-styling. PRH didn’t own a systematic way of
                  presenting the styles nor instructing contractors and in-house
                  developers how to use the styles, especially with
                  accessibility in mind. The custom Bootstrap-styles had
                  previously been developed by several contractors, based on
                  Bootstrap 3 and used widely on a variety of digital services.
                  <h4>Solution</h4>I suggested building a component library for
                  developers and other stakeholders to use in their daily work
                  on an open-source platform (Storybook). As part of the
                  development, I redesiged the styling, fixed accessibility
                  issues, created code snippets and documented each component
                  individually and maintained the whole component library into
                  an npm package. I developed the styleguide on JavaScript and
                  matched it with a Sketch-library from scratch to support
                  designers; a starting point of a design system for PRH.
                </p>
                <hr />
                <h2>Brand & Communications Guidelines</h2>
                <h3>Solidabis Oy</h3>
                <span>Role: Designer</span>
                <p>
                  <h4>Background</h4>
                  Solidabis is a growing software development company that has
                  had a variety of structural and cultural changes in its
                  history since the founding in 2016. The changes have led to
                  the company not having clear and concise image to potential
                  clients, future employees or the media. Logos and colors are
                  not properly defined and mixed versions of the logos are
                  circulating around in workspaces.
                  <h4>Solution</h4>I developed brand and visual styleguide to
                  help everyone in their daily client work. It includes the
                  correct color codes, tone of voice, samples of text and
                  imagery as well as proper logo usage. I designed document
                  templates for Word and PowerPoint as well as other brand
                  assets, such as an icon and font bank, Adobe CC color package,
                  social media hashtags and automated marketing campaigns.
                </p>
                <hr />
                <h2>Designer on various projects</h2>
                <h3>IBM</h3>
                <span>Role: UX Designer</span>
                <p>
                  <h4>Background</h4>
                  Due to strict confidentiality and the intellectual property
                  laws implemented in the contract signed with IBM, I am not
                  allowed to present my work to outside parties nor discuss the
                  clients I have worked with. A few of the Finnish clients which
                  have publicly promoted IBM’s cooperation, such as Finnair and
                  Nokia, are just some of the clients for which I worked for as
                  a designer.
                  <h4>Focus</h4>All of the work I did at IBM was
                  enterprise-centered, focusing on enterprise-level users and
                  employee experience rather than customer and commercial. Most
                  design work had to do with Watson AI-powered chatbots for
                  IBM’s clients. My tasks varied from leading workshops, to user
                  interviews and tests, to collaboratively working with data
                  scientists, developers and product owners on a daily basis.
                </p>
                <hr />
                <h2>University of Helsinki Metro Station Visual Outlook</h2>
                <h3>HKL - Helsinki City Transportation</h3>
                <span>Role: Visual Designer</span>
                <p>
                  <h4>Background</h4>
                  Helsinki City Transport HKL organized an open call for
                  artworks for all the metro stations in the Helsinki branch.
                  Participation was anonymous and the submissions would be
                  judged based on the artistic value and historical implications
                  as well as timelessness. Together with a good friend of mine,{" "}
                  <a href="http://misaelrojas.com/">Misael Rojas</a>, we
                  submitted an artwork for the University of Helsinki metro
                  station, which is one of the three busiest metro stations in
                  Helsinki due to its location near the governmental, private
                  enterprise hubs.
                  <h4>Outcome</h4>The design takes into account the historical
                  nature of the station, being the last one to be completed in
                  Helsinki in the late 90s. Neon lights and tile patterns
                  complement the station’s spirit. We took nearly 300 images
                  from which we vectorized shapes from iconic buildings around
                  the station. It gives the daily user of the metro station
                  something new to look for and spot in their surroundings
                  during their daily routines.
                </p>
                <hr />
                <h2>#Olotila Street Art Collaborative Installation</h2>
                <h3>City of Helsinki Urban Environment Division</h3>
                <span>Role: Producer / Curator</span>
                <p>
                  <h4>Background</h4>
                  In 2018 I worked as a Communications Intern at the City of
                  Helsinki Urban Environment Division. During the summer I
                  noticed the largest construction site of Central Library Oodi
                  being surrounded by light green wooden walls. In front of the
                  Finnish Parliament, it is the most central site in Helsinki. I
                  gathered funding and organized to get artists from womens’
                  collective Mimmit Peinttaa to cover these walls with art and
                  stories.
                  <h4>Outcome</h4>The walls were painted in early September. I
                  made and designed the promotional texts and logos in stencil
                  form for the city and companies. The works have appeared in
                  many publications such as Helsingin Sanomat and several
                  Instagram accounts.
                </p>
              </div>
            </Frame>
          </S.layoutMainContent>
        </S.layoutMain>
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
            <List.Divider />
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
            <List.Item icon="cd_music">
              Tunes
              <List>
                <List.Item onClick={handleOpenVaporwaveModal1} icon="cd_music">
                  My Alter Ego
                </List.Item>
                <List.Item onClick={handleOpenVaporwaveModal2} icon="cd_music">
                  Epic Song from Internet
                </List.Item>
              </List>
            </List.Item>
            <List.Item icon="explorer_103" onClick={handleOpenPortfolioModal}>
              Portfolio
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
    </ThemeProvider>
  );
}

export default Desktop;
