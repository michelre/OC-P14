import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from '../../components/Form'
import Header from '../../components/Header'
import '../../App.css'

function Home() {
  return (
    <React.Fragment>
      <Header h1={'HRnet'} class={'title'} />
      <div className="container">
        <NavLink to={'./employee-list'}>View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </React.Fragment>
  )
}

export default Home
