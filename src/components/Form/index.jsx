//@ts-check

import { useState } from 'react'
import Input from '../Input'
import Select from '../Select'
import DatePickerApp from '../DatePicker'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {Array} props.states
 * @param {Array} props.departments
 * @param {Function} props.setSubmitData
 * @returns {React.ReactElement}
 */

function Form({ states, departments, setSubmitData }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [zipCode, setZipCode] = useState()
  const [selectValueState, setSelectValueState] = useState()
  const [selectValueDepartment, setSelectValueDepartment] = useState()

  const dateFormat = (/** @type {Date} */ date) =>
    `${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${
      date.getMonth() < 10 ? '0' : ''
    }${date.getMonth() + 1}/${date.getFullYear()}`

  function setInvalidClass(target) {
    if (target.value.length <= 1 && target.className !== 'invalid') {
      target.classList.add('invalid')
    } else {
      target.classList.remove('invalid')
    }
  }

  function handleChange(target, id) {
    switch (id) {
      case 'firstName':
        setFirstName(target.value)
        setInvalidClass(target)
        break
      case 'lastName':
        setLastName(target.value)
        setInvalidClass(target)
        break
      case 'dateOfBirth':
        setDateOfBirth(target.value)
        break
      case 'startDate':
        setStartDate(target.value)
        break
      case 'street':
        setStreet(target.value)
        break
      case 'city':
        setCity(target.value)
        break
      case 'zipCode':
        setZipCode(target.value)
        break
      default:
        break
    }
  }

  function handleSubmit(event) {
    const regexName = new RegExp('[a-zA-Z_ -s\\p{latin}]{2,}$', 'g')
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      startDate: dateFormat(startDate),
      department: selectValueDepartment,
      dateOfBirth: dateFormat(dateOfBirth),
      street: street,
      city: city,
      state: selectValueState,
      zipCode: zipCode,
    }

    if (
      regexName.test(firstName) === true &&
      firstName.length > 1 &&
      regexName.test(lastName) === true &&
      lastName.length > 1
    ) {
      setSubmitData(newEmployee)
    } else {
      alert('Formulaire invalide ou incomplet!')
    }
    event.preventDefault()
  }

  return (
    <form id={'create-employee'} onSubmit={(e) => handleSubmit(e)}>
      <Input
        type={'text'}
        label={'First Name'}
        id={'firstName'}
        onChange={(e) => handleChange(e, 'firstName')}
      />
      <Input
        type={'text'}
        label={'Last Name'}
        id={'lastName'}
        onChange={(e) => handleChange(e, 'lastName')}
      />

      <DatePickerApp
        label={'Date of Birth'}
        id="date-of-birth"
        startDate={dateOfBirth}
        setStartDate={setDateOfBirth}
      />

      <DatePickerApp
        label={'Start Date'}
        id="start-date"
        startDate={startDate}
        setStartDate={setStartDate}
      />

      <fieldset>
        <legend>Address</legend>
        <Input
          type={'text'}
          label={'Street'}
          id={'street'}
          onChange={(e) => handleChange(e, 'street')}
        />
        <Input
          type={'text'}
          label={'City'}
          id={'city'}
          onChange={(e) => handleChange(e, 'city')}
        />
        <Select
          label={'State'}
          options={states}
          setSelectValue={setSelectValueState}
          selectValue={selectValueState}
        />
        <Input
          type={'number'}
          label={'Zip code'}
          id={'zipCode'}
          onChange={(e) => handleChange(e, 'zipCode')}
          // @ts-ignore
          min={0}
          max={99999}
        />
      </fieldset>
      <div>
        <Select
          label={'Department'}
          options={departments}
          // @ts-ignore
          setSelected={setSelectValueDepartment}
          selected={selectValueDepartment}
        />
      </div>
      <div className="submitContainer">
        <button onClick={(e) => handleSubmit(e)}>Save</button>
      </div>
    </form>
  )
}

export default Form

Form.propType = {
  states: PropTypes.array.isRequired,
  departments: PropTypes.array.isRequired,
  setSubmitData: PropTypes.func.isRequired,
}
