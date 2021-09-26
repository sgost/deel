import React, { useState, useEffect } from "react"
import { NavContainer } from "./styles.js"
import { Link } from "gatsby"

const Nav = () => {
  useEffect(() => {
    window.addEventListener("resize", showButton)

    window.addEventListener("scroll", changeBackground)
    window.addEventListener("scroll", changeBackgrounds)
    return () => {
      window.removeEventListener("resize", showButton)

      window.removeEventListener("scroll", changeBackground)

      window.removeEventListener("scroll", changeBackgrounds)
    }
  }, [])

  const [navbar, setNavbar] = useState(false)
  const [navbars, setNavbars] = useState(false)
  const [button, setButton] = useState()

  const showButton = () => {
    if (window.innerWidth <= -20) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton()
    // eslint-disable-next-line
  }, [])

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const changeBackgrounds = () => {
    if (window.scrollY >= 800) {
      setNavbars(true)
    } else {
      setNavbars(false)
    }
  }

  const [open, setOpen] = useState(false)

  return (
    <NavContainer>
      <div
        id={
          navbar === false
            ? "NavContainer"
            : navbars === true
            ? "NavContainers"
            : "NavContainer2"
        }
      >
        <div id="navLogo">
            <Link to="/" id="logo">
              deel.
            </Link>
        </div>
        <div id="navLNks">
          <div id="navTitle">
            <h1 id="nav_link" onClick={() => setOpen(true)}>
              How it works<div id="span"></div>
            </h1>
            {open ? (
              <div id="nav_matter">
                <Link id="nav_matter_content" to="./hireEmployees">
                  <h1>Hire Employees</h1>
                  <p>Hire Employees abord with our employee service</p>
                </Link>
                <Link id="nav_matter_content" to="./hireEmployees">
                  <h1>Hire Contractors</h1>
                  <p>Hire Employees abord with our employee service</p>
                </Link>
                <Link id="nav_matter_content" to="./payroll">
                  <h1>Run Global Payroll</h1>
                  <p>Hire Employees abord with our employee service</p>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <div id="navTitle">
            <h1 id="nav_link" onClick={() => setOpen(true)}>
              Solutions<div id="span"></div>
            </h1>
            <div id="span"></div>
          </div>
          <div id="navTitle">
            <h1 id="nav_link" onClick={() => setOpen(true)}>
              Resources<div id="span"></div>
            </h1>
            <div id="span"></div>
          </div>
          <Link id="nav_link">Global Hiring Guide</Link>
          <Link id="nav_link">Pricing</Link>
        </div>
        <div id="navBtn">
          <Link id="nav_link">Login</Link>
          <button>Request a demo</button>
        </div>
      </div>
    </NavContainer>
  )
}
export default Nav
