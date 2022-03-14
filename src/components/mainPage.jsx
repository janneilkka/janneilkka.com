import React from "react";

import PropTypes from "prop-types";

import Box from "./desktopBox";

const PageProps = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
};
const Background = {
  backgroundColor: "#deabcc",
};

const Page = ({ children, description = null, title = "Janne Koivisto" }) => (
  <>
    <body style={Background}>
      <Box as="main">{children}</Box>
    </body>
  </>
);

Page.propTypes = PageProps;

export default Page;
