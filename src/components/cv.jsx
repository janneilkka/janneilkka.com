import React from "react";
import { TitleBar, Cursor } from "@react95/core";
import { Shell32133 } from "@react95/icons";
import * as S from "./layoutStyling";

function CV({ closeCV }) {
  return (
    <S.styledModal
      title={"CV.txt"}
      titleBarOptions={[
        <S.styledModal.Minimize />,
        <TitleBar.Close onClick={closeCV} />,
      ]}
      height="100%"
      icon={<Shell32133 variant="16x16_4" />}
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h1>Curriculum Vitae</h1>
        <p>
          Product design, user-centered design methods and agile software
          development. These are some of the keywords that describe my interests
          and know-how. I have a long work history in communication and
          user-centered design. As a generalist equipped with a futuristic and
          social mind, I shine in duties where I get to use my social skills and
          design talents in practice, such as in project management, product
          design and testing.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Work History</h2>
        <h3>Head of Design, Product Owner</h3>
        <span>Anyhau Oy</span>
        <p>
          A leadership role in taking charge of the new platform's design for
          all of{" "}
          <a
            className={Cursor.Pointer}
            href="https://anyhau.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anyhau
          </a>{" "}
          products for two user groups: pet owners and pet businesses. Alongside
          leading the design and organizing daily design work, having ownership
          in project management and organizing daily ceremonies, as well as
          pruning the backlog and keeping focus for the whole team.
        </p>
        <h3>Designer</h3>
        <span>Sanoma Media Finland</span>
        <p>
          Maintaining and developing new storytelling solutions, journalistic
          tools and data visualization at{" "}
          <a
            className={Cursor.Pointer}
            href="https://hs.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Helsingin Sanomat
          </a>{" "}
          Datadesk. Biggest project from the time at Sanoma was being the design
          lead and principal designer for the{" "}
          <a
            href="https://vaalikone.fi"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            voting aid machines
          </a>{" "}
          for all Sanoma brands (Aamulehti, HS, Ilta-Sanomat, regional brands).
          The voting aid machines consists of three user interfaces: the
          candidate machine, voting aid machines to the voters and results
          service for election night.
        </p>
        <h3>UX Designer</h3>
        <span>S-group (SOK) / Sokos </span>
        <p>
          Developing a new custom-made{" "}
          <a
            className={Cursor.Pointer}
            href="https://sokos.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sokos.fi
          </a>{" "}
          webstore and driving user-centric design within the community. Design
          ownership of the visual identity of the webstore, and the brand
          identity within. Alongside Sokos development, participating in
          internal design system development and developing company-wide design
          processes.
        </p>
        <h3>UX/UI Designer, Accessibility Specialist</h3>
        <span>Solidabis Oy</span>
        <p>
          Design and UX consultant work focusing on the public sector clients
          and design systems. One of the biggest achievements was a
          Storybook-based styleguide which I coded, designed and made from
          scratch as a one person team with minimal budget. Part-time managing
          Solidabis marketing strategy, during which I single handedly
          redesigned and redeveloped{" "}
          <a
            href="https://solidabis.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            Solidabis' Wordpress-based website
          </a>{" "}
          using the Genesis framework and coding a custom theme on PHP, CSS and
          HTML.
        </p>
        <h3>Junior UX/UI Designer</h3>
        <span>IBM</span>
        <p>
          UI development, front-end collaboration, visual and graphic design.
          Client cooperation and usability assessments of implemented products
          daily. One of the greatest accomplishments was to get my team to use
          the{" "}
          <a
            href="https://carbondesignsystem.com"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            Carbon design system
          </a>
          , therefore increasing consistency and scaling with demos.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Education</h2>
        <h3>Master of Arts in New Media</h3>
        <span>Aalto University</span>
        <p>
          <a
            href="https://aaltodoc.aalto.fi/handle/123456789/40753"
            target="_blank"
            rel="noopener noreferrer"
            className={Cursor.Pointer}
          >
            My Master’s Thesis
          </a>{" "}
          in New Media Design & Production handled the issues faced by a UI/UX
          designer on a daily basis with design systems with a designed concept
          to improve the use of systems in daily tasks. Usability School as
          minor, major New Media studies.
        </p>
        <h3>Bachelor of Arts in Audiovisual Media</h3>
        <span>University of Lapland</span>
        <p>
          Bachelor studies in Audiovisual Media with a focus in user
          inter-action and multimedia studies. Thesis work on proactive UX
          design for a mobile interface. Exchange studies at Institut d'Études
          Politiques de Paris in Latin American Studies.
        </p>
        <h3>International Baccalaureate (IB)</h3>
        <span>United World College Costa Rica</span>
        <p>
          International Baccalaureate degree at the United World College Costa
          Rica as the Finnish Cultural Fund fellow and Finnish representative.
          Higher level subjects: Spanish B, Economics, History of the Americas.
          Standard Level: English A1, Mathematical Studies, Environmental
          Systems and Societies. Active member of music events on the campus as
          well as green house activities.
        </p>
        <hr color="gray" align="left" width="100%" />
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
      </S.styledModalFrame>
    </S.styledModal>
  );
}

export default CV;
