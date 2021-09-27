import React from "react"
import { Link } from "gatsby"
import { NavMatter } from "./styles.js"

const PopOver = () => {
  return (
    <NavMatter>
      <Link id="nav_matter_content" to="./hireEmployees">
        <p1>Hire Employees</p1>
        <p>Hire Employees abord with our employee service</p>
      </Link>
      <Link id="nav_matter_content" to="./hireEmployees">
        <p1>Hire Contractors</p1>
        <p>Hire Employees abord with our employee service</p>
      </Link>
      <Link id="nav_matter_content" to="./payroll">
        <p1>Run Global Payroll</p1>
        <p>Hire Employees abord with our employee service</p>
      </Link>
    </NavMatter>
  )
}
export default PopOver
