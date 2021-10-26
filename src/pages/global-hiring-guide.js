import React, { useRef, Fragment } from "react"
import Banner from "../components/GlobalHiringGuidence/Banner/index"
// import Footer from "../components/Landing/Footer/index"
import {
  TrustSection,
  TrustSectionCards,
  TrustSectionRating,
} from "../components/GlobalHiringGuidence/styles.js"
import { Link } from "gatsby";
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { StarFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Footer from "../components/Landing/Footer/index"

const GlobalHiringGuide = () => {

  const slider = useRef(null)

  return (
    <Fragment>
      <Banner />
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
        <div id="Trust_container_search">
          <div id="search1">
            <input type="search" placeholder="Search..." />
            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/613449721b0efa32d0800bbf_Search.svg" alt="img" />
          </div>
          <div id="search1"><input type="search" placeholder="Search..." /></div>
          <div id="search1"><input type="search" placeholder="Search..." /></div>
        </div>
      </TrustSection>
      <TrustSectionCards>
        <div id="cards_container">
          <div id="cards_section">
            <div id="cards">
              <div id="cards_b1">
                <div id="cards_tag"></div>
                <img src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" />
              </div>
              <div id="cards_b2"><p>Hire In <span>Canada</span></p></div>
            </div>
            <div id="cards_b1_hover">
              <div id="cards_b1_hover_matter">
                <p>Hire In <span>Canada</span></p>
                <div id="cards_b1_hover_matter_btn">
                  <button>Employees</button>
                  <button>Contractors</button>
                </div>
              </div>
            </div>
          </div>
          <div id="cards_section">
            <div id="cards">
              <div id="cards_b1">
                <div id="cards_tag"></div>
                <img src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" />
              </div>
              <div id="cards_b2"><p>Hire In <span>Canada</span></p></div>
            </div>
            <div id="cards_b1_hover">
              <div id="cards_b1_hover_matter">
                <p>Hire In <span>Canada</span></p>
                <div id="cards_b1_hover_matter_btn">
                  <button>Employees</button>
                  <button>Contractors</button>
                </div>
              </div>
            </div>
          </div>
          <div id="cards_section">
            <div id="cards">
              <div id="cards_b1">
                <div id="cards_tag"></div>
                <img src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" />
              </div>
              <div id="cards_b2"><p>Hire In <span>Canada</span></p></div>
            </div>
            <div id="cards_b1_hover">
              <div id="cards_b1_hover_matter">
                <p>Hire In <span>Canada</span></p>
                <div id="cards_b1_hover_matter_btn">
                  <button>Employees</button>
                  <button>Contractors</button>
                </div>
              </div>
            </div>
          </div>
          <div id="cards_section">
            <div id="cards">
              <div id="cards_b1">
                <div id="cards_tag"></div>
                <img src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" />
              </div>
              <div id="cards_b2"><p>Hire In <span>Canada</span></p></div>
            </div>
            <div id="cards_b1_hover">
              <div id="cards_b1_hover_matter">
                <p>Hire In <span>Canada</span></p>
                <div id="cards_b1_hover_matter_btn">
                  <button>Employees</button>
                  <button>Contractors</button>
                </div>
              </div>
            </div>
          </div>
          <div id="cards_section">
            <div id="cards">
              <div id="cards_b1">
                <div id="cards_tag"></div>
                <img src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" />
              </div>
              <div id="cards_b2"><p>Hire In <span>Canada</span></p></div>
            </div>
            <div id="cards_b1_hover">
              <div id="cards_b1_hover_matter">
                <p>Hire In <span>Canada</span></p>
                <div id="cards_b1_hover_matter_btn">
                  <button>Employees</button>
                  <button>Contractors</button>
                </div>
              </div>
            </div>
          </div>
          <div id="cards_section">
            <div id="cards">
              <div id="cards_b1">
                <div id="cards_tag"></div>
                <img src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" />
              </div>
              <div id="cards_b2"><p>Hire In <span>Canada</span></p></div>
            </div>
            <div id="cards_b1_hover">
              <div id="cards_b1_hover_matter">
                <p>Hire In <span>Canada</span></p>
                <div id="cards_b1_hover_matter_btn">
                  <button>Employees</button>
                  <button>Contractors</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TrustSectionCards>
      <TrustSectionRating>
        <div id="head">
          <h1>We have a 4.7 out of 5 rating on Trustpilot</h1>
          <p>We're trusted by over 1,400 businesses all over the world. Read our reviews on <Link>Trustpilot.com.</Link></p>
        </div>
        <Carousel id="main_carousal_control" ref={slider} fade="true">
        <Carousel.Item>
        <div id="container_main">
          <div id="container">
            <div id="container_star">
              <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            </div>
            <div id="container_matter">
              <h1>Terrific service</h1>
              <p>"Great service, amazing customer care, terrific platform, both for the company and for the contractors/employees. Saving everyone's time and money..."</p>
              <p>Nunzio Martinello</p>
              <p>Dec 15, 2020</p>
            </div>
          </div>
          <div id="container">
            <div id="container_star">
              <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            </div>
            <div id="container_matter">
              <h1>Terrific service</h1>
              <p>"Great service, amazing customer care, terrific platform, both for the company and for the contractors/employees. Saving everyone's time and money Great service, amazing customer care, terrific platform, both for the company and for the contractors/employees. Saving everyone's time and money..."</p>
              <p>Nunzio Martinello</p>
              <p>Dec 15, 2020</p>
            </div>
          </div>
          <div id="container">
            <div id="container_star">
              <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            </div>
            <div id="container_matter">
              <h1>Terrific service</h1>
              <p>"Great service, amazing customer care, terrific platform, both for the company and for the contractors/employees. Saving everyone's time and money..."</p>
              <p>Nunzio Martinello</p>
              <p>Dec 15, 2020</p>
            </div>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div id="container_main">
          <div id="container">
            <div id="container_star">
              <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            </div>
            <div id="container_matter">
              <h1>Terrific service</h1>
              <p>"Great service, amazing customer care, terrific platform, both for the company and for the contractors/employees. Saving everyone's time and money..."</p>
              <p>Nunzio Martinello</p>
              <p>Dec 15, 2020</p>
            </div>
          </div>
          <div id="container">
            <div id="container_star">
              <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            </div>
            <div id="container_matter">
              <h1>Terrific service</h1>
              <p>"Great service, amazing customer care, terrific platform, both for the company and for the contractors/employees. Saving everyone's time and money Great service, amazing customer care, terrific platform, both for the company and for the contractors/employees. Saving everyone's time and money..."</p>
              <p>Nunzio Martinello</p>
              <p>Dec 15, 2020</p>
            </div>
          </div>
          <div id="container">
            <div id="container_star">
              <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            <div id="star">
              <StarFilled className="star"/>
            </div>
            </div>
            <div id="container_matter">
              <h1>Terrific service</h1>
              <p>"Great service, amazing customer care, terrific platform, both for the company and for the contractors/employees. Saving everyone's time and money..."</p>
              <p>Nunzio Martinello</p>
              <p>Dec 15, 2020</p>
            </div>
          </div>
        </div>
        </Carousel.Item>
        </Carousel>
        <div id="btn">
        <span aria-hidden="true" className="carousel-control-prev-icon" id="l" onClick={() => slider.current.prev()}><LeftOutlined style={{ fontSize: '20px', fontWeight: `bold` }} /></span>
        <span aria-hidden="true" className="carousel-control-next-icon" id="l2" onClick={() => slider.current.next()}><RightOutlined style={{ fontSize: '20px', fontWeight: `bold`}}/></span>
        </div>
      </TrustSectionRating>
      <Footer/>
    </Fragment>
  )
}
export default GlobalHiringGuide