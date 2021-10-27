import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const ComplaintSection = styled.div`
  width: 80%;
  margin: auto;
  padding: 10.7913669064748vw 0 5vw 0;
  h1 {
    font-weight: bold;
    text-align: center;
    font-size: 4.60431654676259vw;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 9vw;
    }
  }
`
export const ComplaintContainerMain = styled.div`
  margin: 5vw auto auto auto;
  display: grid;
  grid-template-columns: auto auto;
  gap: 4.60431654676259vw;
  @media (max-width: 750px) {
    width: 100%;
    grid-template-columns: auto;
    gap:20vw;
    margin: 25vw auto 29vw auto;
  }
`
export const ComplaintContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  @media (max-width: 750px) {
    width: 100%;
    flex-direction: column;
  }
`
export const ComplaintContainerIcon = styled.div`
  img {
    width: 4.31654676258993vw;
    height: 9.92805755395683vw;
  }
  @media (max-width: 750px) {
    img {
      width: 20vw;
      height: 20vw;
    }
  }
`
export const ComplaintContainerMatter = styled.div`
  height: fit-content;
  margin-left: 3.59712230215827vw;
  h1 {
    font-size: 1.43884892086331vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
    line-height: 1.4;
    text-align: left;
  }
  h2 {
    font-size: 1.15107913669065vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 400;
    line-height: 1.6;
    width: 27.841726618705vw;
  }
  @media (max-width: 750px) {
    margin: 0;
    width: 100%;
    text-align: center;
    h1 {
        font-size: 5.5vw;
        text-align: center;
        font-weight: 500;
        margin:3vw auto auto auto;
    }
    h2 {
        font-size: 4.5vw;
        width: 100%;
        margin:3vw auto auto auto;
      }
  }
`
