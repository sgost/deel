import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const TrustSection = styled.div`
  width: 90%;
  margin:auto;
  padding: 10.7913669064748vw 0 0 0;
  #NavContainers2{
    display:none;
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
  #CardsContainer #Cards {
    display: flex;
    padding-top:10.7913669064748vw;
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
  }
  #CardsContainer #Cards:nth-child(even) #cardImage {
    margin: 0 auto 0 0;
  }
`
