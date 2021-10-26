import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const BannerSection = styled.div`
  width: 100%;
  height: 49vw;
  display: flex;
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
    cursor: pointer;
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
`
export const TrustSection = styled.div`
  margin: auto;
  padding: 10.7913669064748vw 10.7913669064748vw 0 8vw;
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
`

export const PeopleSection = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 10.7913669064748vw;
  position: relative;
  #PeopleContainer {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 3.59712230215827vw auto 0 auto;
  }
  #people_menu:nth-child(1) {
    margin-top: 40%;
  }
  #PeopleContent {
    display: flex;
    width: 100%;
    border-radius: 1.15107913669065vw;
    #image_container img {
      width: 42vw;
      height: 100%;
      border-radius: 1.2vw;
    }
    #image_matter {
      width: fit-content;
      height: fit-content;
      margin: 5vw auto auto 2.87769784172662vw;
    }
    #image_matter h1 {
      font-weight: 500;
      font-size: 2.30215827338129vw;
      color: ${palette.PRIMARY_TXT_COLOR};
      width: 40vw;
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
      display: block;
    }
  }
  #PeopleContent2 {
    position: absolute;
    width: 60vw;
    top: 35%;
    left: 30%;
    padding: 2vw 2vw 2vw 3vw;
    border-radius: 1.2vw;
    background: white;
    img {
      width: 11vw;
      border-radius: 1.3vw;
    }
    p {
      font-weight: 600;
      font-size: 4.3vw;
      line-height: 5vw;
      color: #15357a;
      margin: 1vw 0 3vw 0;
    }
    #link {
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
    #link:hover {
      transition: 0.5s ease-out;
      .icon {
        margin: 0.719424460431655vw 0 0 1vw;
        transition: 0.5s ease-out;
      }
    }
  }
  #main_carousal_control a {
    display: none;
  }
  #main_carousal_control a {
    display: none;
  }
  #btn {
    position: absolute;
    top: 23%;
    z-index: 5;
    cursor: pointer;
    right: 1vw;
    display: flex;
    span {
      color: ${palette.PRIMARY_TXT_COLOR};
    }
  }
`

export const EmployeesDeel = styled.div`
  background: white;
  padding: 10vw 0;
  h1 {
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 2.94964028776978vw;
    margin-bottom: 3.59712230215827vw;
    text-align: center;
  }
  #Matters_mini_card {
    display: grid;
    grid-template-columns: repeat(5, auto);
    width: fit-content;
    margin: auto;
    gap: 4.31654676258993vw 1.8vw;
  }
  #Matters_mini_conteiner2 {
    display: flex;
    flex-direction: column;
    padding:2vw;
    border-radius:1.2vw;
    box-shadow:0 1.00719424460432vw 0.863309352517986vw 0 rgb(0 0 0 / 15%);
    transition:0.5s ease-in-out;
    cursor:pointer;
    transform:translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    img {
      width: 8.63309352517986vw;
      height: 8.63309352517986vw;
    }
    p {
      font-size: 1.29496402877698vw;
      line-height: 1.72;
      font-weight: 400;
      color: ${palette.PRIMARY_TXT_COLOR};
      margin: 1.5vw 0 2vw 0;
    }
    #link {
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
    #link:hover {
      transition: 0.5s ease-out;
      .icon {
        margin: 0.719424460431655vw 0 0 1vw;
        transition: 0.5s ease-out;
      }
    }
  }
  #Matters_mini_conteiner2:hover{
    background-color:${palette.SECONDARY_TXT_COLOR};
    width:19vw;
    transition:0.5s ease-in-out;
    p{
      color:white;
    }
    #link{
      color:white;
    }
  }
`
