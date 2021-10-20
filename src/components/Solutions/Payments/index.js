import React from "react"
import {
  BannerSection,
  TrustSection,
  EmployeesDeel,
  ImageConteiner,
  FlexibilitySection,
  ImageContainer2,
  DataContainer,
  TrustSection2,
} from "./styles.js"
import { CheckOutlined } from "@ant-design/icons"
import img from "../../../data/assets/banner2.jpg"
import img3 from "../../../data/assets/icon1.svg"

const Payments = () => {
  return (
    <>
      <BannerSection>
        <ImageConteiner>
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610beee0bbb55143cc227ac9_Stocksy_txpbdeaec4cCp9300_Large_3613631%201.jpg"
            alt="img"
            id="img1"
          />
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
      <EmployeesDeel>
        <h1>Effortless payroll. The way it should be.</h1>
        <div id="Matters_mini_card">
        <div id="Matters_mini_conteiner2">
          <img src={img3} alt="img"/>
          <h1>Airtight employment contracts</h1>
          <p>
            Create, send, and sign employment contracts that are compliant with
            local laws in seconds and protect your business from unnecessary
            risk.
          </p>
        </div>
        <div id="Matters_mini_conteiner2">
          <img src={img3} alt="img"/>
          <h1>Airtight employment contracts</h1>
          <p>
            Create, send, and sign employment contracts that are compliant with
            local laws in seconds and protect your business from unnecessary
            risk.
          </p>
        </div>
        <div id="Matters_mini_conteiner2">
          <img src={img3} alt="img"/>
          <h1>Airtight employment contracts</h1>
          <p>
            Create, send, and sign employment contracts that are compliant with
            local laws in seconds and protect your business from unnecessary
            risk.
          </p>
        </div>
        </div>
      </EmployeesDeel>

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
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610c114d1b776e90d0f97f75_save-hours-p-800.jpeg" alt="img" />
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
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610c114d1b776e90d0f97f75_save-hours-p-800.jpeg" alt="img" />
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
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610c114d1b776e90d0f97f75_save-hours-p-800.jpeg" alt="img" />
          </div>
        </div>
      </div>
    </TrustSection>

    <FlexibilitySection>
        <ImageContainer2>
          <img src={img} alt="img" />
        </ImageContainer2>
        <DataContainer>
          <h1>200+ Legal partners</h1>
          <p>
            Local labor laws constantly change. We work with the best legal
            partners in countries around the world to keep every contract
            up-to-date quarterly.
          </p>
        </DataContainer>
      </FlexibilitySection>



      <TrustSection2>
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
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610c114d67e832d7266ec822_flexible-payment-p-800.jpeg" alt="img" />
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
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610c114d67e832d7266ec822_flexible-payment-p-800.jpeg" alt="img" />
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
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610c114d67e832d7266ec822_flexible-payment-p-800.jpeg" alt="img" />
          </div>
        </div>
      </div>
    </TrustSection2>

    </>
  )
}
export default Payments
