import React from 'react'
import '../../App.css'

function Input({ type, label, id, onChange, required, pattern, min, max }) {
  return (
    <div className={label?.replaceAll(' ', '').toLowerCase()}>
      {label && (
        <label>
          {label}
          <input
            type={type}
            id={id}
            pattern={pattern}
            onChange={(e) => onChange && onChange(e.target)}
            min={min}
            max={max}
            required={required}
          />
        </label>
      )}
    </div>
  )
}

export default Input
