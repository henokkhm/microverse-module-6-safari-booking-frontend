import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ label, value }) => (
  <>
    <div>
      <div className="text-xs font-bold text-gray-400">{label}</div>
      <div className="mt-2 font-bold">{value}</div>
    </div>
  </>
);

Column.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Column;
