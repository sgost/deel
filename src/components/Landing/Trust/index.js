import React from "react"
import { TrustSection } from "./styles.js"
import img1 from "../../../data/assets/1.jpeg"
import { Link } from "gatsby"
import { ArrowRightOutlined } from "@ant-design/icons"

const Trust = ({ color }) => {
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
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d8c0c26bfa1c8e028d_dropbox.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d9ddbd3511dda6cecf_shopify.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d8d3d7fc2b11270538_intercom.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d83041b24b6900aa05_dlocal.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d9d0dfca14db073bec_alan.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d9d0dfca2aa2073beb_notion.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0da48c8da573d497d4c_airtable.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d885d314774752045b_mercury.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d805e28e1efd95c909_superhuman.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d822e3eb365adf65e0_voi.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d923d782a28fbebbb7_spendesk.svg" alt="img" />
        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d801914fabdbb1ad02_andela.svg" alt="img" />
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
            <Link id="link">
              Learn more <ArrowRightOutlined className="icon" />
            </Link>
          </div>
          <div id="cardImage">
            <img src={img1} alt="img" />
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
            <Link id="link">
              Learn more <ArrowRightOutlined className="icon" />
            </Link>
          </div>
          <div id="cardImage">
            <img src={img1} alt="img" />
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
            <Link id="link">
              Learn more <ArrowRightOutlined className="icon" />
            </Link>
          </div>
          <div id="cardImage">
            <img src={img1} alt="img" />
          </div>
        </div>
      </div>
    </TrustSection>
  )
}
export default Trust
