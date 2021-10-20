import React, { useState, useEffect } from "react"
import { NavContainer } from "./styles.js"
import { Link } from "gatsby"
import { Popover } from "antd"
import PopOver from "./PopoverContent"
import PopOver2 from "./PopOverContent2"

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

  console.log(button)

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

  // const [open, setOpen] = useState(false)

  const overlayInnerStyle = {
    backgroundColor: `red`,
    width: `500px`,
  }
  const overlay = {
    backgroundColor: `green`,
    width: `500px`,
  }
  const id = {
    backgroundColor: `green`,
    width: `500px`,
  }

  //Nav NavContainer

  const HowItWorks = [
    {
      "title": "Hire Employees",
      "link": "/hireEmployees/",
      "description": "Hire Employees abord with our employee service",
    },
    {
      "title": "Hire Contractors",
      "link": "/hireEmployees/",
      "description": "Hire Employees abord with our employee service",
    },
    {
      "title": "Run Global Payroll",
      "link": "/payroll/",
      "description": "Hire Employees abord with our employee service",
    },
  ]
  const HowItWorksResources = [
    {
      "title": "About",
      "link": "/about/",
      "description": "Learn more about our company and team",
    },
    {
      "title": "Blog",
      "link": "/blog/",
      "description": "Official Blog Deel",
    },
    {
      "title": "Run Global Payroll",
      "link": "/payroll/",
      "description": "Hire Employees abord with our employee service",
    },
  ]

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
            <Popover
              placement="bottomLeft"
              trigger="click"
              content={<PopOver HowItWorks={HowItWorks} />}
              id={id}
              overlay={overlay}
              overlayInnerStyle={overlayInnerStyle}
            >
              <h1 id="nav_link">
                How it works<div id="span"></div>
              </h1>
            </Popover>
          </div>
          <div id="navTitle">
            <Popover
              placement="bottomLeft"
              trigger="click"
              content={PopOver2}
              id={id}
              overlay={overlay}
              overlayInnerStyle={overlayInnerStyle}
            >
              <h1 id="nav_link">
                Solutions<div id="span"></div>
              </h1>
            </Popover>
            <div id="span"></div>
          </div>
          <div id="navTitle">
            <Link to="/blog" id="nav_link">
              Resources
            </Link>
            {/* <Popover
              placement="bottomLeft"
              trigger="click"
              content={<PopOver HowItWorks={HowItWorksResources} />}
              id={id}
              overlay={overlay}
              overlayInnerStyle={overlayInnerStyle}
            >
              <h1 id="nav_link">
              Resources<div id="span"></div>
              </h1>
            </Popover> */}
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
