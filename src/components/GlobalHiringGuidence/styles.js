import styled from "styled-components"
import * as palette from "../../styles/variables"


export const TrustSection = styled.div`
  margin: auto;
  padding: 9vw 0 0 0;
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
    display:flex;
    font-size: 1vw;
    font-weight: 400;
    line-height: 1.72;
    margin: 2.15827338129496vw 0 1.58273381294964vw 0;
    align-items:center;
    color: ${palette.PRIMARY_TXT_COLOR};
    p{
      margin-left:1.2vw;
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

  #Trust_container_search{
    display:grid;
    grid-template-columns:32.3741007194245vw 21.5827338129496vw 27.3381294964029vw;
    grid-template-rows:4.60431654676259vw;
    width:fit-content;
    margin:1.2vw auto auto auto;
    gap:1.15107913669065vw;
}
  #Trust_container_search #search1{
      position:relative;
      display:flex;
      justify-content:center;
      align-items:center;
  }
  #Trust_container_search #search1 input{
    border:0.0719424460431655vw solid gray;
    outline:none;
    position:absolute;
    width:100%;
    height:100%;
    padding:1vw 1vw 1vw 2vw;
    border-radius:2.15827338129496vw;
  }
  #Trust_container_search #search1 img{
    width:2.15827338129496vw;
    height:2.15827338129496vw;
    position:absolute;
    right:2.15827338129496vw;
    cursor:pointer;
  }
`

export const TrustSectionCards = styled.div`
padding: 9vw 8vw 0 8vw;
width:fit-content;
margin:auto;
#cards_container{
  display:grid;
  height:43.1654676258993vw;
  grid-template-columns:27.3381294964029vw 27.3381294964029vw 27.3381294964029vw;
  gap:2.15827338129496vw;
  over-flow:hidden;
  border-radius:0.359712230215827vw;
}
#cards_section{
  position:relative;
  transition:0.5s ease-in-out;
}
#cards_section #cards {
  display:grid;
  height:100%;
  grid-template-rows:80% 20%;
  border-radius:0.359712230215827vw;
  transition:0.5s ease-in-out;
  box-shadow:0 0.0719424460431655vw 0.287769784172662vw 0 rgb(0 0 0 / 8%), 0 0.287769784172662vw 1.15107913669065vw 0 rgb(0 0 0 / 4%);
}
#cards_section #cards #cards_b1{
position:relative;
}
#cards_section #cards #cards_b1 #cards_tag{
  background-color:white;
  position:absolute;
  width:2.15827338129496vw;
  height:2.15827338129496vw;
  z-index:1;
  right:0;
  top:40%;
  border-top-left-radius:2.15827338129496vw;
  border-bottom-left-radius:2.15827338129496vw;
}
#cards_section:hover #cards #cards_b1 #cards_tag{
  dislpay:none;
}
#cards_section #cards_b1_hover{
  display:none
}
#cards_section:hover #cards_b1_hover{
background:white;
width:100%;
height:100%;
top:0;
position:absolute;
border-radius:0.575539568345324vw;
transition:0.5s ease-in-out;
cursor:pointer;
border-radius:0.359712230215827vw;
display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
#cards_b1_hover_matter{
  width:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
#cards_b1_hover_matter #cards_b1_hover_matter_btn{
  margin-top:1.3vw;
}
#cards_b1_hover_matter #cards_b1_hover_matter_btn button{
  outline:none;
  color:${palette.PRIMARY_TXT_COLOR};
  border:0.0719424460431655vw solid ${palette.PRIMARY_TXT_COLOR};
  border-radius:3.59712230215827vw;
  width:8.48920863309353vw;
  height:3.45323741007194vw;
  background:transparent;
  font-size:1vw;
}
#cards_b1_hover_matter #cards_b1_hover_matter_btn button:nth-child(2){
  margin-left:1vw;
  color:${palette.SECONDARY_TXT_COLOR};
  border:0.0719424460431655vw solid ${palette.SECONDARY_TXT_COLOR};
}
#cards_b1_hover_matter  p{
  font-size:1.2vw;
  span{
    color:${palette.SECONDARY_TXT_COLOR};
  }
}
}
#cards_section #cards #cards_b1 img{
  position:absolute;
  width:100%;
  height:100%;
  border-top-right-radius:0.359712230215827vw;
  border-top-left-radius:0.359712230215827vw;
}
#cards_section #cards #cards_b2{
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom-right-radius:0.359712230215827vw;
  border-bottom-left-radius:0.359712230215827vw;
}
#cards_section #cards #cards_b2 p{
  font-size:1.2vw;
  span{
    color:black;
  }
}
`

export const TrustSectionRating = styled.div`
padding:9vw 0;
position:relative;
#head{
  width:fit-content;
  margin:auto;
}
#head h1{
  font-size: 2.94964028776978vw;
  font-weight: bold;
  line-height: 1.36;
  width: 67.2856115107914vw;
  text-align: center;
  color: ${palette.PRIMARY_TXT_COLOR};
}
#head p{
  font-size: 1.15107913669065vw;
  font-weight: 400;
  line-height: 1.72;
  width: 67.2856115107914vw;
  text-align: center;
  margin-top: 0.719424460431655vw;
  color: ${palette.PRIMARY_TXT_COLOR};
}
#container_main{
  display:flex;
  width:fit-content;
  margin:5vw auto 1vw auto;
}
#container_main #container{
  width:fit-content;
  height:fit-content;
  padding:2.30215827338129vw 1.72661870503597vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  box-shadow:0 0.287769784172662vw 0.575539568345324vw 0 rgb(19 21 51 / 12%);
  border-radius:1.15107913669065vw;
  margin:0 1.15107913669065vw;
}
#container_main #container #container_star{
  width:fit-content;
  height:fit-content;
  display:grid;
  grid-template-columns:repeat(5, auto);
  gap:0.143884892086331vw;
}
#container_main #container #container_star #star{
  width:2.30215827338129vw;
  height:2.30215827338129vw;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:green;
}
#container_main #container #container_star #star .star{
  color:yellow;
}
#container_main #container #container_matter{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  transition:0.5s ease-in-out;
}
#container_main #container #container_matter h1{
  font-size:1.43884892086331vw;
  color: ${palette.PRIMARY_TXT_COLOR};
  margin-top:1.43884892086331vw;
  font-weight:400;
}
#container_main #container #container_matter p{
  font-size:1.15107913669065vw;
  color: ${palette.PRIMARY_TXT_COLOR};
  margin-top:1.43884892086331vw;
  width:25.1798561151079vw;
  transition:0.5s ease-in-out;
}
#container_main #container #container_matter p:nth-child(3){
  font-size:0.935251798561151vw;
  color: gray;
  margin-top:0.575539568345324vw;
}
#container_main #container #container_matter p:nth-child(4){
  font-size:0.935251798561151vw;
  color: gray;
  margin-top:0.0719424460431655vw;
}
#btn{
  position:absolute;
  width:100%;
  margin:auto;
  display:flex;
  justify-content:space-between;
  padding:0 2vw;
  top:60%;
}
#btn #l{
  color:${palette.PRIMARY_TXT_COLOR}
}
#btn #l2{
  margin-auto:100%;
  color:${palette.PRIMARY_TXT_COLOR}
}
`