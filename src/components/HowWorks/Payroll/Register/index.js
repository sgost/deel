import React, { useState } from "react"
import {
  RegisterSection,
  ImageConteiner,
  RegisterContainer,
  TrustSection,
  Solution,
} from "./styles.js"
import BannerImage from "../../../../data/assets/1.jpeg"

const Register = () => {
  const [categorys, setCategorys] = useState("")
  const [over, setOver] = useState("")
  const toggleTab = index => {
    setCategorys(index)
  }

  return (
    <>
      <RegisterSection>
        <ImageConteiner>
          <img src={BannerImage} alt="img" id="img1" />
        </ImageConteiner>
        <RegisterContainer>
          <div id="Register_matter">
            <h1>Finally, great Global Payroll</h1>
            <p>
              You hire employees with your own entity, and we'll handle payroll,
              tax deductions, filing returns, collecting pensions, and sending
              payslips so you can get your new employees up and running fast.
              It’s that simple.
            </p>
            <p>
              Be the first to get access when it's live by joining the waitlist.
            </p>
          </div>
          <div id="Register_form">
            <h1>Join the waitlist</h1>
            <div id="Register_form_real">
              <div id="input1">
                <label id="label" htmlFor="title">
                  Company name
                </label>
                <input type="text" placeholder="Deel" />
              </div>
              <div id="input2">
                <div id="input2_b1">
                  <label id="label" htmlFor="title">
                    Work Email Address
                  </label>
                  <input type="text" placeholder="John@letsDeel.com" />
                </div>
                <div id="input2_b1">
                  <label id="label" htmlFor="title">
                    Website URL
                  </label>
                  <input type="text" placeholder="www.letsdeel.com" />
                </div>
              </div>
              <div id="input1">
                <label id="label" htmlFor="title">
                  Which countries would you like to run payroll in?
                </label>
                <input type="text" placeholder="UnitesStates Canada" />
              </div>
              <div id="input1">
                <label id="label" htmlFor="title">
                  What tool do you use now?
                </label>
                <input type="text" placeholder="ADP Rippling" />
              </div>
              <div id="input1">
                <label id="label" htmlFor="title">
                  How many employees do you want to pay?
                </label>
                <div id="select">
                  {over ? (
                    <div onClick={() => setOver(false)} role="presentation" id="input">
                      {categorys ? categorys : "Category"}
                    </div>
                  ) : (
                    <div onClick={() => setOver(true)} role="presentation" id="input">
                      {categorys ? categorys : "Category"}
                    </div>
                  )}
                  {over ? (
                    <div id="option">
                      <p onClick={() => toggleTab("1 - 10")} role="presentation">1 - 10</p>
                      <p onClick={() => toggleTab("10 - 15")} role="presentation">10 - 15</p>
                      <p onClick={() => toggleTab("15 - 20")} role="presentation">15 - 20</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div id="input">
                <button>Join the wait list</button>
              </div>
            </div>
          </div>
        </RegisterContainer>
      </RegisterSection>

      <TrustSection>
        <div id="Trust_container">
          <h1>Dependable international payroll</h1>
          <h2>
            We've processed payments and payroll for more than 3,500 businesses
            (and counting).
          </h2>
        </div>
        <div id="Trust_container2">
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d8c0c26bfa1c8e028d_dropbox.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d9ddbd3511dda6cecf_shopify.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d8d3d7fc2b11270538_intercom.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d83041b24b6900aa05_dlocal.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d9d0dfca14db073bec_alan.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d9d0dfca2aa2073beb_notion.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0da48c8da573d497d4c_airtable.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d885d314774752045b_mercury.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d805e28e1efd95c909_superhuman.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d822e3eb365adf65e0_voi.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d923d782a28fbebbb7_spendesk.svg"
            alt="img"
          />
          <img
            src="https://assets.website-files.com/601ac25738ddfb7beea0c682/611be0d801914fabdbb1ad02_andela.svg"
            alt="img"
          />
        </div>
      </TrustSection>

      <Solution>
        <h1>With Deel’s Global Payroll Solution, you can:</h1>
        <div id="card_container">
          <div id="card_container1">
            <div id="card_container1_cards">
              <div id="card_container_matter">
                <p1>Built-in compliance</p1>
                <h2>Keep compliant with local laws</h2>
                <h3>
                  Our network of more than 200 local legal and accounting
                  partners work with us to ensure that you're doing things right
                  in every country, from taxes to contracts and local laws.
                </h3>
              </div>
              <div id="card_container_image">
                <img src={BannerImage} alt="img" id="img1" />
              </div>
            </div>
            <div id="card_container1_cards">
              <div id="card_container_matter">
                <p1>Built-in compliance</p1>
                <h2>Keep compliant with local laws</h2>
                <h3>
                  Our network of more than 200 local legal and accounting
                  partners work with us to ensure that you're doing things right
                  in every country, from taxes to contracts and local laws.
                </h3>
              </div>
              <div id="card_container_image">
                <img src={BannerImage} alt="img" id="img1" />
              </div>
            </div>
          </div>

          <div id="card_container1">
            <div id="card_container1_cards">
              <div id="card_container_matter">
                <p1>Built-in compliance</p1>
                <h2>Keep compliant with local laws</h2>
                <h3>
                  Our network of more than 200 local legal and accounting
                  partners work with us to ensure that you're doing things right
                  in every country, from taxes to contracts and local laws.
                </h3>
              </div>
              <div id="card_container_image">
                <img src={BannerImage} alt="img" id="img1" />
              </div>
            </div>
            <div id="card_container1_cards">
              <div id="card_container_matter">
                <p1>Built-in compliance</p1>
                <h2>Keep compliant with local laws</h2>
                <h3>
                  Our network of more than 200 local legal and accounting
                  partners work with us to ensure that you're doing things right
                  in every country, from taxes to contracts and local laws.
                </h3>
              </div>
              <div id="card_container_image">
                <img src={BannerImage} alt="img" id="img1" />
              </div>
            </div>
          </div>
        </div>
      </Solution>
    </>
  )
}
export default Register
