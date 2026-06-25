import React from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'
import EmployeeStats from './EmployeeStats'

const Employees = () => {
  return (
    <div>
      <EmployeeForm/>
      <EmployeeList/>
      <EmployeeStats/>
    </div>
  )
}

export default Employees
