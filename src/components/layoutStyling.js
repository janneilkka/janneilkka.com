import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Modal, Frame } from "@react95/core";

export const layoutWrapper = styled.section``;

export const layoutMain = styled(Modal)`
  display: flex;
  margin: 0 10rem 10rem 10rem;
  width: 80vh;
  ${media.lessThan("medium")`
    flex-direction: column;
    margin: 1rem 1rem 0 0.5rem;
    top: 0;
    width: fill-available;
  `}
  ${(props) =>
    props.isMobile &&
    css`
      top: 0;
    `}
`;

export const layoutMainContent = styled(Frame)`
  overflow-y: auto;
  max-height: 70vh;
  margin: auto;
  ${media.lessThan("large")`
  max-height: 70vh;
  `}
`;

export const textModal = styled(Frame)`
  background: #fff;
  boxshadow: in;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
`;
