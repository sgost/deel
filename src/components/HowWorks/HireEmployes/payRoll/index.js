import React from "react"
import {
  PayRollSection,
  CardContainer,
  CardContainer2,
  EmployeesDeel,
} from "./styles.js"
import BannerImage from "../../../../data/assets/6.png"
import { Link } from "gatsby"
import { ArrowRightOutlined } from "@ant-design/icons"
import img2 from "../../../../data/assets/5.jpeg"
import img3 from "../../../../data/assets/icon1.svg"
import Clints from "../../../Landing/Clints"

const PayRoll = () => {
  return (
    <>
      <PayRollSection>
        <CardContainer>
          <div id="CardsContainer">
            <div id="Cards">
              <div id="cardData">
                <h1>Go from offer letter to onboarded ‍in minutes</h1>
                <h2>
                  Got a new hire in Germany or maybe Brazil? Set them up to work
                  compliantly in minutes. Create a custom contract that’s
                  compliant with local laws, send it to sign, and they'll get
                  onboarded almost instantly.
                </h2>
              </div>
              <div id="cardImage">
                <img src={BannerImage} alt="img" />
              </div>
            </div>
          </div>
          <div id="Matters_mini_conteiner">
            <div id="Matters_mini_conteiner_matter">
              <div id="Matters_mini_conteiner1">
                <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="imag"/>
              </div>
              <div id="Matters_mini_conteiner2">
                <h1>Airtight employment contracts</h1>
                <p>
                  Create, send, and sign employment contracts that are compliant
                  with local laws in seconds and protect your business from
                  unnecessary risk.
                </p>
              </div>
            </div>
            <div id="Matters_mini_conteiner_matter">
              <div id="Matters_mini_conteiner1">
                <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="imag"/>
              </div>
              <div id="Matters_mini_conteiner2">
                <h1>Airtight employment contracts</h1>
                <p>
                  Create, send, and sign employment contracts that are compliant
                  with local laws in seconds and protect your business from
                  unnecessary risk.
                </p>
              </div>
            </div>
            <div id="Matters_mini_conteiner_matter">
              <div id="Matters_mini_conteiner1">
                <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="imag"/>
              </div>
              <div id="Matters_mini_conteiner2">
                <h1>Airtight employment contracts</h1>
                <p>
                  Create, send, and sign employment contracts that are compliant
                  with local laws in seconds and protect your business from
                  unnecessary risk.
                </p>
              </div>
            </div>
          </div>
        </CardContainer>
        <CardContainer2>
          <div id="CardsContainer">
            <div id="Cards">
              <div id="cardImage">
                <img src={img2} alt="img" />
              </div>
              <div id="cardData">
                <h1>Go from offer letter to onboarded ‍in minutes</h1>
                <h2>
                  Got a new hire in Germany or maybe Brazil? Set them up to work
                  compliantly in minutes. Create a custom contract that’s
                  compliant with local laws, send it to sign, and they'll get
                  onboarded almost instantly.
                </h2>
                <Link id="link">
                  Learn more
                  <ArrowRightOutlined style={{ margin: `0 0 15px 20px` }} />
                </Link>
              </div>
            </div>
          </div>
          <div id="Matters_mini_conteiner">
            <div id="Matters_mini_conteiner_matter">
              <div id="Matters_mini_conteiner1">
                <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="imag"/>
              </div>
              <div id="Matters_mini_conteiner2">
                <h1>Airtight employment contracts</h1>
                <p>
                  Create, send, and sign employment contracts that are compliant
                  with local laws in seconds and protect your business from
                  unnecessary risk.
                </p>
              </div>
            </div>
            <div id="Matters_mini_conteiner_matter">
              <div id="Matters_mini_conteiner1">
                <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="imag"/>
              </div>
              <div id="Matters_mini_conteiner2">
                <h1>Airtight employment contracts</h1>
                <p>
                  Create, send, and sign employment contracts that are compliant
                  with local laws in seconds and protect your business from
                  unnecessary risk.
                </p>
              </div>
            </div>
            <div id="Matters_mini_conteiner_matter">
              <div id="Matters_mini_conteiner1">
                <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="imag"/>
              </div>
              <div id="Matters_mini_conteiner2">
                <h1>Airtight employment contracts</h1>
                <p>
                  Create, send, and sign employment contracts that are compliant
                  with local laws in seconds and protect your business from
                  unnecessary risk.
                </p>
              </div>
            </div>
            <div id="Matters_mini_conteiner_matter">
              <div id="Matters_mini_conteiner1">
                <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="imag"/>
              </div>
              <div id="Matters_mini_conteiner2">
                <h1>Airtight employment contracts</h1>
                <p>
                  Create, send, and sign employment contracts that are compliant
                  with local laws in seconds and protect your business from
                  unnecessary risk.
                </p>
              </div>
            </div>
          </div>
        </CardContainer2>
        <Clints />
      </PayRollSection>
      <EmployeesDeel>
        <h1>Why hire employees with Deel</h1>
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
    </>
  )
}
export default PayRoll
