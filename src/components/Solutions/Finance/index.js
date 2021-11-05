import React, { useRef } from "react"
import {
  BannerSection,
  ImageConteiner,
  TrustSection,
  PeopleSection,
  EmployeesDeel,
} from "./styles.js"
import { Link } from "gatsby"
// import { CheckOutlined } from "@ant-design/icons"
import img from "../../../data/assets/banner2.jpg"
import img2 from "../../../data/assets/8.jpg"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"
import img3 from "../../../data/assets/download.png"
import img4 from "../../../data/assets/icon1.svg"

const Roles = () => {
  const PeopleData = [
    {
      id: 1,
      head: "See how Deel helped other companies achieve their goals",
      description: "We handle payroll, invoice generation, payslips.",
    },
    {
      id: 2,
      head: "See how Deel helped other companies achieve their goals",
      description: "We handle payroll, invoice generation, payslips.",
    },
    {
      id: 3,
      head: "See how Deel helped other companies achieve their goals",
      description: "We handle payroll, invoice generation, payslips.",
    },
  ]
  const PeopleMenu = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]
  const index = PeopleMenu[PeopleMenu.length - 1]
  console.log(index)
  const slider = useRef(null)
  return (
    <>
      <BannerSection>
        <ImageConteiner>
          <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/61121610b95e2f62e3c68e1e_finance-teams.jpg" alt="img" id="img1" />
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
                compliantly in minutes. Create a custom contract that’s
                compliant with local laws, send it to sign, and they'll get
                onboarded almost instantly.
              </h2>
            </div>
            <div id="cardImage">
              <img src={img} alt="img" />
            </div>
          </div>
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
              <img src={img} alt="img" />
            </div>
          </div>
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
              <img src={img} alt="img" />
            </div>
          </div>
        </div>
      </TrustSection>

      <PeopleSection>
        <Carousel
          interval={1000000}
          id="main_carousal_control"
          ref={slider}
          fade="true"
        >
          {PeopleData &&
            PeopleData.map((PeopleDatas, i) => (
              <Carousel.Item key={i}>
                <div id="PeopleContainer">
                  <div id="PeopleContent">
                    <div id="image_container">
                      <img src={img2} alt="img" />
                    </div>
                    <div id="image_matter">
                      <h1>{PeopleDatas.head}</h1>
                    </div>
                  </div>
                  <div id="PeopleContent2">
                    <img src={img3} alt="img" />
                    <p>{PeopleDatas.description}</p>
                    <Link id="link">
                      Learn more <ArrowRightOutlined className="icon" />
                    </Link>
                  </div>
                </div>
              </Carousel.Item>
            ))}
        </Carousel>
        <div id="btn">
          <span aria-hidden="true" onClick={() => slider.current.prev()}>
            <LeftOutlined style={{ fontSize: "20px", fontWeight: `bold` }} />
          </span>
          <span aria-hidden="true" onClick={() => slider.current.next()}>
            <RightOutlined
              style={{
                fontSize: "20px",
                fontWeight: `bold`,
                marginLeft: `50px`,
              }}
              className="right"
            />
          </span>
        </div>
      </PeopleSection>


      <EmployeesDeel>
        <h1>Effortless payroll. The way it should be.</h1>
        <div id="Matters_mini_card">
        <div id="Matters_mini_conteiner2">
          <img src={img4} alt="img"/>
          <p>
            Create, send, and sign employment contracts that are compliant
          </p>
          <Link id="link">
                      Learn more <ArrowRightOutlined className="icon" />
                    </Link>
        </div>
        <div id="Matters_mini_conteiner2">
          <img src={img4} alt="img"/>
          <p>
            Create, send, and sign employment contracts that are compliant
          </p>
          <Link id="link">
                      Learn more <ArrowRightOutlined className="icon" />
                    </Link>
        </div>
        <div id="Matters_mini_conteiner2">
          <img src={img4} alt="img"/>
          <p>
            Create, send, and sign employment contracts that are compliant
          </p>
          <Link id="link">
                      Learn more <ArrowRightOutlined className="icon" />
                    </Link>
        </div>
        <div id="Matters_mini_conteiner2">
          <img src={img4} alt="img"/>
          <p>
            Create, send, and sign employment contracts that are compliant
          </p>
          <Link id="link">
                      Learn more <ArrowRightOutlined className="icon" />
                    </Link>
        </div>
        <div id="Matters_mini_conteiner2">
          <img src={img4} alt="img"/>
          <p>
            Create, send, and sign employment contracts that are compliant
          </p>
          <Link id="link">
                      Learn more <ArrowRightOutlined className="icon" />
                    </Link>
        </div>
        </div>
      </EmployeesDeel>
    </>
  )
}
export default Roles
