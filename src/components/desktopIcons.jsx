import React from "react";
import { Icon, GlobalStyle, ThemeProvider } from "@react95/core";
import IconBox from "./iconBox";
import IconText from "./iconText";

const desktopIcons = (
  <>
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
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
        <IconText>design_ideas.bmp</IconText>
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
    </ThemeProvider>
  </>
);

export default desktopIcons;
