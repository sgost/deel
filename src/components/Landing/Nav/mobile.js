import React, { useState } from "react"
import { NavContainer3 } from "./styles.js"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import { Link } from "gatsby"

const Mobile = ({ HowItWorks, HowItWorksResources }) => {
  const [toggleState, setToggleState] = useState("")

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <NavContainer3>
      <div id="mob_nav">
        <div id="mob_nav_container">
          {toggleState === 1 ? (
            <h1 id="nav_title" onClick={() => toggleTab(0)} role="presentation">
              How It Works
              <UpOutlined className="icon" />
            </h1>
          ) : (
            <h1 id="nav_title" onClick={() => toggleTab(1)} role="presentation">
              How It Works
              <DownOutlined className="icon" />
            </h1>
          )}
          {toggleState === 1 ? (
            <div id="mob_nav_Links">
              {toggleState &&
                HowItWorks.map((HowItWorks, i) => (
                  <>
                    <Link
                      id="nav_lnks"
                      to={HowItWorks.link}
                      key={HowItWorks.title}
                    >
                      <h1>{HowItWorks.title}</h1>
                      <p>{HowItWorks.description}</p>
                    </Link>
                  </>
                ))}
            </div>
          ) : (
            ""
          )}
        </div>

        <div id="mob_nav_container">
          {toggleState === 2 ? (
            <h1 id="nav_title" onClick={() => toggleTab(0)} role="presentation">
              Compilance
              <UpOutlined className="icon" />
            </h1>
          ) : (
            <h1 id="nav_title" onClick={() => toggleTab(2)} role="presentation">
              Compilance
              <DownOutlined className="icon" />
            </h1>
          )}
          {toggleState === 2 ? (
            <div id="mob_nav_Links">
              <Link id="nav_lnks">
                <h1>Compilance</h1>
                <p>Hire Employees abord with our employee service</p>
              </Link>
              <Link id="nav_lnks">
                <h1>Payments</h1>
                <p>Hire Employees abord with our employee service</p>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        <div id="mob_nav_container">
          {toggleState === 3 ? (
            <h1 id="nav_title" onClick={() => toggleTab(0)} role="presentation">
              Roles
              <UpOutlined className="icon" />
            </h1>
          ) : (
            <h1 id="nav_title" onClick={() => toggleTab(3)} role="presentation">
              Roles
              <DownOutlined className="icon" />
            </h1>
          )}
          {toggleState === 3 ? (
            <div id="mob_nav_Links">
              <Link id="nav_lnks" to="/finance-teams/">
                <h1>For Finance Teams</h1>
                <p>Hire abord with our employee service</p>
              </Link>
              <Link id="nav_lnks" to="/Legal-teams/">
                <h1>For Legal Teams</h1>
                <p>Hire abord with our employee service</p>
              </Link>
              <Link id="nav_lnks" to="/Hiring-Managers/">
                <h1>For Hiring Managers</h1>
                <p>Hire abord with our employee service</p>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        {HowItWorksResources.map(HowItWorksResourcess => (
          <div id="mob_nav_container">
            {toggleState === HowItWorksResourcess.id ? (
              <h1
                id="nav_title"
                onClick={() => toggleTab(0)}
                role="presentation"
              >
                {HowItWorksResourcess.title}
                <UpOutlined className="icon" />
              </h1>
            ) : (
              <h1
                id="nav_title"
                onClick={() => toggleTab(HowItWorksResourcess.id)}
                role="presentation"
              >
                {HowItWorksResourcess.title}
                <DownOutlined className="icon" />
              </h1>
            )}
            {toggleState === HowItWorksResourcess.id ? (
              <div id="mob_nav_Links">
                {HowItWorksResourcess.subLinks.map(subLinks => (
                  <Link id="nav_lnks" to={subLinks.link} key={subLinks.title}>
                    <h1>{subLinks.title}</h1>
                    <p>{subLinks.description}</p>
                  </Link>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </NavContainer3>
  )
}
export default Mobile
