import React from "react"
import { Link } from "gatsby"
import { NavMatter } from "./styles.js"

const PopOver = ({ HowItWorks }) => {
  return (
    <NavMatter>
      {HowItWorks &&
        HowItWorks.map((HowItWorks, i) => (
          <Link id="nav_matter_content" to={HowItWorks.link} key={i}>
            <p1>{HowItWorks.title}</p1>
            <p>{HowItWorks.description}</p>
          </Link>
        ))}
    </NavMatter>
  )
}
export default PopOver
