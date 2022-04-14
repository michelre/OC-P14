import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from '../../components/Form'
import '../../App.css'

function Home() {
  return (
    <React.Fragment>
      <header className="title">
        <h1>HRnet</h1>
      </header>
      <div className="container">
        <NavLink to={'./employee-list'}>View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </React.Fragment>
  )
}

export default Home
