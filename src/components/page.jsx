import React from 'react';

import PropTypes from 'prop-types';

import Box from './box';

const PageProps = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
};

const Page = ({ children, description = null, title = 'Janne Koivisto' }) => (
  <>
    <Box as="main">{children}</Box>
  </>
);

Page.propTypes = PageProps;

export default Page;
