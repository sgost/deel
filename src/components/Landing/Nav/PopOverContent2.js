import React, { useState } from "react"
import { Link } from "gatsby"
import { NavMatter2 } from "./styles.js"
import { RightOutlined } from "@ant-design/icons"

const PopOver2 = ({ HowItWorksResources }) => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <NavMatter2>
      <div id="nav_matter_block1">
        <div id="nav_matter_block1_content">
          {HowItWorksResources.map((HowItWorksResources, i) => (
            <h1 onClick={() => toggleTab(i)} role="presentation">
              {HowItWorksResources.title}
              <RightOutlined className="icon" />
            </h1>
          ))}
        </div>
      </div>
      {HowItWorksResources.map((HowItWorksResources, i) => (
        <div id={toggleState === i ? "nav_matter_block2" : "none"}>
          {HowItWorksResources.subLinks.map(subLinkss => (
            <Link
              id="nav_matter_content"
              to={subLinkss.link}
              key={subLinkss.link}
            >
              <p1>{subLinkss.title}</p1>
              <p>{subLinkss.description}</p>
            </Link>
          ))}
        </div>
      ))}
    </NavMatter2>
  )
}
export default PopOver2
