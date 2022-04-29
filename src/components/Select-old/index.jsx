import { useState, useEffect, useRef } from 'react'
import { useKeyPress } from './hook'
import ListItem from './ListItem'

function Select({ label, options, selected, setSelected }) {
  const downPress = useKeyPress('ArrowDown')
  const upPress = useKeyPress('ArrowUp')
  const enterPress = useKeyPress('Enter')
  const [cursor, setCursor] = useState(0)
  const [hovered, setHovered] = useState(undefined)
  const selectmenuEl = useRef(null)
  const [displayOptions, setDisplayOptions] = useState(false)
  const [dropdownContainerSize, setDropdownContainerSize] = useState({
    width: 0,
    height: 0,
  })

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

  useEffect(() => {
    if (options.length && downPress) {
      setCursor((prevState) =>
        prevState < options.length - 1 ? prevState + 1 : prevState
      )
    }
  }, [downPress, options.length])
  useEffect(() => {
    if (options.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }
  }, [options.length, upPress])
  useEffect(() => {
    if (options.length && enterPress) {
      setSelected(options[cursor])
    }
  }, [cursor, enterPress, options, setSelected])
  useEffect(() => {
    if (options.length && hovered) {
      setCursor(options.indexOf(hovered))
    }
  }, [hovered, options])

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
          <span>{selected === undefined ? label : selected}</span>
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
          {options.map((item, index, i) => (
            <ListItem
              key={`option${index.toString()}-${item.toString()}`}
              item={item}
              active={i === cursor}
              setSelected={setSelected}
              setHovered={setHovered}
            />
          ))}
        </ul>
      </div>
    </label>
  )
}

export default Select
