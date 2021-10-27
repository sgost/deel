import React from "react"
import { BannerSection, ImageConteiner } from "./styles.js"
import BannerImage from "../../../data/assets/banner.jpg"
import Nav from "../Nav"

const Banner = () => {
  return (
    <>
      <Nav />
      <BannerSection>
        <ImageConteiner>
          <img src={BannerImage} alt="img" id="img1" />
        </ImageConteiner>
        <div id="banner_container">
          <h1>The platform built for today's</h1>
          <h2>world of work</h2>
          <p>
            Hire anyone in a new country in minutes and automate onboarding,
            payroll, and compliance. It's a world-class experience for your
            business and entire international team.
          </p>
          <button>Request a demo</button>
        </div>
      </BannerSection>
    </>
  )
}
export default Banner
