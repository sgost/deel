import styled from "styled-components"
import * as palette from "../../../../styles/variables"

export const PayRollSection = styled.div`
  padding: 10vw 0;
  background: #f3f3f3;
  @media (max-width: 750px) {
    padding: 10vw 0 35vw 0;
    background: white;
  }
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
    grid-template-columns: 26.2589928057554vw 26.2589928057554vw 26.2589928057554vw;
    gap: 3.59712230215827vw 2.87769784172662vw;
    width: fit-content;
    margin: 5.75539568345324vw auto auto auto;
  }
  #Matters_mini_conteiner_matter {
    display: flex;
  }
  #Matters_mini_conteiner2 {
    margin-left: 1.43884892086331vw;
  }
  #Matters_mini_conteiner2 h1 {
    margin-bottom: 1.79856115107914vw;
    font-size: 1.29496402877698vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
  }
  #Matters_mini_conteiner2 p {
    font-size: 1.29496402877698vw;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  @media (max-width: 750px) {
    #CardsContainer #Cards {
      flex-direction: column-reverse;
      padding-top: 40vw;
    }
    #CardsContainer #Cards #cardData {
      width: 100%;
      padding: 20vw 3vw 30vw 3vw;
      text-align: center;
    }
    #CardsContainer #Cards #cardData #link {
      display: none;
    }
    #CardsContainer #Cards #cardImage {
      width: 100%;
      height: 110vw;
      position: relative;
    }
    #CardsContainer #Cards #cardImage img {
      width: 100%;
      height: 100%;
    }
    #CardsContainer #Cards #cardData h1 {
      font-weight: 700;
      color: #15357a;
      font-size: 8vw;
      width: 100%;
    }
    #CardsContainer #Cards #cardData h2 {
      font-size: 4.5vw;
      font-weight: 400;
      line-height: 1.72;
      margin: 3vw 0 6vw 0;
    }
    #Matters_mini_conteiner {
      grid-template-columns: auto;
      gap: 15vw;
      width: 100%;
      padding: 0 3vw;
    }
    #Matters_mini_conteiner2 {
      margin: 0;
      padding-left: 4vw;
    }
    #Matters_mini_conteiner2 h1 {
      margin-bottom: 6vw;
      font-size: 5vw;
    }
    #Matters_mini_conteiner2 p {
      font-size: 5vw;
    }
    #Matters_mini_conteiner_matter #Matters_mini_conteiner1 {
      img {
        width: 50px;
        height: fit-content;
      }
    }
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
      border-top-right-radius: 2.15827338129496vw;
      border-bottom-right-radius: 2.15827338129496vw;
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
    grid-template-columns: 39.568345323741vw 39.568345323741vw;
    gap: 3.59712230215827vw 2.87769784172662vw;
    margin: auto;
    width: fit-content;
    margin: auto;
    padding-top: 5.75539568345324vw;
  }
  #Matters_mini_conteiner_matter {
    display: flex;
  }
  #Matters_mini_conteiner2 {
    margin-left: 1.43884892086331vw;
  }
  #Matters_mini_conteiner2 h1 {
    margin-bottom: 1.79856115107914vw;
    font-size: 1.29496402877698vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
  }
  #Matters_mini_conteiner2 p {
    font-size: 1.29496402877698vw;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  @media (max-width: 750px) {
    background: white;
    margin-top: 40vw;
    padding: 0 0 18vw 0;
    #CardsContainer #Cards {
      flex-direction: column;
      padding-top: 0;
    }
    #CardsContainer #Cards:nth-child(even) {
      flex-direction: column-reverse;
      padding-top: 40vw;
    }
    #CardsContainer #Cards #cardData {
      width: 100%;
      padding: 20vw 3vw 30vw 3vw;
      text-align: center;
    }
    #CardsContainer #Cards #cardData #link {
      display: none;
    }
    #CardsContainer #Cards #cardImage {
      width: 100%;
      height: 110vw;
      position: relative;
    }
    #CardsContainer #Cards #cardImage img {
      width: 100%;
      height: 100%;
    }
    #CardsContainer #Cards #cardData h1 {
      font-weight: 700;
      color: #15357a;
      font-size: 8vw;
      width: 100%;
    }
    #CardsContainer #Cards #cardData h2 {
      font-size: 4.5vw;
      font-weight: 400;
      line-height: 1.72;
      margin: 3vw 0 6vw 0;
    }
    #Matters_mini_conteiner {
      grid-template-columns: auto;
      gap: 15vw;
      width: 100%;
      padding: 0 3vw;
    }
    #Matters_mini_conteiner2 {
      margin: 0;
      padding-left: 4vw;
    }
    #Matters_mini_conteiner2 h1 {
      margin-bottom: 6vw;
      font-size: 5vw;
    }
    #Matters_mini_conteiner2 p {
      font-size: 5vw;
    }
    #Matters_mini_conteiner_matter #Matters_mini_conteiner1 {
      img {
        width: 50px;
        height: fit-content;
      }
    }
  }
`

export const EmployeesDeel = styled.div`
  background: #f3f3f3;
  padding: 0 7.19424460431655vw 10.7913669064748vw 7.19424460431655vw;
  h1 {
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 2.94964028776978vw;
    margin-bottom: 3.59712230215827vw;
  }
  #Matters_mini_card {
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: fit-content;
    margin: auto;
    gap: 4.31654676258993vw 2.87769784172662vw;
  }
  #Matters_mini_conteiner2 img {
    width: 8.63309352517986vw;
    height: 8.63309352517986vw;
  }
  #Matters_mini_conteiner2 h1 {
    margin: 0.719424460431655vw 0;
    font-size: 1.43884892086331vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
  }
  #Matters_mini_conteiner2 p {
    font-size: 1.29496402877698vw;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  @media (max-width: 750px) {
    padding: 40vw 5vw;
    h1 {
      font-size: 8.9vw;
      margin-bottom: 3.59712230215827vw;
      text-align: center;
    }
    #Matters_mini_card {
      display: grid;
      grid-template-columns: auto;
      width: fit-content;
      margin: 30vw auto auto auto;
      gap: 28vw;
      text-align: center;
    }
    #Matters_mini_conteiner2 img {
      width: 30vw;
      height: 30vw;
    }
    #Matters_mini_conteiner2 h1 {
      margin: 8vw 0 4vw 0;
      font-size: 5vw;
    }
    #Matters_mini_conteiner2 p {
      font-size: 5vw;
    }
  }
`
