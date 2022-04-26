import { useState } from 'react'
import Input from '../Input'
import Select from '../Select'

function Form({ states, departments, setSubmitData }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState()
  const [startDate, setStartDate] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [zipCode, setZipCode] = useState()
  const [selectValueState, setSelectValueState] = useState()
  const [selectValueDepartment, setSelectValueDepartment] = useState()

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
      startDate: startDate,
      department: selectValueDepartment,
      dateOfBirth: dateOfBirth,
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
        value={firstName}
        onChange={(e) => handleChange(e, 'firstName')}
      />
      <Input
        type={'text'}
        label={'Last Name'}
        id={'lastName'}
        value={lastName}
        onChange={(e) => handleChange(e, 'lastName')}
      />
      <Input
        type={'date'}
        label={'Date of birth'}
        id={'dateOfBirth'}
        value={dateOfBirth}
        onChange={(e) => handleChange(e, 'dateOfBirth')}
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
          pattern={'[0-9]{5}'}
          min={0}
          max={99999}
        />
      </fieldset>
      <div>
        <Select
          label={'Department'}
          options={departments}
          setSelectValue={setSelectValueDepartment}
          selectValue={selectValueDepartment}
        />
      </div>
      <div className="submitContainer">
        <button onClick={(e) => handleSubmit(e)}>Save</button>
      </div>
    </form>
  )
}

export default Form
