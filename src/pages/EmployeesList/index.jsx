import { NavLink } from 'react-router-dom'
import Table from '../../components/Table'
function EmployeeList() {
  const data = {
    labels: [
      'First Name',
      'Last Name',
      'Start Date',
      'Department',
      'Date of Birth',
      'Street',
      'City',
      'State',
      'Zip Code',
    ],
    employees: [
      {
        firstName: 'John',
        lastName: 'Doe',
        startDate: '01/01/22',
        department: 'Aude',
        dateOfBirth: '01/01/80',
        street: '1 rue Larue',
        city: 'Nice',
        state: 'France',
        zipCode: '06000',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        startDate: '01/01/22',
        department: 'Loire',
        dateOfBirth: '01/01/81',
        street: '1 rue Marue',
        city: 'Paris',
        state: 'France',
        zipCode: '75000',
      },
    ],
  }

  const employees = data.employees
  const labels = data.labels

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
