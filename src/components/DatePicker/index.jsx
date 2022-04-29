import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import fr from 'date-fns/locale/fr'

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
