import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const BannerSection = styled.div`
  width: 100%;
  height: 49vw;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  #banner_container {
    width: fit-content;
    margin: auto 10.7913669064748vw auto auto;
  }
  #banner_container h1 {
    width: 34.5323741007194vw;
    font-weight: 200;
    font-size: 4.60431654676259vw;
    line-height: 1.3;
    color: white;
  }
  #banner_container h2 {
    color: white;
    font-weight: 700;
    font-size: 6.90647482014388vw;
    margin: 2.15827338129496vw 0;
  }
  #banner_container p {
    font-weight: 500;
    font-size: 1.43884892086331vw;
    line-height: 1.6;
    width: 38.1294964028777vw;
    margin-top: 2.15827338129496vw;
    color: white;
  }
  #banner_container button {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    width: 13.8424460431655vw;
    height: 3.45323741007194vw;
    font-size: 1.00719424460432vw;
    border-radius: 3.59712230215827vw;
    margin: 1.43884892086331vw 24.4604316546763vw 0 0;
    cursor: pointer;
    border: 0.1vw solid white;
  }
  @media (max-width: 750px) {
    height: 190vw;
    #banner_container {
      margin: 30vw auto auto auto;
      text-align: center;
    }
    #banner_container h1 {
      width: 100%;
      font-weight: 300;
      font-size: 7vw;
      line-height: 1.3;
      color: white;
      text-align: center;
      margin: auto;
    }
    #banner_container h2 {
      color: white;
      font-weight: 700;
      font-size: 11.9vw;
      margin: 2.15827338129496vw 0 7vw 0;
      text-align: center;
    }
    #banner_container p {
      font-weight: 500;
      font-size: 4.5vw;
      line-height: 1.6;
      width: 85vw;
      text-align: left;
      color: white;
      margin: 5vw auto 15vw auto;
      text-align: center;
    }
    #banner_container button {
      background: transparent;
      border: 0.5vw solid white;
      outline: none;
      color: #fff;
      width: 53vw;
      height: 16vw;
      font-size: 4.2vw;
      border-radius: 8vw;
      margin: 2vw auto auto auto;
    }
  }
`
export const ImageConteiner = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  #img1 {
    height: 49vw;
  }
  @media (max-width: 750px) {
    #img1 {
      height: 190vw;
    }
  }
`
export const MatterConteiner = styled.div`
  width: 81.6546762589928vw;
  margin: auto;
  padding: 8vw 0.863309352517986vw 8vw 0.863309352517986vw;
  h1 {
    font-size: 3.45323741007194vw;
    margin-bottom: 1.15107913669065vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    line-height: 1.36;
    font-weight: 700;
  }
  @media (max-width: 750px) {
    width: 87.654676vw;
    padding: 35vw 0 0 0;
    h1 {
      font-size: 8vw;
      margin-bottom: 5vw;
      color: #15357a;
      line-height: 1.36;
      font-weight: 700;
    }
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
  @media (max-width: 750px) {
    grid-template-columns: auto;
    padding: 5vw 0 0 0;
    p {
      font-size: 5vw;
      text-align: justify;
      line-height: 1.72;
    }
  }
`

export const TrustSection1 = styled.div`
  margin: auto;
  padding: 0 10.7913669064748vw 0 8vw;
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
  #CardsContainer #Cards {
    display: flex;
    padding-top: 10.7913669064748vw;
  }
  #CardsContainer #Cards:nth-child(even) {
    flex-direction: row-reverse;
  }
  #CardsContainer #Cards #cardData {
    width: 25vw;
    height: fit-content;
    margin: auto auto auto 0;
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
  #CardsContainer #Cards #cardData #cardData_b_points {
    display: flex;
    font-size: 1vw;
    font-weight: 400;
    line-height: 1.72;
    margin: 2.15827338129496vw 0 1.58273381294964vw 0;
    align-items: center;
    color: ${palette.PRIMARY_TXT_COLOR};
    p {
      margin-left: 1.2vw;
    }
  }
  #CardsContainer #Cards #cardImage {
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    img {
      width: 42.4460431654676vw;
      height: 42vw;
    }
  }
  #CardsContainer #Cards:nth-child(even) #cardImage {
    margin: 0 auto 0 0;
  }

  @media (max-width: 750px) {
    margin: auto;
    padding: 23vw 5vw;
    #Trust_container h1 {
      font-size: 7vw;
      width: 100%;
    }
    #Trust_container h2 {
      font-size: 5vw;
      width: 100%;
      margin-top: 4vw;
    }
    #CardsContainer #Cards {
      display: flex;
      padding-top: 0;
      flex-direction: column;
    }
    #CardsContainer #Cards #cardImage {
      height: fit-content;
      width: 100%;
      height: 70vw;
      margin: 16vw 0 0 0;
      position: relative;
    }
    #CardsContainer #Cards #cardImage img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    #CardsContainer #Cards #cardData {
      width: 100%;
      height: fit-content;
      margin: 0;
      text-align: center;
    }
    #CardsContainer #Cards #cardData h1 {
      font-size: 6.453237vw;
      width: 100%;
    }
    #CardsContainer #Cards #cardData h2 {
      font-size: 4.151079vw;
      margin: 6vw 0 0 0;
    }
    #CardsContainer #Cards #cardData #cardData_b_points .icon {
      font-size: 4vw;
    }
    #CardsContainer #Cards #cardData #cardData_b_points p {
      margin-left: 4.2vw;
    }
    #CardsContainer #Cards:nth-child(even) {
      flex-direction: column;
    }
    #CardsContainer #Cards:nth-child(even) #cardImage {
      margin: 11vw 0 0 0;
    }
  }
