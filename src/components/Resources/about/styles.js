import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const TrustSection = styled.div`
  margin: auto;
  padding: 0 0;
  #NavContainer #navLogo #logo{
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainer #navLNks #navTitle p {
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainer #navLNks #nav_link {
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainer #navBtn #nav_link {
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #NavContainer #navBtn button {
    background: ${palette.SECONDARY_TXT_COLOR};
    color: white;
  }
  #NavContainer #nav_link #span {
    width: 0.575539568345324vw;
    height: 0.575539568345324vw;
    border-left: 0.143884892086331vw solid ${palette.PRIMARY_TXT_COLOR};
    border-bottom: 0.143884892086331vw solid ${palette.PRIMARY_TXT_COLOR};
    transform: rotate(-45deg);
    margin: 0.359712230215827vw 0 0 0.719424460431655vw;
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
    padding: 10.7913669064748vw 0 0 5vw;
  }
  #CardsContainer #Cards:nth-child(even) {
    flex-direction: row-reverse;
    padding: 10.7913669064748vw 0 0 0;
  }
  #CardsContainer #Cards #cardData {
    width: 40vw;
    height: fit-content;
    margin: auto auto auto 0;
  }
  #CardsContainer #Cards #cardData p{
    font-weight: 500;
    color: #00ac6b;
    font-size: 1.1vw;
  }
  #CardsContainer #Cards #cardData h1 {
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 2vw;
    width: 37.5539568345324vw;
  }
  #CardsContainer #Cards #cardData h2 {
    font-size: 1.15107913669065vw;
    font-weight: 400;
    line-height: 1.72;
    margin:1.5vw 0 1.58273381294964vw 0;
  }
  #CardsContainer #Cards:first-child  #cardData h1{
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 3.45323741007194vw;
    width: 37.5539568345324vw;
  }
  #CardsContainer #Cards:first-child #cardData h2  {
    font-size: 1.15107913669065vw;
    font-weight: 400;
    line-height: 1.72;
    margin: 1.5vw 0 1.58273381294964vw 0;
  }
  #CardsContainer #Cards:first-child #cardData p  {
    display:none;
  }
  #CardsContainer #Cards #cardImage {
    width: 50vw;
    height: 53.5251798561151vw;
    margin-left: auto;
    position:relative;
    img {
      width: 100%;
      height: 100%;
      position:absolute;
    }
  }
  #CardsContainer #Cards:nth-child(even) #cardImage {
    margin: 0 auto 0 0;
  }
`

export const HelloContainer = styled.div`
width:100%;
height:fit-content;
background:#fb5d96;
padding:120px 0;
margin-top:120px;
#helloContainerText{
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
#helloContainerText h1{
  font-size:64px;
  line-height:1.36;
  font-weight:700;
  color:white;
  margin-bottom:30px;
}
#helloContainerText p{
  font-size:16px;
  line-height:1.72;
  color:white;
  margin-bottom:24px;
}
#helloContainerBanner{
  position:relative;
  width:fit-content;
  height:fit-content;
  margin:auto;
}
#helloContainerBanner img{
  width:1105.6px;
  height:765.36px;
}
`

export const Gallery = styled.div`
width:100%;
padding:126px 0 100px 0;
#GalleryText{
  width:540px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:auto;
}
#GalleryText h1{
  font-size:34px;
  font-weight:500;
  color:${palette.PRIMARY_TXT_COLOR};
  margin-bottom:10px;
}
#GalleryText p{
  font-size:16px;
  line-height:1.72;
  color:${palette.PRIMARY_TXT_COLOR};
  margin-bottom:24px;
  text-align:center;
}
#GalleryImages{
  display:grid;
  grid-template-columns:auto auto auto;
  width:1160px;
  height:827px;
  margin:40px auto auto auto;
  gap:15px;
}
#GalleryImages #img{
  position:relative
}
#GalleryImages #img img{
  position:absolute;
  width:100%;
  height:100%;
}
#GalleryImages #img:nth-child(1){
  grid-column:1/2;
  grid-row:1;
  }
#GalleryImages #img:nth-child(2){
grid-column:2/4;
grid-row:1;
}
`