import styled from "styled-components"
import * as palette from "../../../../styles/variables"

export const BannerSection = styled.div`
  width: 100%;
  height: 49vw;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: linear-gradient(180deg, #00ac6b, #00ac6b);
  position: relative;
  #banner_container {
    text-align: right;
    width: fit-content;
    margin: auto 10.7913669064748vw auto auto;
  }
  #banner_container h1 {
    font-weight: 200;
    font-size: 2.9vw;
    line-height: 1.3;
    margin-left: auto;
    color: white;
    font-weight: 300;
  }
  #banner_container h2 {
    color: white;
    font-weight: 700;
    font-size: 6.90647482014388vw;
    line-height: 9vw;
  }
  #banner_container p {
    font-weight: 500;
    font-size: 1.43884892086331vw;
    line-height: 1.6;
    width: 38.1294964028777vw;
    text-align: left;
    margin-left: auto;
    margin-top: 2.15827338129496vw;
    color: white;
  }
  #banner_container button {
    border: none;
    outline: none;
    color: #fff;
    width: 13.8424460431655vw;
    height: 3.45323741007194vw;
    font-size: 1.00719424460432vw;
    border-radius: 3.59712230215827vw;
    margin: 1.43884892086331vw 24.4604316546763vw 0 0;
    cursor: pointer;
    border-color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
    cursor:pointer;
  }
`
export const ImageConteiner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity:0.3;
  #popvideo {
    height: 49vw;
  }
`
export const ButtonSection = styled.div`
  width: fit-content;
  display: flex;
  margin: auto;
  padding: 10.7913669064748vw 0;
  button {
    font-size: 1.00719424460432vw;
    border-radius: 3.59712230215827vw;
    cursor: pointer;
    border: 0.0719424460431655vw solid ${palette.SECONDARY_TXT_COLOR};
    color: ${palette.SECONDARY_TXT_COLOR};
    padding: 0.719424460431655vw 2.51798561151079vw;
    background: transparent;
    font-size: 1.00719424460432vw;
    margin-left: 1.43884892086331vw;
  }
`
export const MatterConteiner = styled.div`
  width: 81.6546762589928vw;
  margin: auto;
  padding: 0 0.863309352517986vw 0 0.863309352517986vw;
  h1 {
    font-size: 3.45323741007194vw;
    margin-bottom: 1.15107913669065vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    line-height: 1.36;
    font-weight: 700;
  }
`
export const MatterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 3.59712230215827vw;
  p {
    font-size: 1.15107913669065vw;
    text-align: justify;
    line-height: 1.72;
  }
`
export const CardContainer = styled.div`
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
      width: 42.4460431654676vw;
      height: 56.8345323741007vw;
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
    font-size: 2vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
  }
  #Matters_mini_conteiner2 p {
    font-size: 1vw;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
`
export const FlexibilitySection = styled.div`
  position: relative;
  width: 86.9064748201439vw;
  margin: auto;
  padding: 10.7913669064748vw 0;
`
export const ImageContainer2 = styled.div`
  position: absolute;
  z-index: -1;
  img {
    border-radius: 1.15107913669065vw;
  }
`
export const DataContainer = styled.div`
  background-color: ${palette.APP_BACKGROUND_COLOR};
  padding: 3.45323741007194vw 10vw 3.45323741007194vw 3.453237vw;
  border-top-right-radius: 1.15107913669065vw;
  border-bottom-right-radius: 1.15107913669065vw;
  width: 56.1151079136691vw;
  margin-top:21.5vw;
  h1 {
    font-size: 3.4vw;
    line-height: 1.36;
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-bottom:2.01438848920863vw;
  }
   p {
    font-size: 1.15107913669065vw;
    line-height: 1.72;
    font-weight: 400;
  }
`
