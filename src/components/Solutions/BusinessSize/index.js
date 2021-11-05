import React from "react"
import {
  BannerSection,
  ImageConteiner,
  MatterConteiner,
  MatterSection,
  TrustSection1,
  TrustSection2,
  TrustSection3,
  EmployeesDeel,
  FlexibilitySection,
  ImageContainer2,
  DataContainer,
} from "./styles.js"
import { CheckOutlined } from "@ant-design/icons"

const BusinessSize = () => {
  return (
    <>
      <BannerSection>
        <ImageConteiner>
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610caf2f105906640016c0f9_Stocksy_txpbdeaec4cCp9300_Large_3092427%20copy%201.jpg"
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
      <MatterConteiner>
        <h1>Stay compliant and manage international payments effortlessly</h1>
        <MatterSection>
          <p>
            Hiring international team members is a great way to grow your
            startup quickly and cost effectively. But navigating the maze of
            international laws is hard work and a lot of startups make small
            mistakes that lead to significant compliance issues.
          </p>
          <p>
            Many startups struggle with the admin of payments and onboarding, as
            using lots of different tools like docusign, transferwise and google
            sheets makes it easy to make errors. Doing things without a proper
            process in place for compliance looks bad for potential investors
            and payment errors can hurt your employer brand.
          </p>
        </MatterSection>
      </MatterConteiner>

      <TrustSection1>
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
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610c2ad32f8cd92aa5cf9103_make-team-p-800.jpeg" alt="img" />
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
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610cab52cfbb69d0666699db_hire-globally-p-800.jpeg" alt="img" />
          </div>
        </div>
      </div>
    </TrustSection1>
    <TrustSection2>
      <div id="CardsContainer">
        <div id="Cards">
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610cb44040aaf78412f7c8e7_pay-your-p-800.png" alt="img" />
          </div>
          <div id="cardData">
            <h1>Go from offer letter to onboarded ‍in minutes</h1>
            <h2>
              Got a new hire in Germany or maybe Brazil? Set them up to work
              compliantly in minutes. Create a custom contract that’s compliant
              with local laws, send it to sign, and they'll get onboarded almost
              instantly.
            </h2>
          </div>
        </div>
      </div>
      <EmployeesDeel>
        <div id="Matters_mini_card">
        <div id="Matters_mini_conteiner2">
          <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/6105d5072f3ee95c5a39c102_40-entities.svg" alt="img"/>
          <h1>Airtight employment contracts</h1>
          <p>
            Create, send, and sign employment contracts that are compliant with
            local laws in seconds and protect your business from unnecessary
            risk.
          </p>
        </div>
        <div id="Matters_mini_conteiner2">
          <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/6105d50779fffd4f6eb10dda_happier-team.svg" alt="img"/>
          <h1>Airtight employment contracts</h1>
          <p>
            Create, send, and sign employment contracts that are compliant with
            local laws in seconds and protect your business from unnecessary
            risk.
          </p>
        </div>
        <div id="Matters_mini_conteiner2">
          <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/6105d5072f3ee95c5a39c102_40-entities.svg" alt="img"/>
          <h1>Airtight employment contracts</h1>
          <p>
            Create, send, and sign employment contracts that are compliant with
            local laws in seconds and protect your business from unnecessary
            risk.
          </p>
        </div>
        <div id="Matters_mini_conteiner2">
          <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/61060baf1343ee62ff288c6a_remian.svg" alt="img"/>
          <h1>Airtight employment contracts</h1>
          <p>
            Create, send, and sign employment contracts that are compliant with
            local laws in seconds and protect your business from unnecessary
            risk.
          </p>
        </div>
        </div>
      </EmployeesDeel>
    </TrustSection2>

    <TrustSection3>
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
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610cb553f92b92a373d0177c_boost-employer-p-800.jpeg" alt="img" />
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
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
            <div id="cardData_b_points"><CheckOutlined className="icon"/><p>Got a new hire in Germany or maybe Brazil?</p></div>
          </div>
          <div id="cardImage">
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610cb5534f41dc57e241be92_one-platform-p-800.jpeg" alt="img" />
          </div>
        </div>
      </div>
      <FlexibilitySection>
        <ImageContainer2>
          <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/610cb6226d02ee02453079a1_cyan.jpg" alt="img" />
        </ImageContainer2>
        <DataContainer>
          <h1>Legal partners</h1>
          <p>
            Local labor laws constantly change. We work with the best legal
            partners in countries around the world to keep every contract
            up-to-date quarterly.
          </p>
        </DataContainer>
      </FlexibilitySection>
    </TrustSection3>
    </>
  )
}
export default BusinessSize
