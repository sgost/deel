import styled from "styled-components"
import * as palette from "../../../../styles/variables"

export const RegisterSection = styled.div`
  width: 100%;
  height: 59vw;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
`
export const ImageConteiner = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  #img1 {
    height: 59vw;
  }
`
export const RegisterContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  #Register_matter {
    text-align: left;
    width: 460px;
    margin: auto 10.7913669064748vw auto auto;
  }
  #Register_matter h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.1;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 0 0 24px 0;
  }
  #Register_matter p {
    font-size: 24px;
    line-height: 1.72;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #Register_form {
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 8px 22px 0 rgb(19 21 51 / 12%);
    background-color: #fff;
    width: 560px;
  }
  #Register_form h1 {
    font-weight: 600;
    color: ${palette.PRIMARY_TXT_COLOR};
    line-height: 1.4;
    font-size: 28px;
    margin: 0 0 24px 0;
  }
  #Register_form_real {
    display: grid;
    grid-template-columns: auto;
    gap: 28px;
  }
  #Register_form_real #input1 {
    display: flex;
    flex-direction: column;
  }
  #Register_form_real input {
    height: 48px;
    border: 1px solid #cfd0d6;
    border-radius: 2px;
    background-color: transparent;
    width: 100%;
    outline: none;
    padding: 20px;
  }
  #Register_form_real label {
    margin-bottom: 8px;
    color: #131533;
    font-size: 13px;
    line-height: 1.5;
    font-weight: 400;
  }
  #Register_form #input2 {
    display: grid;
    grid-template-columns: repeat(2, 47.5%);
    gap: 5%;
  }
  #Register_form #input2 #input2_b1 {
    width: 100%;
  }
  #Register_form #input1 #input_select {
    height: 48px;
    border: 1px solid #cfd0d6;
    border-radius: 2px;
    background-color: transparent;
    width: 100%;
    outline: none;
    padding: 20px;
  }
  #Register_form #input button {
    width: 100%;
    height: 47px;
    background-color: ${palette.SECONDARY_TXT_COLOR};
    border-radius: 50px;
    border:none;
    outline:none;
    color: white;
  }
`

export const TrustSection = styled.div`
  width: 90%;
  margin: auto;
  padding: 10.7913669064748vw 0 0 0;
  #NavContainers2 {
    display: none;
  }
  #Trust_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #Trust_container h1 {
    font-size: 2.94964028776978vw;
    font-weight: bold;
    line-height: 1.36;
    width: 67.2856115107914vw;
    text-align: center;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #Trust_container h2 {
    font-size: 1.15107913669065vw;
    font-weight: 400;
    line-height: 1.72;
    width: 67.2856115107914vw;
    text-align: center;
    margin-top: 0.719424460431655vw;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #Trust_container2 {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(2, auto);
    gap: 1.43884892086331vw 4.31654676258993vw;
    width: fit-content;
    height: fit-content;
    margin: 2.87769784172662vw auto 0 auto;
    img {
      width: 11.5107913669065vw;
      height: 4.31654676258993vw;
    }
  }
`

export const Solution = styled.div`
  margin: 0;
  padding: 150px 0;
  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.1;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 0 auto 24px auto;
    width: 800px;
    text-align: center;
  }
  #card_container {
    width: 100%;
    margin: auto;
  }
  #card_container1_cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 200px 0 0 0;
  }
  #card_container1 {
    padding: 0 0 0 48px;
  }
  #card_container1_cards #card_container_matter {
    width: 450px;
    margin: auto 0 auto 0;
    text-align: left;
  }
  #card_container_matter p1 {
    color: #00ac6b;
    font-weight: 500;
    font-size: 14px;
  }
  #card_container_matter h2 {
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 700;
    font-size: 32px;
    line-height: 1.36;
    margin: 8px 0 16px 0;
  }
  #card_container_matter h3 {
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 24px;
    line-height: 1.72;
    font-weight: 400;
  }
  #card_container_image {
    width: 768px;
    height: 605px;
  }
  #card_container_image img {
    width: 100%;
    height: 100%;
  }

  #card_container1:nth-child(even) {
    padding: 0 48px 0 0;
  }
  #card_container1:nth-child(even) #card_container1_cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 200px 0 0 0;
    flex-direction: row-reverse;
  }
  #card_container1:nth-child(even)
    #card_container1_cards
    #card_container_matter {
    width: 450px;
    margin: auto 0 auto 0;
    text-align: left;
  }
`
