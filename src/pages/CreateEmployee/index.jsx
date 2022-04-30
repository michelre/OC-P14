//@ts-check

import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { EmployeesContext } from '../../utils/context'
import Form from '../../components/Form'
import Header from '../../components/Header'
import Modal from '../../components/Modal'

/**
 *
 * @returns {React.ReactElement}
 */
function CreateEmployee() {
  const { saveEmployee } = useContext(EmployeesContext)
  const states = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ]
  const statesName = states.map((object) => object.name)
  const departments = [
    'Sales',
    'Marketing',
    'Engineering',
    'Human Resource',
    'Legal',
  ]
  const [isOpen, setOpen] = useState(false)
  const [submittedData, setSubmittedData] = useState()

  useEffect(() => {
    if (submittedData !== undefined) {
      saveEmployee(submittedData)
      setOpen(true)
      setSubmittedData(undefined)
    }
  }, [saveEmployee, submittedData])

  return (
    <React.Fragment>
      <Header h1={'HRnet'} class={'title'} />
      <div className="container">
        <NavLink to={'./employees-list'}>View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <Form
          states={statesName}
          departments={departments}
          setSubmitData={setSubmittedData}
        />
        <Modal
          content={'Employee Created!'}
          isOpen={isOpen}
          setOpen={setOpen}
        />
      </div>
    </React.Fragment>
  )
}

export default CreateEmployee
