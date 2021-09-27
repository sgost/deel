import React, { useState } from "react"
import { Link } from "gatsby"
import { NavMatter, NavMatter2 } from "./styles.js"
import { RightOutlined } from "@ant-design/icons"

const PopOver2 = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <NavMatter2>
      <div id="nav_matter_block1">
        <div id="nav_matter_block1_content">
          <h1 onClick={() => toggleTab(1)}>
            Use Cases
            <RightOutlined className="icon" />
          </h1>
          <h1 onClick={() => toggleTab(2)}>
            Roles
            <RightOutlined className="icon" />
          </h1>
          <h1 onClick={() => toggleTab(2)}>
            Business Size
            <RightOutlined className="icon" />
          </h1>
        </div>
      </div>
      <div id={toggleState === 1 ? "nav_matter_block2" : "none"}>
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
      </div>
      <div id={toggleState === 2 ? "nav_matter_block2" : "none"}>
        <Link id="nav_matter_content" to="./hireEmployees">
          <p1>Hire</p1>
          <p>Hire abord with our employee service</p>
        </Link>
        <Link id="nav_matter_content" to="./hireEmployees">
          <p1>Hire Contractors</p1>
          <p>Hire abord with our employee service</p>
        </Link>
        <Link id="nav_matter_content" to="./payroll">
          <p1>Run Global Payroll</p1>
          <p>Hire abord with our employee service</p>
        </Link>
      </div>
    </NavMatter2>
  )
}
export default PopOver2
