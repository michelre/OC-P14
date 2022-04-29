function ListItem({ item, active, setSelected, setHovered }) {
  console.log(active)
  return (
    <li
      className={`item ${active ? 'active' : ''}`}
      onClick={() => setSelected(item)}
      onMouseEnter={() => setHovered(item)}
      onMouseLeave={() => setHovered(undefined)}
    >
      <span>{`${item}`}</span>
    </li>
  )
}

export default ListItem
