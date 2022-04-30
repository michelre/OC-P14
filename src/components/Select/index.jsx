//@ts-check

import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {String} props.label
 * @param {Array} props.options
 * @param {String} props.selectValue
 * @param {Function} props.setSelectValue
 * @returns {React.ReactElement}
 */
function Select({ label, options, selectValue, setSelectValue }) {
  const [displayOptions, setDisplayOptions] = useState(false)
  const [dropdownContainerSize, setDropdownContainerSize] = useState({
    width: 0,
    height: 0,
  })
  const selectmenuEl = useRef(null)
  const ulEl = useRef(null)
  const [keyPressed, setKeyPressed] = useState(0)

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

  function downHandler({ key }) {
    if (key === 'ArrowDown') {
      setKeyPressed((state) => state + 1)
    }
  }

  const upHandler = ({ key }) => {
    if (key === 'ArrowUp') {
      setKeyPressed((state) => (state >= 1 ? state - 1 : 0))
    }
  }

  useEffect(() => {
    !displayOptions && setKeyPressed(0)
    // ulEl.current.childNodes[keyPressed].focus()
    if (displayOptions) {
      window.addEventListener('keydown', downHandler)
      window.addEventListener('keyup', upHandler)

      return () => {
        window.removeEventListener('keydown', downHandler)
        window.removeEventListener('keyup', upHandler)
      }
    }
  }, [displayOptions, keyPressed, options])

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
        <div
          ref={ulEl}
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
          role="listbox"
          tabIndex={0}
        >
          {options.map((item, index) => {
            return (
              <li
                key={`option-${index.toString()}`}
                className={`item item-id-${index}`}
                id={`${index}`}
                onClick={() => {
                  setSelectValue(item)
                  setDisplayOptions(false)
                }}
              >
                <span tabIndex={1}>{`${item}`}</span>
              </li>
            )
          })}
        </div>
      </div>
    </label>
  )
}

export default Select

Select.propType = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectValue: PropTypes.string,
  setSelectValue: PropTypes.func.isRequired,
}

Select.defaultProps = {
  selectValue: undefined,
}
