function Select({ name, options, onChange }) {
  return (
    <label>
      {name}
      <select
        name={name}
        id={name}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index + option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select
