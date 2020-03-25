import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherFormInputProps }) => {
  return (
    <div className="form-input">
      <input
        onChange={handleChange}
        {...otherFormInputProps}
      />
      {
        label ? (
          <label
            className={`${
              otherFormInputProps.value.length ? 'shrink' : ''
              } form-input-label`}
          > {label} </label>
        ) : null
      }
    </div>
  )
}

export default FormInput;