`

export const TrustSection2 = styled.div`
  margin: auto;
  background: #f3f3f3;
  padding: 0 8vw 8vw 8vw;
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
  #CardsContainer #Cards {
    display: flex;
    padding-top: 10.7913669064748vw;
  }
  #CardsContainer #Cards:nth-child(odd) {
    flex-direction: row-reverse;
  }
  #CardsContainer #Cards #cardData {
    width: 25vw;
    height: fit-content;
    margin: auto auto auto 0;
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
  #CardsContainer #Cards #cardData #cardData_b_points {
    display: flex;
    font-size: 1vw;
    font-weight: 400;
    line-height: 1.72;
    margin: 2.15827338129496vw 0 1.58273381294964vw 0;
    align-items: center;
    color: ${palette.PRIMARY_TXT_COLOR};
    p {
      margin-left: 1.2vw;
    }
  }
  #CardsContainer #Cards #cardImage {
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    img {
      width: 42.4460431654676vw;
      height: 37vw;
    }
  }
  #CardsContainer #Cards:nth-child(odd) #cardImage {
    margin: 0 0 0 auto;
  }

  @media (max-width: 750px) {
    margin: auto;
    padding: 23vw 5vw;
    #Trust_container h1 {
      font-size: 7vw;
      width: 100%;
    }
    #Trust_container h2 {
      font-size: 5vw;
      width: 100%;
      margin-top: 4vw;
    }
    #CardsContainer #Cards:nth-child(odd) {
      display: flex;
      padding-top: 0;
      flex-direction: column;
    }
    #CardsContainer #Cards #cardImage {
      height: fit-content;
      width: 100%;
      height: 70vw;
      margin: 16vw 0 0 0;
      position: relative;
    }
    #CardsContainer #Cards #cardImage img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    #CardsContainer #Cards #cardData {
      width: 100%;
      height: fit-content;
      margin: 10vw ???0 0 0;
      text-align: center;
    }
    #CardsContainer #Cards #cardData h1 {
      font-size: 6.453237vw;
      width: 100%;
    }
    #CardsContainer #Cards #cardData h2 {
      font-size: 4.151079vw;
      margin: 6vw 0 0 0;
    }
    #CardsContainer #Cards #cardData #cardData_b_points .icon {
      font-size: 4vw;
    }
    #CardsContainer #Cards #cardData #cardData_b_points p {
      margin-left: 4.2vw;
    }
    #CardsContainer #Cards:nth-child(even) {
      flex-direction: column;
    }
    #CardsContainer #Cards:nth-child(even) #cardImage {
      margin: 11vw 0 0 0;
    }
  }
