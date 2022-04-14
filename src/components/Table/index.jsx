import Rows from '../Rows'

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          {props.labels.map((item, index) => (
            <th key={index} scope="col" colSpan="1">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <Rows labels={props.labels} data={props.data} />
      </tbody>
    </table>
  )
}

export default Table
