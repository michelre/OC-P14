import Input from '../../lib/Input'
import { useState } from 'react'

function Form() {
  const [firstName, setFirstName] = useState({ value: 'firstName' })

  function handleChange(event) {
    console.log(event)
    setFirstName({ value: event })
  }

  function handleSubmit(event) {
    alert(`Le nom ${firstName.value} a été soumis`)
    event.preventDefault()
  }

  return (
    <form id={'create-employee'} onSubmit={(e) => handleSubmit(e)}>
      <Input
        type={'text'}
        label={'First Name'}
        id={'first-name'}
        value={firstName.value}
        onChange={(e) => handleChange(e)}
      />
      <Input
        type={'text'}
        label={'Last Name'}
        id={'last-name'}
        onChange={Function}
      />
      <Input
        type={'date'}
        label={'Date of birth'}
        id={'date-of-birth'}
        onChange={Function}
      />
      <Input
        type={'date'}
        label={'Start date'}
        id={'start-date'}
        onChange={Function}
      />

      <fieldset>
        <legend>Address</legend>
        <Input
          type={'text'}
          label={'Street'}
          id={'street'}
          onChange={Function}
        />
        <Input type={'text'} label={'City'} id={'city'} onChange={Function} />
      </fieldset>
      <button onClick={(e) => handleSubmit(e)}>Save</button>
    </form>
  )
}

export default Form
