import React, { useState } from 'react'
import data from '../../mocks'

export const EmployeesContext = React.createContext()

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState(data.employees)
  const saveEmployees = (newEmployees) => {
    setEmployees({ ...employees, ...newEmployees })
  }

  return (
    <EmployeesContext.Provider value={{ employees, saveEmployees }}>
      {children}
    </EmployeesContext.Provider>
  )
}
