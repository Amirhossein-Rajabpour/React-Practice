import React from 'react';
import s from './screen.module.css';
import PropTypes from 'prop-types';

export default function Screen({ text }) {
  return <div className={s.screen}>{text}</div>;
}

Screen.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Screen.defaultProps = {
  text: 0,
};
