import { useContext, useEffect, useState } from 'react'
import { EmployeesContext } from '../../utils/context'
import Input from '../Input'
import Select from '../Select'

function Form({ states, departments, isValidForm, setValidForm }) {
  const { saveEmployee } = useContext(EmployeesContext)
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [dateOfBirth, setDateOfBirth] = useState()
  const [startDate, setStartDate] = useState()
  const [department, setDepartment] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zipCode, setZipCode] = useState()
  const [validity, setValidity] = useState(false)

  function setErrorMessageInput(target) {
    const span = document.createElement('span')
    span.classList.add('invalid')
    if (
      !target.validity.valid &&
      target.parentNode.querySelector('span') === null
    ) {
      target.classList.add('invalid')
      span.textContent = `Invalid ${target.parentNode.textContent}`
      target.after(span)
    }
    if (
      target.validity.valid &&
      target.parentNode.querySelector('span') !== null
    ) {
      target.classList.remove('invalid')
      target.parentNode.querySelector('span').remove()
    }
  }

  useEffect(() => {
    const inputs = document.getElementsByTagName('input')
    const arrayFromInputs = [...inputs]
    if (
      arrayFromInputs.find((element) => element.validity.valid === false) !==
      undefined
    ) {
      setValidity(false)
    } else {
      setValidity(true)
    }
  }, [])

  function handleChange(target, id) {
    switch (id) {
      case 'firstName':
        setFirstName(target.value)
        setErrorMessageInput(target)
        break
      case 'lastName':
        setLastName(target.value)
        setErrorMessageInput(target)
        break
      case 'dateOfBirth':
        setDateOfBirth(target.value)
        break
      case 'startDate':
        setStartDate(target.value)
        break
      case 'street':
        setStreet(target.value)
        setErrorMessageInput(target)
        break
      case 'city':
        setCity(target.value)
        setErrorMessageInput(target)
        break
      case 'state':
        setState(target.value)
        setErrorMessageInput(target)
        break
      case 'zipCode':
        setZipCode(target.value)
        setErrorMessageInput(target)
        break
      case 'department':
        setDepartment(target.value)
        setErrorMessageInput(target)
        break
      default:
        break
    }
  }

  function handleSubmit(event) {
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      startDate: startDate,
      department: department,
      dateOfBirth: dateOfBirth,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    }
    validity ? setValidForm(true) : alert('Invalid form!')
    isValidForm && saveEmployee(newEmployee)
    event.preventDefault()
  }

  return (
    <form id={'create-employee'} onSubmit={(e) => handleSubmit(e)}>
      <Input
        type={'text'}
        label={'First Name'}
        id={'firstName'}
        value={firstName}
        onChange={(e) => handleChange(e, 'firstName')}
        required={true}
      />
      <Input
        type={'text'}
        label={'Last Name'}
        id={'lastName'}
        value={lastName}
        onChange={(e) => handleChange(e, 'lastName')}
        required={true}
      />
      <Input
        type={'date'}
        label={'Date of birth'}
        id={'dateOfBirth'}
        value={dateOfBirth}
        onChange={(e) => handleChange(e, 'dateOfBirth')}
        required={true}
      />
      <Input
        type={'date'}
        label={'Start date'}
        id={'startDate'}
        value={startDate}
        onChange={(e) => handleChange(e, 'startDate')}
      />

      <fieldset>
        <legend>Address</legend>
        <Input
          type={'text'}
          label={'Street'}
          id={'street'}
          onChange={(e) => handleChange(e, 'street')}
          required={true}
        />
        <Input
          type={'text'}
          label={'City'}
          id={'city'}
          onChange={(e) => handleChange(e, 'city')}
          required={true}
        />
        <Select
          name={'State'}
          options={states}
          onChange={(e) => handleChange(e, 'state')}
          required={true}
        />
        <Input
          type={'number'}
          label={'Zip code'}
          id={'zipCode'}
          onChange={(e) => handleChange(e, 'zipCode')}
          required={true}
        />
      </fieldset>
      <div>
        <Select
          name={'Department'}
          options={departments}
          onChange={(e) => handleChange(e, 'department')}
          required={true}
        />
      </div>
      <button onClick={(e) => handleSubmit(e)}>Save</button>
    </form>
  )
}

export default Form
