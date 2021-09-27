import React from "react"
import {
  BannerSection,
  TrustSection,
  ImageConteiner,
} from "./styles.js"
import BannerImage from "../../../data/assets/1.jpeg"
import { Link } from "gatsby"
import { CheckOutlined } from "@ant-design/icons"
import img from "../../../data/assets/banner2.jpg"

const Compilation = () => {
  return (
    <>
      <BannerSection>
        <ImageConteiner>
        </ImageConteiner>
        <div id="banner_container">
          <h2>employees</h2>
          <h1>without opening an entity</h1>
          <p>
            Hire employees in another country in minutes without the cost, time,
            and extra admin. Deel handles the entire employment process so you
            can focus on building your best business.
          </p>
          <button>Watch Video</button>
        </div>
      </BannerSection>

      <TrustSection>
      <div id="Trust_container">
        <h1>
          Join thousands of companies that trust Deel to compliantly hire
          anywhere
        </h1>
        <h2>
          Deel has everything you need to compliantly hire, pay and manage
          contractors and employees in 150 countries. Think onboarding,
          contracts, expense management, benefits, payroll and built-in
          compliance for your international team.
        </h2>
      </div>
      <div id="CardsContainer">
        <div id="Cards">
          <div id="cardData">
            <h1>Go from offer letter to onboarded ‍in minutes</h1>
            <h2>
              Got a new hire in Germany or maybe Brazil? Set them up to work
              compliantly in minutes. Create a custom contract that’s compliant
              with local laws, send it to sign, and they'll get onboarded almost
              instantly.
            </h2>
          </div>
          <div id="cardImage">
            <img src={BannerImage} alt="img" />
          </div>
        </div>
        <div id="Cards">
          <div id="cardData">
            <h1>Go from offer letter to onboarded ‍in minutes</h1>
            <h2>
              Got a new hire in Germany or maybe Brazil? Set them up to work
              compliantly in minutes. Create a custom contract that’s compliant
              with local laws, send it to sign, and they'll get onboarded almost
              instantly.
            </h2>
            <p>Go from offer letter to onboarded ‍in minutes</p>
          </div>
          <div id="cardImage">
            <img src={BannerImage} alt="img" />
          </div>
        </div>
        <div id="Cards">
          <div id="cardData">
            <h1>Go from offer letter to onboarded ‍in minutes</h1>
            <h2>
              Got a new hire in Germany or maybe Brazil? Set them up to work
              compliantly in minutes. Create a custom contract that’s compliant
              with local laws, send it to sign, and they'll get onboarded almost
              instantly.
            </h2>
          </div>
          <div id="cardImage">
            <img src={BannerImage} alt="img" />
          </div>
        </div>
      </div>
    </TrustSection>

    </>
  )
}
export default Compilation
