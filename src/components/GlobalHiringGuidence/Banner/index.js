import React from "react"
import { BannerSection, ImageConteiner } from "./styles.js"
import Nav from "../../Landing/Nav"

const Banner = () => {
  return (
    <>
      <Nav />
      <BannerSection>
        <ImageConteiner>
          <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/61378957b1a5d5169e609d2b_global-hiring-hero.jpg" alt="img" id="img1" />
        </ImageConteiner>
        <div id="banner_container">
          <h1>Easily hire in
          </h1>
          <h2>‍150+ Countries
          </h2>
          <p>
            From Germany to Australia, learn more about the best practices for hiring remote team members and how Deel helps make it simple.
          </p>
        </div>
      </BannerSection>
    </>
  )
}
export default Banner
