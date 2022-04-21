import React from 'react'
import '../../App.css'

function Input({ type, label, id, onChange, required }) {
  let pattern,
    min,
    max = ''

  switch (type) {
    case 'number':
      pattern = '[0-9]{5}'
      min = '0'
      max = '99999'
      break

    case 'text':
      pattern = '[A-Za-z\\s]{2,}'
      break

    default:
      break
  }

  return (
    <div>
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
