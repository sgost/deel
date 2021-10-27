import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const DeelSection = styled.div`
  width: 80%;
  height: 49vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10.7913669064748vw 0 30vw 0;
  margin: auto;
  h1 {
    font-size: 3.02158273381295vw;
    font-weight: bold;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  p {
    font-size: 1.15107913669065vw;
    font-weight: 400;
    width: 50.3597122302158vw;
    line-height: 1.72;
    text-align: center;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 1.43884892086331vw auto 1.72661870503597vw auto;
  }
  @media (max-width: 750px) {
    height: fit-content;
    h1 {
      font-size: 9vw;
    }
    p {
      font-size: 4.5vw;
      width: 100%;
      margin: 6vw auto;
    }
  }
`
export const DeelSectionContainerMain = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 2.30215827338129vw;
  @media (max-width: 750px) {
    grid-template-columns: auto;
    grid-column-gap: 0;
    grid-row-gap: 20vw;
  }
`
export const DeelSectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.15107913669065vw;
  // @media (max-width: 750px) {
  //   width:100%;
  //   border:1px solid red;
  // }
`
export const ImageContainer = styled.div`
  width: 25.1079136690647vw;
  height: 25.1079136690647vw;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 750px) {
    width: 90vw;
    height: 90vw;
  }
`
export const Mattercontainer = styled.div`
  position: absolute;
  margin: auto auto 0 auto;
  bottom: -3.59712230215827vw;
  box-shadow: 0 0.287769784172662vw 0.575539568345324vw 0 rgb(0 0 0 / 8%);
  width: 90%;
  padding: 1.58273381294964vw 2.87769784172662vw;
  background: white;
  border-radius: 1.15107913669065vw;
  h2 {
    font-size: 1.15107913669065vw;
    font-weight: 500;
    text-align: center;
    line-height: 2vw;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  @media (max-width: 750px) {
    position: absolute;
    margin: auto auto 0 auto;
    bottom: -13vw;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
    padding: 4vw 2vw;
    border-radius: 3vw;
    h2 {
      font-size: 3.9vw;
      line-height: 6vw;
      width: 50vw;
      margin: auto;
    }
  }
`
