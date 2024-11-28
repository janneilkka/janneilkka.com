import React from "react";
import { TitleBar } from "@react95/core";
import { Textchat } from "@react95/icons";
import * as S from "./layoutStyling";

function About({ closeAboutModal }) {
  return (
    <S.styledModal
      icon={<Textchat variant="16x16_4" />}
      title={"Welcome.txt"}
      titleBarOptions={[<TitleBar.Close onClick={closeAboutModal} />]}
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h1>Hello!</h1>
        <p>
          I'm Janne, a designer of many talents from Helsinki. I've been working
          lately with product development in many roles and domains: from
          ecommerce, to public sector, to startups. I'm into structured and
          systems oriented software development, where design is agile and
          rapid.
          <br />
          This app, sort of a playground of ideas, has been built with Vite and{" "}
          <a
            href="https://github.com/React95/React95"
            target="_blank"
            rel="noopener noreferrer"
          >
            React95
          </a>
          , an open-source Windows95 component library for React. If you're
          interested in this project even further check out the{" "}
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
      </S.styledModalFrame>
    </S.styledModal>
  );
}

export default About;
