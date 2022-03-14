import React from "react";
import styled from "styled-components";
import { Modal, Frame, List } from "@react95/core";
import { Awfxcg321303 } from "@react95/icons";
import * as S from "./layoutStyling";

function CV({ closeCV, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"CV.txt"}
      closeModal={closeCV}
      height="100%"
      icon={<Awfxcg321303 variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeCV}>Close</List.Item>
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
              UX/UI design, design systems, usability and user-centered design.
              These are some of the keywords that describe my interests and
              know-how. I have a long work history in communication and
              user-centered design. With my futuristic and social mind, I shine
              in duties where I get to use my social skills and design talents
              in practice.
            </p>
            <h2>Latest Work History</h2>
            <h3>UX Designer - S-group </h3>
            <p>
              Developing a new <a href="https://sokos.fi">Sokos.fi</a> webstore
              and driving user-centric design within the community. Alongside
              Sokos development, participating in internal design system
              development and internal design processes.
            </p>
            <h3>UX/UI Designer - Solidabis Oy </h3>
            <p>
              Design and UX consultant work focusing on the public sector
              clients and design systems. One of the biggest achievements was a
              Storybook-based styleguide which I coded, designed and made from
              scratch as a one person team with minimal budget. Part-time
              managing Solidabis marketing strategy, during which I single
              handedly redesigned and redeveloped{" "}
              <a href="https://solidabis.com">
                Solidabis' Wordpress-based website
              </a>{" "}
              using the Genesis framework and coding a custom theme on PHP, CSS
              and HTML.
            </p>
            <h3>Junior UX/UI Designer - IBM </h3>
            <p>
              UI development, front-end collaboration, visual and graphic
              design. Client cooperation and usability assessments of
              implemented products daily. One of the greatest accomplishments
              was to get my team to use the{" "}
              <a href="https://carbondesignsystem.com">Carbon design system</a>,
              therefore increasing consistency and scaling with demos.
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
          </div>
        </Frame>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default CV;
