import React from 'react';
import PropTypes from 'prop-types';
import css from './Wrapper.module.css';

export const Wrapper = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
