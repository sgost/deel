import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const FooterContainer = styled.div`
  background-color: ${palette.PRIMARY_TXT_COLOR};
  padding: 3.59712230215827vw 7.19424460431655vw 0 7.19424460431655vw;
  @media (max-width: 750px) {
    padding: 20vw 8vw;
  }
`
export const FooterContainerTop = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`
export const FooterContainerBottom = styled.div`
  display: flex;
  padding: 2.15827338129496vw 0;
  border-top: 1px solid #b1e7eb;
  margin: 80px 0 0 0;
  #copy h1 {
    color: #b1e7eb;
    font-size: 0.863309352517986vw;
    line-height: 1.36;
    font-weight: 500;
  }
  #FooterLinks {
    display: flex;
    width: fit-content;
    margin: 0 0 0 auto;
  }
  #FooterLinks h1 {
    color: #b1e7eb;
    font-size: 0.863309352517986vw;
    line-height: 1.36;
    font-weight: 500;
    margin-left: 3.23741007194245vw;
  }
  @media (max-width: 750px) {
    flex-direction: column-reverse;
    border: none;
    #copy h1 {
      color: #b1e7eb;
      font-size: 3.5vw;
      line-height: 1.36;
      font-weight: 500;
      text-align: center;
      margin: 5vw 0 0 0;
    }
    #FooterLinks h1 {
      font-size: 3.5vw;
      margin: 0;
    }
    #FooterLinks {
      display: grid;
      grid-template-columns: repeat(2, auto);
      margin: 0;
      gap: 5vw;
      border-bottom: 1px solid #b1e7eb;
      width: 100%;
      padding-bottom: 18vw;
    }
  }
`
export const FooterLogo = styled.div``
export const FooterLogoTop = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2.15827338129496vw;
  @media (max-width: 750px) {
    display: none;
  }
`
export const FooterLogoBottom = styled.div`
  font-size: 1.43884892086331vw;
  color: white;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1.43884892086331vw;
  width: fit-content;
  margin-top: 1.43884892086331vw;
  @media (max-width: 750px) {
    gap: 5vw;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${palette.SECONDARY_TXT_COLOR};
      width: 12vw;
      height: 12vw;
      font-size: 6vw;
      border-radius: 8vw;
    }
  }
`
export const FooterLinksmain = styled.div`
  width: fit-content;
  display: flex;
  margin-left: auto;
  @media (max-width: 750px) {
    display: none;
    width: 100%;
    margin: 5vw 0 0 0;
    flex-direction: column;
  }
`

export const FooterLinksmain2 = styled.div`
  width: fit-content;
  display: none;
  margin-left: auto;
  @media (max-width: 750px) {
    display: flex;
    width: 100%;
    margin: 5vw 0 0 0;
    flex-direction: column;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4.31654676258993vw 0 auto;
  #main {
    color: white;
    font-size: 1.51079136690647vw;
    font-weight: 500;
    margin-bottom: 1.15107913669065vw;
    .icon {
      display: none;
    }
  }
  #secondary {
    color: white;
    font-size: 1.00719424460432vw;
    font-weight: 500;
    margin-bottom: 1.15107913669065vw;
  }
  @media (max-width: 750px) {
    margin: 0;
    #main {
      font-size: 6vw;
      margin: 11vw 0 4vw 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .icon {
        display: flex;
        margin-left: auto;
      }
    }
    #secondary {
      font-size: 4vw;
      margin: 2vw 0;
    }
  }
`
