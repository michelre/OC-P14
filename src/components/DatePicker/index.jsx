//@ts-check

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import fr from 'date-fns/locale/fr'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {String} props.label
 * @param {String} props.id
 * @param {Date} props.startDate
 * @param {Function} props.setStartDate
 * @returns {React.ReactElement}
 */
function DatePickerApp({ label, id, startDate, setStartDate }) {
  return (
    <div className={`datepicker ${id}`}>
      <label htmlFor={id}>
        {label}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          locale={fr}
          name={'Date of Birth'}
          id={id}
        />
      </label>
    </div>
  )
}

export default DatePickerApp

DatePickerApp.propType = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
  setStartDate: PropTypes.func.isRequired,
}
