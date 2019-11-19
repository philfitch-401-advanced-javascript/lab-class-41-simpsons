import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ load }) => (
  <button onClick={load}>Load</button>
);

Load.propTypes = {
  load: PropTypes.func.isRequired
};

export default Load;
