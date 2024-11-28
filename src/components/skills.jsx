import React from "react";
import { TitleBar, ProgressBar } from "@react95/core";
import { Mspaint } from "@react95/icons";
import * as S from "./layoutStyling";

function Skills({ closeSkillsModal }) {
  return (
    <S.styledModal
      className="styledModal"
      title={"Skills.txt"}
      titleBarOptions={[
        <S.styledModal.Minimize />,
        <TitleBar.Close onClick={closeSkillsModal} />,
      ]}
      icon={<Mspaint variant="16x16_4" />}
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h1>Some of my skills</h1>
        <p>
          I disagree with quantifying skills with numbers, percentages etc. -
          are skills really something people can measure? However, here is a
          rough estimate of my latest skills.
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
      </S.styledModalFrame>
    </S.styledModal>
  );
}

export default Skills;
