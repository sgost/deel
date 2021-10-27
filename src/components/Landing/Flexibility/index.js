import React from "react"
import { FlexibilitySection, ImageContainer, DataContainer } from "./styles.js"
import img from "../../../data/assets/7.jpg"
import { Link } from "gatsby"
import { ArrowRightOutlined } from "@ant-design/icons"

const Flexibility = () => {
  return (
    <FlexibilitySection>
      <ImageContainer>
        <img src={img} alt="img" />
      </ImageContainer>
      <DataContainer>
        <h1>More flexibility and freedom for businesses and teams</h1>
        <div id="data_matter">
          <p>
            With Deel, companies can freely hire whoever they want, no matter
            their location. And people around the world can access more
            opportunities with fewer restrictions.
          </p>
          <p>
            It's better, smarter, faster hiring for businesses everywhere and
            the freedom and mobility for team members to move, live, and work
            anywhere without a worry.
          </p>
        </div>
        <Link id="Link">
          View Our Global Hiring Guide <ArrowRightOutlined className="icon" />
        </Link>
      </DataContainer>
    </FlexibilitySection>
  )
}
export default Flexibility