`
export const EmployeesDeel = styled.div`
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
    opacity: 0.9;
  }
  #Matters_mini_conteiner2 p {
    font-size: 1.29496402877698vw;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
    opacity: 0.9;
  }
  @media (max-width: 750px) {
    padding: 0vw 5vw;
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
export const TrustSection3 = styled.div`
  margin: auto;
  padding: 0 8vw 10vw 8vw;
  #NavContainers2 {
    display: none;
  }
  #CardsContainer #Cards {
    display: flex;
    padding-top: 10.7913669064748vw;
  }
  #CardsContainer #Cards:nth-child(even) {
    flex-direction: row-reverse;
  }
  #CardsContainer #Cards #cardData {
    width: 25vw;
    height: fit-content;
    margin: auto auto auto 0;
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
  #CardsContainer #Cards #cardData #cardData_b_points {
    display: flex;
    font-size: 1vw;
    font-weight: 400;
    line-height: 1.72;
    margin: 2.15827338129496vw 0 1.58273381294964vw 0;
    align-items: center;
    color: ${palette.PRIMARY_TXT_COLOR};
    p {
      margin-left: 1.2vw;
    }
  }
  #CardsContainer #Cards #cardImage {
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    img {
      width: 42.4460431654676vw;
      height: 42vw;
    }
  }
  #CardsContainer #Cards:nth-child(even) #cardImage {
    margin: 0 auto 0 0;
  }

  @media (max-width: 750px) {
    margin: auto;
    padding: 10vw 0 23vw 0;
    #Trust_container h1 {
      font-size: 7vw;
      width: 100%;
    }
    #Trust_container h2 {
      font-size: 5vw;
      width: 100%;
      margin-top: 4vw;
    }
    #CardsContainer {
      padding: 0 5vw;
    }
    #CardsContainer #Cards {
      padding-top: 30vw;
    }
    #CardsContainer #Cards:nth-child(odd) {
      display: flex;
      padding-top: 0;
      flex-direction: column-reverse;
    }
    #CardsContainer #Cards #cardImage {
      height: fit-content;
      width: 100%;
      height: 70vw;
      margin: 16vw 0 0 0;
      position: relative;
    }
    #CardsContainer #Cards #cardImage img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    #CardsContainer #Cards #cardData {
      width: 100%;
      height: fit-content;
      margin: 0;
      text-align: center;
    }
    #CardsContainer #Cards #cardData h1 {
      font-size: 6.453237vw;
      width: 100%;
    }
    #CardsContainer #Cards #cardData h2 {
      font-size: 4.151079vw;
      margin: 6vw 0 0 0;
    }
    #CardsContainer #Cards #cardData #cardData_b_points .icon {
      font-size: 4vw;
    }
    #CardsContainer #Cards #cardData #cardData_b_points p {
      margin-left: 4.2vw;
    }
    #CardsContainer #Cards:nth-child(even) {
      flex-direction: column;
    }
    #CardsContainer #Cards:nth-child(even) #cardImage {
      margin: 11vw 0 0 0;
    }
  }
`

export const FlexibilitySection = styled.div`
  position: relative;
  width: 86.9064748201439vw;
  margin: auto;
  padding-top: 10.7913669064748vw;
  @media (max-width: 750px) {
    width: 100%;
    height: 160vw;
    padding: 10vw 0 38vw 0;
  }
`
export const ImageContainer2 = styled.div`
  position: absolute;
  z-index: -1;
  img {
    border-radius: 1.15107913669065vw;
  }
  @media (max-width: 750px) {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4vw;
    }
  }
`
export const DataContainer = styled.div`
  background-color: ${palette.APP_BACKGROUND_COLOR};
  padding: 3.45323741007194vw 10vw 3.45323741007194vw 3.453237vw;
  border-top-right-radius: 1.15107913669065vw;
  border-bottom-right-radius: 1.15107913669065vw;
  width: 56.1151079136691vw;
  margin-top: 22vw;
  h1 {
    font-size: 3.4vw;
    line-height: 1.36;
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-bottom: 2.01438848920863vw;
  }
  p {
    font-size: 1.15107913669065vw;
    line-height: 1.72;
    font-weight: 400;
  }
  @media (max-width: 750px) {
    width: 91vw;
    padding: 9vw 5vw;
    border-radius: 0;
    border-top-right-radius: 4vw;
    border-bottom-right-radius: 4vw;
    margin: 45vw 0 0 0;
    h1 {
      font-size: 9vw;
      width: 70vw;
    }
    p {
      font-size: 5vw;
      margin-top: 8vw;
    }
  }
`
