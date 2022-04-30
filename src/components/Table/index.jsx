//@ts-check

import { useState } from 'react'
import Rows from './Rows'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {String} props.id
 * @param {Array} props.data
 * @param {Array} props.labels
 * @param {Number} props.numberOfItemsByPage
 * @returns {React.ReactElement}
 */
function Table({ id, data, labels, numberOfItemsByPage }) {
  const [pageNumber, setPageNumber] = useState(1)

  function page(
    /** @type {string | any[]} */ array,
    /** @type {number} */ pageSize,
    /** @type {number} */ pageNumber
  ) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            {labels.map((item, index) => (
              <th key={index} scope="col" colSpan={1}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Rows data={page(data, numberOfItemsByPage, pageNumber)} />
        </tbody>
      </table>
      <div className={'pagination'}>
        <button onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>
          Previous
        </button>
        <button
          onClick={() =>
            page(data, numberOfItemsByPage, pageNumber).length ===
              numberOfItemsByPage && setPageNumber(pageNumber + 1)
          }
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Table

Table.propType = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
}
