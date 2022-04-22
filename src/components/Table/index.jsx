import { useState } from 'react'
import Rows from './Rows'

function Table(props) {
  const [pageNumber, setPageNumber] = useState(1)

  const page = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
  }

  return (
    <>
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
          <Rows labels={props.labels} data={page(props.data, 10, pageNumber)} />
        </tbody>
      </table>
      <div className={'pagination'}>
        <button onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>
          Previous
        </button>
        <button
          onClick={() =>
            page(props.data, 10, pageNumber).length === 10 &&
            setPageNumber(pageNumber + 1)
          }
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Table
