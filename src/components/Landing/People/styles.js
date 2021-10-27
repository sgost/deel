import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const PeopleSection = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 10.7913669064748vw;
  position: relative;
  h1 {
    font-size: 3.02158273381295vw;
    font-weight: 700;
    width: 43.1654676258993vw;
  }
  #PeopleContainer {
    display: flex;
    margin: 3.59712230215827vw auto 0 auto;
  }
  #PeopleNames {
    width: 30%;
    #people_menu {
      font-size: 1.72661870503597vw;
      color: ${palette.PRIMARY_TXT_COLOR};
      font-weight: 400;
      margin-top: 2.15827338129496vw;
    }
    #people_menu:nth-child(1) {
      margin-top: 40%;
    }
    #people_menu2 {
      font-size: 2.01438848920863vw;
      color: ${palette.SECONDARY_TXT_COLOR};
      font-weight: 500;
      margin-top: 2.15827338129496vw;
    }
    #people_menu2:nth-child(1) {
      margin-top: 40%;
    }
  }
  #PeopleContent {
    display: flex;
    width: 80%;
    border: 0.0719424460431655vw solid ${palette.BORDER_COLOR};
    border-radius: 1.15107913669065vw;
    #image_container img {
      width: 29.2086330935252vw;
      height: 100%;
      border-top-left-radius: 1.15107913669065vw;
      border-bottom-left-radius: 1.15107913669065vw;
    }
    #image_matter {
      width: fit-content;
      height: fit-content;
      margin: auto auto auto 2.87769784172662vw;
    }
    #image_matter h1 {
      font-weight: 500;
      font-size: 2.30215827338129vw;
      color: ${palette.PRIMARY_TXT_COLOR};
      width: 26.9784172661871vw;
    }
    #image_matter p {
      font-weight: 400;
      font-size: 1.00719424460432vw;
      color: ${palette.PRIMARY_TXT_COLOR};
      width: 26.9784172661871vw;
      line-height: 1.72;
      margin: 1.43884892086331vw 0;
    }
    #image_matter #Link {
      font-size: 1.51079136690647vw;
      color: ${palette.PRIMARY_TXT_COLOR};
      line-height: 1.36;
      font-weight: 500;
      display: flex;
      align-items: center;
      transition:0.5s ease-in-out;
      .icon{
        margin-left:1vw;
        transition:0.5s ease-in-out;
      }
    }
    #image_matter #Link:hover {
      .icon{
        margin-left:2vw;
      }
    }
  }
}
  #main_carousal_control a {
    display: none;
  }
  #btn {
    position: absolute;
    top: 45%;
    z-index: 5;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    width: 90%;
    padding:40vw 0 30vw 0;
    h1 {
      font-size: 9vw;
      width: 90vw;
      color: ${palette.PRIMARY_TXT_COLOR};
    }
    #PeopleContainer {
      display: flex;
      margin: 39vw auto 0 auto;
    }
    #PeopleNames {
      display: none;
    }
    #PeopleContent {
      width: 100%;
      border: 0.0719424460431655vw solid #cfd0d6;
      border-radius: 5vw;
      flex-direction: column;
    }
    #PeopleContent #image_container {
      height: 80vw;
      overflow: hidden;
      border-top-left-radius: 3vw;
      border-top-right-radius: 3vw;
    }
    #PeopleContent #image_container img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 3vw;
      border-top-right-radius: 3vw;
    }
    #PeopleContent #image_matter {
      margin: 0;
      padding: 9vw 4vw;
    }

    #PeopleContent #image_matter h1 {
      font-weight: 400;
      font-size: 7.8vw;
      color: #15357a;
      width: 75vw;
    }
    #PeopleContent #image_matter p {
      font-size: 4vw;
      width: 100%;
      margin: 3vw 0;
    }
    #PeopleContent #image_matter #Link {
      font-size: 4vw;
      line-height: 1.36;
      font-weight: 500;
      display: flex;
      align-items: center;
    }
    #image_matter #Link:hover {
      .icon{
        margin-left:2vw;
      }
    }
    #btn {
      top: 32%;
    }
  }
`
