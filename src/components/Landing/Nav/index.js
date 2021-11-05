import React, { useState, useEffect } from "react"
import { NavContainer, NavContainer2 } from "./styles.js"
import { Link } from "gatsby"
import { Popover, Modal } from "antd"
import PopOver from "./PopoverContent"
import PopOver2 from "./PopOverContent2"
import Mobile from "./mobile"
import { MenuOutlined } from "@ant-design/icons"

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

  //Nav NavContainer

  const HowItWorks = [
    {
      title: "Hire Employees",
      link: "/hireEmployees/",
      description: "Hire Employees abord with our employee service",
    },
    {
      title: "Hire Contractors",
      link: "/hireEmployees/",
      description: "Hire Employees abord with our employee service",
    },
    {
      title: "Run Global Payroll",
      link: "/payroll/",
      description: "Hire Employees abord with our employee service",
    },
  ]
  const HowItWorksResources = [
    {
      id: 4,
      title: "Use Cases",
      subLinks: [
        {
          title: "Compilance",
          description: "Hire Employees abord with our employee service",
          link: "/Compliance/",
        },
        {
          title: "Payments",
          description: "Hire Employees abord with our employee service",
          link: "/Payments/",
        },
      ],
    },
    {
      id: 5,
      title: "Roles",
      subLinks: [
        {
          title: "For Finance Teams",
          description: "Hire Employees abord with our employee service",
          link: "/finance-teams/",
        },
        {
          title: "For Legal Teams",
          description: "Hire Employees abord with our employee service",
          link: "/Legal-teams/",
        },
        {
          title: "For Hiring Managers",
          description: "Hire Employees abord with our employee service",
          link: "/Hiring-Managers/",
        },
      ],
    },
    {
      id: 6,
      title: "Business Size",
      subLinks: [
        {
          title: "Startup",
          description: "Hire Employees abord with our employee service",
          link: "/StartUp/",
        },
        {
          title: "Enterprise",
          description: "Hire Employees abord with our employee service",
          link: "/Enterprise/",
        },
      ],
    },
  ]

  console.log(HowItWorksResources)

  const [footerPop, setFooterPop] = useState(false)

  const handelCancel = () => {
    setFooterPop(false)
  }

  return (
    <>
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
                content={<PopOver HowItWorks={HowItWorks} />}
              >
                <h1 id="nav_link">
                  How it works<div id="span"></div>
                </h1>
              </Popover>
            </div>
            <div id="navTitle">
              <Popover placement="bottomLeft" content={<PopOver2 HowItWorksResources={HowItWorksResources}/>}>
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
              content={<PopOver HowItWorks={HowItWorksResources} />}
            >
              <h1 id="nav_link">
              Resources<div id="span"></div>
              </h1>
            </Popover> */}
              <div id="span"></div>
            </div>
            <Link id="nav_link" to="./global-hiring-guide">
              Global Hiring Guide
            </Link>
            <Link id="nav_link" to="./pricing">
              Pricing
            </Link>
          </div>
          <div id="navBtn">
            <Link id="nav_link" to="./login">
              Login
            </Link>
            <Link to="./request-a-demo">
              <button>Request a demo</button>
            </Link>
          </div>
        </div>
      </NavContainer>

      <NavContainer2>
        <Modal
          centered
          visible={footerPop}
          width={1000}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          onCancel={handelCancel}
          bodyStyle={{ backgroundColor: `#F5FBFF`, height: `100%`, padding: `0`, boxShadow: `none` }}
          style={{ backgroundColor: `#F5FBFF`, height: `100%`, padding: `0`, }}
          maskStyle={{
            backgroundColor: `#F5FBFF`,
            height: `100%`,
            padding: `0`,
          }}
        >
              <div id="navcont">
          <Mobile HowItWorks={HowItWorks} HowItWorksResources={HowItWorksResources}/>
          </div>
        </Modal>

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
            <div id="navBtn">
              <Link id="nav_link" to="./login">
                Login
              </Link>
              <MenuOutlined
                className="icon"
                onClick={() => setFooterPop(true)}
                role="presentation"
              />
            </div>
          </div>
        </div>
      </NavContainer2>
    </>
  )
}
export default Nav
