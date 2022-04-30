//@ts-check

import React from 'react'
import PropTypes from 'prop-types'
/**
 *
 * @param {Object} props
 * @param {String} props.type
 * @param {String} props.label
 * @param {String} props.id
 * @param {Function} props.onChange
 * @returns {React.ReactElement}
 */
function Input({ type, label, id, onChange }) {
  return (
    <div className={label?.replaceAll(' ', '').toLowerCase()}>
      {label && (
        <label>
          {label}
          <input
            type={type}
            id={id}
            onChange={(e) => onChange && onChange(e.target)}
          />
        </label>
      )}
    </div>
  )
}

export default Input

Input.propType = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
