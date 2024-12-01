import React from "react";
import { TitleBar, ProgressBar } from "@react95/core";
import { Shell3236 } from "@react95/icons";
import * as S from "./layoutStyling";

function Skills({ closeSkillsModal }) {
  return (
    <S.styledModal
      className="styledModal"
      title={"Skills.txt"}
      titleBarOptions={[
        <S.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={closeSkillsModal} key="close" />,
      ]}
      icon={<Shell3236 variant="16x16_4" />}
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h1>Some of my skills</h1>
        <p>
          I descibe myself as a generalist. I have come across a multiple
          different tasks and duties and learned a whole bunch of different
          areas in the design industry. However, I disagree with quantifying
          skills as numbers; percentages, units etc. - are skills really
          something people can measure? However, here is a rough estimate of
          some of my skills, in progress bar style.
        </p>
        <hr color="gray" align="left" width="100%" />
        <h2>Design tools</h2>
        <h4>Figma, Sketch</h4>
        <ProgressBar width={250} percent={95} />
        <h4>Adobe CC</h4>
        <ProgressBar width={250} percent={85} />
        <h4>Design systems</h4>
        <ProgressBar width={250} percent={85} />
        <h4>Prototyping, wireframing, user flows</h4>
        <ProgressBar width={250} percent={80} />
        <h4>Usability testing, interviewing, user research</h4>
        <ProgressBar width={250} percent={80} />
        <h4>WCAG, accessibility testing</h4>
        <ProgressBar width={250} percent={80} />
        <h4>Analytics</h4>
        <ProgressBar width={250} percent={70} />
        <div style={{ margin: "8px" }} />
        <hr color="gray" align="left" width="100%" />
        <h2>Dev tools</h2>
        <h4>Storybook(JS)</h4>
        <ProgressBar width={250} percent={75} />
        <h4>HTML, CSS, SASS</h4>
        <ProgressBar width={250} percent={75} />
        <h4>Wordpress (PHP/Themes)</h4>
        <ProgressBar width={250} percent={70} />
        <h4>Git</h4>
        <ProgressBar width={250} percent={70} />
        <h4>React</h4>
        <ProgressBar width={250} percent={45} />
        <h4>Vue</h4>
        <ProgressBar width={250} percent={15} />
        <div style={{ margin: "8px" }} />
        <hr color="gray" align="left" width="100%" />
        <h2>Other Skills</h2>
        <ul>
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
        </ul>
      </S.styledModalFrame>
    </S.styledModal>
  );
}

export default Skills;
