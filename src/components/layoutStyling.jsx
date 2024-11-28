import styled from "styled-components";
import { Modal } from "@react95/core";

const breakpoints = {
  mobile: "325px",
  tablet: "768px",
  laptop: "1024px",
};

export const device = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
};

export const styledModal = styled(Modal)`
  max-height: 80vh;
  @media ${device.mobile} {
    margin: 5px;
    top: 0;
  }
  @media ${device.tablet} {
    max-width: 600px;
    left: 80px;
    top: 80px;
  }
`;

export const styledModalFrame = styled(Modal.Content)`
  padding: 16px;
  overflow-y: auto;
`;
