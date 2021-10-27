import React, { useState } from "react"
import {
  FooterContainer,
  FooterContainerTop,
  FooterContainerBottom,
  FooterLogo,
  FooterLogoTop,
  FooterLogoBottom,
  FooterLinks,
  FooterLinksmain,
  FooterLinksmain2,
} from "./styles.js"
import {
  TwitterOutlined,
  LinkedinOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons"
import { Link } from "gatsby"

const Footer = () => {
  const [toggleState, setToggleState] = useState("")

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <FooterContainer>
      <FooterContainerTop>
        <FooterLogo>
          <FooterLogoTop>deel.</FooterLogoTop>
          <FooterLogoBottom>
            <TwitterOutlined className="icon" />
            <LinkedinOutlined className="icon" />
            <TwitterOutlined className="icon" />
            <LinkedinOutlined className="icon" />
          </FooterLogoBottom>
        </FooterLogo>
        <FooterLinksmain>
          <FooterLinks>
            <h1 id="main">How it works</h1>
            <h1 id="secondary">Hire Employees</h1>
            <h1 id="secondary">Hire Employees</h1>
            <h1 id="secondary">Hire Employees</h1>
            <h1 id="secondary">Hire Employees</h1>
          </FooterLinks>
          <FooterLinks>
            <h1 id="main">How it works</h1>
            <h1 id="secondary">Hire Employees</h1>
            <h1 id="secondary">Hire Employees</h1>
            <h1 id="secondary">Hire Employees</h1>
            <h1 id="secondary">Hire Employees</h1>
          </FooterLinks>
          <FooterLinks>
            <h1 id="main">How it works</h1>
            <h1 id="secondary">Hire Employees</h1>
            <h1 id="secondary">Hire Employees</h1>
            <h1 id="secondary">Hire Employees</h1>
            <h1 id="secondary">Hire Employees</h1>
          </FooterLinks>
        </FooterLinksmain>



        <FooterLinksmain2>
          <FooterLinks>
            {toggleState === 1 ? (
              <h1 id="main" onClick={() => toggleTab(0)} role="presentation">
                How it works
                <DownOutlined className="icon" />
              </h1>
            ) : (
              <h1 id="main" onClick={() => toggleTab(1)} role="presentation">
                How it works
                <UpOutlined className="icon" />
              </h1>
            )}
            {toggleState === 1 ? (
              <>
                <h1 id="secondary">Hire Employees</h1>
                <h1 id="secondary">Hire Employees</h1>
                <h1 id="secondary">Hire Employees</h1>
                <h1 id="secondary">Hire Employees</h1>
              </>
            ) : (
              ""
            )}
          </FooterLinks>
          <FooterLinks>
            {toggleState === 2 ? (
              <h1 id="main" onClick={() => toggleTab(0)} role="presentation">
                How it works
                <DownOutlined className="icon" />
              </h1>
            ) : (
              <h1 id="main" onClick={() => toggleTab(2)} role="presentation">
                How it works
                <UpOutlined className="icon" />
              </h1>
            )}
            {toggleState === 2 ? (
              <>
                <h1 id="secondary">Hire Employees</h1>
                <h1 id="secondary">Hire Employees</h1>
                <h1 id="secondary">Hire Employees</h1>
                <h1 id="secondary">Hire Employees</h1>
              </>
            ) : (
              ""
            )}
          </FooterLinks>
          <FooterLinks>
            {toggleState === 3 ? (
              <h1 id="main" onClick={() => toggleTab(0)} role="presentation">
                How it works
                <DownOutlined className="icon" />
              </h1>
            ) : (
              <h1 id="main" onClick={() => toggleTab(3)} role="presentation">
                How it works
                <UpOutlined className="icon" />
              </h1>
            )}
            {toggleState === 3 ? (
              <>
                <h1 id="secondary">Hire Employees</h1>
                <h1 id="secondary">Hire Employees</h1>
                <h1 id="secondary">Hire Employees</h1>
                <h1 id="secondary">Hire Employees</h1>
              </>
            ) : (
              ""
            )}
          </FooterLinks>
        </FooterLinksmain2>
      </FooterContainerTop>
      <FooterContainerBottom>
        <div id="copy">
          <h1>© Copyright Deel 2021. All Rights Reserved.</h1>
        </div>
        <div id="FooterLinks">
          <h1>Disclamer</h1>
          <h1>Private Policy</h1>
          <h1>Terms And Conditions</h1>
          <h1>Cookie Policy</h1>
          <h1>Cookies</h1>
        </div>
      </FooterContainerBottom>
    </FooterContainer>
  )
}
export default Footer
