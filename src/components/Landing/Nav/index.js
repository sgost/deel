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

  return (
    <NavContainer>
      <div id={navbar === false ? "NavContainer" : navbars === true ? "NavContainers" : "NavContainer2"}>
        <div id="navLogo">
          <h1>deel.</h1>
        </div>
        <div id="navLNks">
          <div id="navTitle">
            <Link to="/hireEmployees/" id="nav_link">How it works</Link>
            <div id="span"></div>
          </div>
          <div id="navTitle">
            <p>Solutions</p>
            <div id="span"></div>
          </div>
          <div id="navTitle">
            <p>Resources</p>
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
