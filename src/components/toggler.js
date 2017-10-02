/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Toggler = (props) => {
  return (
    <span
      className={`toggler ${props.isOpened && 'isClosed'}`}
    />
  );
};

Toggler.propTypes = {
  isOpened: PropTypes.bool.isRequired
};
export default Toggler;
