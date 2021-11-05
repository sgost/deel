import styled from "styled-components"
import * as palette from "../../styles/variables"

export const LoginSection = styled.div`
  background: #f4f3f6;
  width: 100%;
  height: 100vh;
  #NavContainer #navLogo #logo {
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainer #navLNks #navTitle p {
    display: none;
  }

  #NavContainer #navLNks #nav_link {
    display: none;
  }

  #NavContainer #navBtn #nav_link {
    display: none;
  }
  #NavContainer #navBtn button {
    display: none;
  }
  #NavContainer #nav_link #span {
    display: none;
  }
  #login_main {
    width: 512px;
    margin: auto;
    padding-top: 100px;
  }
  #login_main #login_or {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
  }
  #login_main #login_or span {
    border-top: 0.5px solid gray;
    width: 100%;
  }
  #login_main #login_or p {
    font-size: 15px;
    text-align: center;
    margin: 0 15px;
  }
  #login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  #login h1 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  #login button {
    width: 100%;
    border-radius: 4px;
    outline: none !important;
    cursor: pointer;
    font-weight: 400;
    line-height: 16px;
    text-transform: capitalize;
    position: relative;
    background: white;
    height: 40px;
    border: none;
    position: relative;
  }
  #login button img {
    position: absolute;
    width: 16px;
    left: 20px;
  }
  #login_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 38px 32px;
    background: white;
    border-radius: 4px;
  }
  #login_container h1 {
    font-size: 15px;
    text-align: center;
    margin-bottom: 20px;
  }
  #login_container #login_container_input {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }
  #login_container #login_container_input #login_container_input_b1 {
    width: 100%;
    display: flex;
  }
  #login_container
    #login_container_input
    #login_container_input_b1
    label:nth-child(2) {
    margin-left: auto;
  }
  #login_container #login_container_input label {
    font-size: 12px;
    margin-bottom: 5px;
  }
  #login_container #login_container_input input {
    outline: none;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #e8ebf2;
    padding: 0 5px 0 20px;
    font-size: 15px;
  }
  #login_container #login_container_input button {
    height: 40px;
    color: white;
    background: ${palette.SECONDARY_TXT_COLOR};
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 15px;
  }
  #login_container #login_container_input button:hover {
    background: ${palette.PRIMARY_TXT_COLOR};
  }
  #login_main #login_footer {
    font-size: 15px;
    text-align: center;
    margin-top: 16px;
  }

  @media (max-width: 750px) {
    #login_main {
      width: 93vw;
    }
  }
`
