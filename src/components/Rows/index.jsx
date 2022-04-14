function Rows(props) {
  return (
    <>
      {props.data.map((object, index) => (
        <tr key={index} id={`row-${index}`}>
          {Object.entries(object).map((el, index) => (
            <td key={index} data-label={el[0]}>
              {el[1]}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export default Rows
