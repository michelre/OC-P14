import React from 'react'
import '../../App.css'

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
