import React from 'react'
import { NavLink } from 'react-router-dom'
import Table from '../../components/Table'
import { EmployeesContext } from '../../utils/context'
import data from '../../mocks'

function EmployeeList() {
  const labels = data.labels
  const { employees } = React.useContext(EmployeesContext)
  console.log(employees)
  return (
    <div id="employee" className="container">
      <h1>Current Employees</h1>
      <Table
        id="employee-table"
        className="display"
        data={employees}
        labels={labels}
      />
      <NavLink to={'/'}>Home</NavLink>
    </div>
  )
}

export default EmployeeList
