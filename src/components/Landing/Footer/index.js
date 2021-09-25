import React from "react"
import {
  FooterContainer,
  FooterContainerTop,
  FooterContainerBottom,
  FooterLogo,
  FooterLogoTop,
  FooterLogoBottom,
  FooterLinks,
  FooterLinksmain,
} from "./styles.js"
import { TwitterOutlined, LinkedinOutlined } from "@ant-design/icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerTop>
        <FooterLogo>
          <FooterLogoTop>deel.</FooterLogoTop>
          <FooterLogoBottom>
            <TwitterOutlined />
            <LinkedinOutlined />
            <TwitterOutlined />
            <LinkedinOutlined />
          </FooterLogoBottom>
        </FooterLogo>
        <FooterLinksmain>
          <FooterLinks>
            <Link id="main">How it works</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
          </FooterLinks>
          <FooterLinks>
            <Link id="main">How it works</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
          </FooterLinks>
          <FooterLinks>
            <Link id="main">How it works</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
            <Link id="secondary">Hire Employees</Link>
          </FooterLinks>
        </FooterLinksmain>
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
