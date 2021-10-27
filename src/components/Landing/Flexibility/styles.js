import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const FlexibilitySection = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
  padding-top: 10.7913669064748vw;
  @media (max-width: 750px) {
    width: 100%;
    height: fit-content;
  }
`
export const ImageContainer = styled.div`
  position: absolute;
  z-index: -1;
  img {
    border-radius: 1.15107913669065vw;
  }
  @media (max-width: 750px) {
    height: 190vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
`
export const DataContainer = styled.div`
  margin: 7.19424460431655vw 20.1438848920863vw 4.31654676258993vw
    7.19424460431655vw;
  background-color: ${palette.APP_BACKGROUND_COLOR};
  padding: 3.45323741007194vw;
  border-radius: 1.15107913669065vw;
  width: fit-content;
  h1 {
    font-size: 3.02158273381295vw;
    line-height: 1.36;
    font-weight: 700;
    width: 54.3165467625899vw;
  }
  #data_matter {
    display: grid;
    grid-template-columns: repeat(2, 25.1798561151079vw);
    gap: 0 3.59712230215827vw;
    margin: 1.43884892086331vw 0;
  }
  #data_matter p {
    font-size: 1.15107913669065vw;
    line-height: 1.72;
    font-weight: 400;
  }
  #Link {
    font-size: 1.51079136690647vw;
    color: ${palette.SECONDARY_TXT_COLOR};
    line-height: 1.36;
    font-weight: 500;
    display: flex;
    align-items: center;
    transition: 0.5s ease-in-out;
    .icon {
      margin-left: 1vw;
      transition: 0.5s ease-in-out;
    }
  }
  #Link:hover {
    transition: 0.5s ease-in-out;
    .icon {
      transition: 0.5s ease-in-out;
      margin-left: 2vw;
    }
  }
  @media (max-width: 750px) {
    margin: 15vw auto;
    width: 91vw;
    padding: 9vw 5vw;
    border-radius: 4vw;
    h1 {
      font-size: 9vw;
      width: 70vw;
    }
    #data_matter {
      display: grid;
      grid-template-columns: auto;
      gap: 5vw;
      margin: 5vw 0;
    }
    #data_matter p {
      font-size: 4.5vw;
    }
    #Link {
      font-size: 4vw;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 3vw;
      }
    }
    #Link:hover {
      .icon {
        display: flex;
        margin-left: 4vw;
      }
    }
  }
`
