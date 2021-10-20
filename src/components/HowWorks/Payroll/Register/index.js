import React from "react"
import {
  RegisterSection,
  ImageConteiner,
  RegisterContainer,
  TrustSection,
  Solution,
} from "./styles.js"
import BannerImage from "../../../../data/assets/1.jpeg"
import logo from "../../../../data/assets/shopify.png"
import { Form, Select } from "antd"

const Register = () => {
  const { Option } = Select

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
                <label id="label" htmlFor="title">Company name</label>
                <input type="text" placeholder="Deel" />
              </div>
              <div id="input2">
                <div id="input2_b1">
                  <label id="label" htmlFor="title">Work Email Address</label>
                  <input type="text" placeholder="John@letsDeel.com" />
                </div>
                <div id="input2_b1">
                  <label id="label" htmlFor="title">Website URL</label>
                  <input type="text" placeholder="www.letsdeel.com" />
                </div>
              </div>
              <div id="input1">
                <label id="label" htmlFor="title">Which countries would you like to run payroll in?</label>
                <input type="text" placeholder="UnitesStates Canada" />
              </div>
              <div id="input1">
                <label id="label" htmlFor="title">What tool do you use now?</label>
                <input type="text" placeholder="ADP Rippling" />
              </div>
              <div id="input1">
                <label id="label" htmlFor="title">How many employees do you want to pay?</label>
                <Form.Item
                  name="gender"
                  rules={[{ required: true }]}
                  id="input_select"
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                  >
                    <Option value="male">1-50</Option>
                    <Option value="female">51-200</Option>
                    <Option value="other">200-250</Option>
                  </Select>
                </Form.Item>
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
