import React from 'react'
import { NavLink } from 'react-router-dom'
import Table from '../../components/Table'
import { EmployeesContext } from '../../utils/context'
import data from '../../mocks'

function EmployeesList() {
  const labels = data.labels
  const { employees } = React.useContext(EmployeesContext)

  return (
    <div id="employees" className="container">
      <h1>Current Employees</h1>
      <Table
        id="employee-table"
        className="display"
        data={employees}
        labels={labels}
      />
      <nav>
        <NavLink to={'/'}>Home</NavLink>
      </nav>
    </div>
  )
}

export default EmployeesList
