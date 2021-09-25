import React from "react"
import {
  BannerSection,
  ImageConteiner,
  ButtonSection,
  MatterConteiner,
  MatterSection,
  CardContainer,
  FlexibilitySection,
  ImageContainer2,
  DataContainer,
} from "./styles.js"
import BannerImage from "../../../../data/assets/1.jpeg"
import { Link } from "gatsby"
import { CheckOutlined } from "@ant-design/icons"
import img from "../../../../data/assets/banner2.jpg"

const Banner = () => {
  return (
    <>
      <BannerSection>
        <ImageConteiner>
        </ImageConteiner>
        <div id="banner_container">
          <h1>Onboard</h1>
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
      <ButtonSection>
        <button>Compaliance</button>
        <button>Payroll</button>
        <button>Team Experiance</button>
        <button>Way Deel</button>
      </ButtonSection>
      <MatterConteiner>
        <h1>
          We own entities in 50+ countries so you can hire without the cost,
          time and effort
        </h1>
        <MatterSection>
          <p>
            To hire an employee in another country, you usually need to open a
            local entity. This takes a long time, costs a lot of money and
            creates ongoing admin as you navigate local benefits, payroll, taxes
            and compliance. Your business can also get into some trouble if you
            don't properly comply with local laws.
          </p>
          <p>
            Through Deel’s employment solution, your team is employed by our
            local legal entities in over 50 countries. We handle the entire
            local employment process, taking care of all the compliance, payroll
            and HR admin, while the employee works for your business just like
            the rest of your team.
          </p>
        </MatterSection>
      </MatterConteiner>
      <CardContainer>
        <div id="CardsContainer">
          <div id="Cards">
            <div id="cardImage">
              <img src={BannerImage} alt="img" />
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
                <CheckOutlined />
              </Link>
            </div>
          </div>
        </div>
        <div id="Matters_mini_conteiner">
          <div id="Matters_mini_conteiner_matter">
            <div id="Matters_mini_conteiner1">
              <CheckOutlined />
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
              <CheckOutlined />
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
              <CheckOutlined />
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
    </>
  )
}
export default Banner
