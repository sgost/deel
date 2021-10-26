import React, { useRef } from "react"
import {
    RegisterSection,
    ImageConteiner,
    RegisterContainer,
    RegisterLogo,
} from "./styles.js"
import { Form, Select } from "antd"
import { Link } from "gatsby"
import Nav from "../Landing/Nav/index"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { LeftOutlined, RightOutlined, StarFilled } from '@ant-design/icons';

const RegisterDemo = () => {

    const { Option } = Select

    const slider = useRef(null)

    return (
        <>
            <RegisterSection>
                <Nav />
                <ImageConteiner>
                    {/* <img src={BannerImage} alt="img" id="img1" /> */}
                </ImageConteiner>
                <RegisterContainer>
                    <div id="Register_matter">
                        <h1>Book a demo to see how Deel can help you stay compliant with local laws</h1>
                        <p>
                            Fill out the form to chat with a Deel team member about your business needs and get your questions answered.
                        </p>
                        <div id="Register_matter_carousal">
                            <div id="btn">
                                <button aria-hidden="true" className="carousel-control-prev-icon" id="l" onClick={() => slider.current.prev()}><LeftOutlined style={{ fontSize: '10px', fontWeight: `bold` }} /></button>
                            </div>
                            <Carousel
                                interval={1000000}
                                ref={slider}
                                fade="true"
                            >
                                <Carousel.Item>
                                    <div id="Register_matter_carousal_section">
                                        <div id="carousal_img">
                                            <div id="carousal_img_container">
                                                <StarFilled className="star" />
                                                <StarFilled className="star" />
                                                <StarFilled className="star" />
                                            </div>
                                            <h2>Nov 16, 2020</h2>
                                        </div>
                                        <h1>Terrific service</h1>
                                        <p>"The Deel platform has been super effective for my team and I and has enabled us to bring on workers globally. The platform allows us to onboard individuals seamlessly and with no issues at all..."</p>
                                        <p>Kix Panganiban</p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <div id="btn">
                                <button aria-hidden="true" className="carousel-control-next-icon" onClick={() => slider.current.next()}><RightOutlined style={{ fontSize: '10px', fontWeight: `bold` }} /></button>
                            </div>
                        </div>
                        <div id="Register_matter_carousal_rating">
                            <p>Rated <span>4.7/5</span> on TrustPilot. <Link>View</Link> our latest reviews.</p>
                        </div>
                    </div>
                    <div id="Register_form">
                        <h1>Join the waitlist</h1>
                        <div id="Register_form_real">
                            <div id="input2">
                                <div id="input2_b1">
                                    <label id="label" htmlFor="title">First Name</label>
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div id="input2_b1">
                                    <label id="label" htmlFor="title">Last Name</label>
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div id="input1">
                                <label id="label" htmlFor="title">Headquarters</label>
                                <input type="text" placeholder="Headquarters" />
                            </div>
                            <div id="input1">
                                <label id="label" htmlFor="title">Work Email</label>
                                <input type="text" placeholder="Work Email" />
                            </div>
                            <div id="input1">
                                <label id="label" htmlFor="title">Company Website</label>
                                <input type="text" placeholder="Company Website" />
                            </div>
                            <div id="input1">
                                <label id="label" htmlFor="title">Phone Number</label>
                                <input type="text" placeholder="+91" />
                            </div>
                            <div id="input1">
                                <label id="label" htmlFor="title">How many people work at your company?</label>
                                <Form.Item
                                    name="Company"
                                    rules={[{ required: true }]}
                                    id="input_select"
                                >
                                    <Select
                                        placeholder="Select..."
                                        allowClear
                                    >
                                        <Option value="male">1-50</Option>
                                        <Option value="female">51-200</Option>
                                        <Option value="other">200-250</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div id="input">
                                <button>Book a demo</button>
                            </div>
                        </div>
                    </div>
                </RegisterContainer>
            </RegisterSection>

            <RegisterLogo>
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
            </RegisterLogo>
        </>
    )
}
export default RegisterDemo
