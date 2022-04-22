import { useEffect, useState } from 'react'
import Input from '../Input'
import Select from '../Select'

function Form({ states, departments, setSubmitData, setSubmit }) {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [dateOfBirth, setDateOfBirth] = useState()
  const [startDate, setStartDate] = useState()
  const [department, setDepartment] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zipCode, setZipCode] = useState()
  const [isValidForm, setValidForm] = useState()

  useEffect(() => {
    console.log(isValidForm)
    const inputs = document.getElementsByTagName('input')
    const arrayFromInputs = [...inputs]
    arrayFromInputs.forEach((element) => {
      if (element.required === true) {
        if (element.validity.patternMismatch !== false) {
          setValidForm(false)
        } else {
          setValidForm(true)
        }
      }
    })
  }, [setValidForm, isValidForm])

  function invalidMessage(target) {
    const span = document.createElement('span')
    span.classList.add('invalid')
    span.textContent = target.parentNode.textContent + ' est invalide'
    target.validity.patternMismatch !== false
      ? target.after(span)
      : target.parentNode.querySelector('span')?.remove()
  }

  function handleChange(target, id) {
    switch (id) {
      case 'firstName':
        setFirstName(target.value)
        invalidMessage(target)
        break
      case 'lastName':
        setLastName(target.value)
        invalidMessage(target)
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
      case 'state':
        setState(target.value)
        break
      case 'zipCode':
        setZipCode(target.value)
        break
      case 'department':
        setDepartment(target.value)
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

    if (isValidForm) {
      setSubmit(true)
      setSubmitData(newEmployee)
    }
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
        pattern={"([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}"}
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
        />
        <Input
          type={'text'}
          label={'City'}
          id={'city'}
          onChange={(e) => handleChange(e, 'city')}
        />
        <Select
          name={'State'}
          options={states}
          onChange={(e) => handleChange(e, 'state')}
        />
        <Input
          type={'number'}
          label={'Zip code'}
          id={'zipCode'}
          onChange={(e) => handleChange(e, 'zipCode')}
          pattern={'[0-9]{5}'}
          min={0}
          max={99999}
        />
      </fieldset>
      <div>
        <Select
          name={'Department'}
          options={departments}
          onChange={(e) => handleChange(e, 'department')}
        />
      </div>
      <div className="submitContainer">
        <button onClick={(e) => handleSubmit(e)}>Save</button>
      </div>
    </form>
  )
}

export default Form
