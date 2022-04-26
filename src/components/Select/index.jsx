import { useState, useRef } from 'react'

function Select({ label, options, selectValue, setSelectValue }) {
  const [displayOptions, setDisplayOptions] = useState(false)
  const [dropdownContainerSize, setDropdownContainerSize] = useState({
    width: 0,
    height: 0,
  })
  const selectmenuEl = useRef(null)

  function handleClick(ref, event) {
    setDropdownContainerSize((state) => ({
      ...state,
      width: ref.current.clientWidth,
    }))
    setDropdownContainerSize((state) => ({
      ...state,
      height: ref.current.clientHeight,
    }))
    displayOptions ? setDisplayOptions(false) : setDisplayOptions(true)
    event.preventDefault()
  }

  return (
    <label>
      {label}
      <div ref={selectmenuEl} className="selectmenu">
        <div
          className={`selectmenu-text ${
            displayOptions ? 'borderBottomNone' : ''
          }`}
          tabIndex={0}
          onClick={(e) => handleClick(selectmenuEl, e)}
          onKeyPress={(e) => handleClick(selectmenuEl, e)}
        >
          <span>{selectValue === undefined ? label : selectValue}</span>
          <span
            className={`selectmenu-arrow ${displayOptions ? 'up' : 'down'}`}
          ></span>
        </div>
        <ul
          className={`selectmenu ${displayOptions ? 'open' : ''}`}
          aria-hidden={displayOptions}
          aria-disabled={false}
          style={
            displayOptions
              ? {
                  width: selectmenuEl.current.clientWidth + 'px',
                  marginTop: dropdownContainerSize.height + 1,
                }
              : { display: 'none' }
          }
          tabIndex={0}
          role={'listbox'}
        >
          {options.map((item, index) => {
            return (
              <li
                key={`option-${index.toString()}`}
                className={`item item-id-${index}`}
                onClick={() => {
                  setSelectValue(item)
                  setDisplayOptions(false)
                }}
              >
                <span
                  tabIndex={-1}
                  role={'option'}
                  aria-selected
                >{`${item}`}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </label>
  )
}

export default Select
