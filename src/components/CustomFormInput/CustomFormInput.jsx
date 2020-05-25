import React from 'react';

import './CustomFormInput.scss';

const CustomFormInput = ({ handleChange, label, ...otherCustomFormInputProps }) => (
  <div className="custom-form-input">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherCustomFormInputProps}
    />
    {
      label ? (
        <label
          className={`${
            otherCustomFormInputProps.value.length ? 'shrink' : ''
            } form-input-label`}
        > {label} </label>
      ) : null
    }
  </div>
);

export default CustomFormInput;