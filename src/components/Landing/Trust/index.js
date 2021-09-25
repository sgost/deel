import React from "react"
import { TrustSection } from "./styles.js"
import logo from "../../../data/assets/shopify.png"
import img1 from "../../../data/assets/1.jpeg"
import {Link} from "gatsby"

const Trust = () => {
  return (
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
      <div id="Trust_container2">
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
        <img src={logo} alt="img" />
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
            <Link id="link">Learn more</Link>
          </div>
          <div id="cardImage">
            <img src={img1} alt="img"/>
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
            <Link id="link">Learn more</Link>
          </div>
          <div id="cardImage">
            <img src={img1} alt="img"/>
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
            <Link id="link">Learn more</Link>
          </div>
          <div id="cardImage">
            <img src={img1} alt="img"/>
          </div>
        </div>
      </div>
    </TrustSection>
  )
}
export default Trust
