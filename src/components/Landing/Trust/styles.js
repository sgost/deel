import styled from "styled-components"
import * as palette from "../../../styles/variables"

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
  #Trust_container3 {
    display: none;
  }
  #button {
    display: none;
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
  #CardsContainer #Cards #cardImage {
    width: fit-content;
    height: fit-content;
    margin-left: auto;
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
    display: flex;
    transition: 0.5s ease-out;
    .icon {
      margin: 0.719424460431655vw 0 0 0.719424460431655vw;
    }
  }
  #CardsContainer #Cards #cardData #link:hover {
    transition: 0.5s ease-out;
    .icon {
      margin: 0.719424460431655vw 0 0 1vw;
      transition: 0.5s ease-out;
    }
  }
  #CardsContainer #Cards:nth-child(even) #cardImage {
    margin: 0 auto 0 0;
  }

  @media (max-width: 750px) {
    padding: 20vw 0 6vw 0;
    #Trust_container h1 {
      font-size: 9vw;
      font-weight: bold;
      line-height: 11vw;
      width: 90vw;
      text-align: center;
      color: #15357a;
    }
    #Trust_container h2 {
      font-size: 4vw;
      font-weight: 400;
      line-height: 10vw;
      width: 90vw;
      text-align: center;
      margin-top: 5vw;
      color: #15357a;
      text-align: center;
    }
    #Trust_container2 {
      display: none;
    }
    #Trust_container3 {
      display: flex;
      margin: 8vw 0 5vw 0;
      img {
        width: 30vw;
        height: 10vw;
        margin-left: 20vw;
      }
      img:first-child {
        margin-left: 0;
      }
    }
    #button {
      display: flex;
      background: ${palette.SECONDARY_TXT_COLOR};
      color: white;
      margin: 2vw auto auto auto;
      border: none;
      padding: 3vw 9vw;
      border-radius: 8vw;
    }
    #CardsContainer {
      padding:30vw 0;
    }
    #CardsContainer #Cards {
      display: flex;
      flex-direction: column-reverse;
      padding: 20vw 0 0 0;
    }
    #CardsContainer #Cards:nth-child(even) {
      flex-direction: column-reverse;
      padding: 20vw 0 0 0;
    }
    #CardsContainer #Cards #cardImage {
      width: 100%;
      height: 100vw;
      margin: auto;
    }
    #CardsContainer #Cards #cardImage img {
      width: 100%;
      height: 100%;
    }
    #CardsContainer #Cards #cardData {
      width: 100%;
      margin: 20vw 0 0 0;
      text-align: center;
    }
    #CardsContainer #Cards #cardData h1 {
      font-size: 8.5vw;
      width: 85vw;
      margin: auto;
    }
    #CardsContainer #Cards #cardData h2 {
      font-size: 4vw;
      line-height: 8vw;
      margin: 3vw 0;
    }
    #CardsContainer #Cards #cardData #link {
      font-size: 4vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #CardsContainer #Cards #cardData #link .icon {
      margin-left: 3vw;
    }
  }
`
