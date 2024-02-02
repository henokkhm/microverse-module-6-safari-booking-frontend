import React from 'react';
import PropTypes from 'prop-types';

const NovaFormInput = (props) => {
  const {
    cType, cId, cPlaceholder, isRequired, cMinLen, cMaxLen, onChange,
  } = props;
  return (
    <div className="relative w-full">
      <input
        type={cType}
        id={cId}
        name={cId}
        required={isRequired}
        placeholder={cPlaceholder}
        minLength={cMinLen}
        maxLength={cMaxLen}
        className="peer opacity-90"
        onChange={onChange}
      />
      <label
        htmlFor={cId}
        className="float__lbl"
      >
        {cPlaceholder}
      </label>
    </div>
  );
};

NovaFormInput.defaultProps = {
  cType: 'text',
  cMinLen: null,
  cMaxLen: null,
  onChange: () => {},
};

NovaFormInput.propTypes = {
  cType: PropTypes.string,
  cId: PropTypes.string.isRequired,
  cPlaceholder: PropTypes.string.isRequired,
  cMinLen: PropTypes.string,
  cMaxLen: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default NovaFormInput;
