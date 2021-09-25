import styled from "styled-components"
import * as palette from "../../../../styles/variables"

export const PayRollSection = styled.div`
  padding: 10vw 0;
  background: #f3f3f3;
`
export const CardContainer = styled.div`
  #CardsContainer #Cards {
    display: flex;
    width: fit-content;
    margin: auto;
  }
  #CardsContainer #Cards:nth-child(even) {
    flex-direction: row-reverse;
  }
  #CardsContainer #Cards #cardData {
    width: 37.5539568345324vw;
    height: fit-content;
    margin: auto;
  }
  #CardsContainer #Cards #cardData h1 {
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 3.45323741007194vw;
    width: 37.5539568345324vw;
  }
  #CardsContainer #Cards #cardData h2 {
    font-size: 1.15107913669065vw;
    font-weight: 400;
    line-height: 1.72;
  }
  #CardsContainer #Cards #cardImage {
    width: fit-content;
    height: fit-content;
    img {
      width: 40vw;
      height: 22.0467625899281vw;
    }
  }
  #CardsContainer #Cards:nth-child(even) #cardImage {
    margin: 0 0 0 auto;
  }
  #Matters_mini_conteiner {
    display: grid;
    grid-template-columns: 365px 365px 365px;
    gap: 50px 40px;
    width: fit-content;
    margin: 80px auto auto auto;
  }
  #Matters_mini_conteiner_matter {
    display: flex;
  }
  #Matters_mini_conteiner2 {
    margin-left: 20px;
  }
  #Matters_mini_conteiner2 h1 {
    margin-bottom: 25px;
    font-size: 18px;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
  }
  #Matters_mini_conteiner2 p {
    font-size: 18px;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
`
export const CardContainer2 = styled.div`
  #CardsContainer #Cards {
    display: flex;
    padding-top: 10.7913669064748vw;
  }
  #CardsContainer #Cards:nth-child(even) {
    flex-direction: row-reverse;
  }
  #CardsContainer #Cards #cardData {
    width: 37.5539568345324vw;
    height: fit-content;
    margin: auto;
  }
  #CardsContainer #Cards #cardData h1 {
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 3.45323741007194vw;
    width: 37.5539568345324vw;
  }
  #CardsContainer #Cards #cardData h2 {
    font-size: 1.15107913669065vw;
    font-weight: 400;
    line-height: 1.72;
    margin: 2.15827338129496vw 0 1.58273381294964vw 0;
  }
  #CardsContainer #Cards #cardImage {
    width: fit-content;
    height: fit-content;
    img {
      width: 44.8920863309352vw;
      height: 32.3021582733813vw;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }
  #CardsContainer #Cards #cardData #link {
    color: ${palette.SECONDARY_TXT_COLOR};
    font-size: 1.51079136690647vw;
    font-weight: 400;
    line-height: 1.72;
  }
  #CardsContainer #Cards:nth-child(even) #cardImage {
    margin: 0 0 0 auto;
  }
  #Matters_mini_conteiner {
    display: grid;
    grid-template-columns: 550px 550px;
    gap: 50px 40px;
    margin: auto;
    width: fit-content;
    margin: auto;
    padding-top: 80px;
  }
  #Matters_mini_conteiner_matter {
    display: flex;
  }
  #Matters_mini_conteiner2 {
    margin-left: 20px;
  }
  #Matters_mini_conteiner2 h1 {
    margin-bottom: 25px;
    font-size: 18px;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
  }
  #Matters_mini_conteiner2 p {
    font-size: 18px;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
`

export const EmployeesDeel = styled.div`
background:#f3f3f3;
padding:0 50px 150px 50px;
  h1 {
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 41px;
    margin-bottom:50px;
  }
  #Matters_mini_card {
    display: grid;
    grid-template-columns: repeat(3, 436px);
    width: fit-content;
    margin: auto;
    gap:60px 40px;
  }
  #Matters_mini_conteiner2 img {
    width: 120px;
    height: 120px;
  }
  #Matters_mini_conteiner2 h1 {
    margin: 10px 0;
    font-size: 20px;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
  }
  #Matters_mini_conteiner2 p {
    font-size: 18px;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
`
