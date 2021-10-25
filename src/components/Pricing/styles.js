import styled from "styled-components"
import * as palette from "../../styles/variables"


export const PriceSection = styled.div`
  margin: auto;
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
  #Price_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 9vw 0 0 0;
  }
  #Price_container h1 {
    font-size: 4vw;
    font-weight: bold;
    line-height: 1;
    width: 35vw;
    text-align: center;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #Price_container h2 {
    font-size: 1.15107913669065vw;
    font-weight: 400;
    line-height: 1.72;
    width: 40vw;
    text-align: center;
    margin-top: 1.8vw;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
`
export const PriceSectionCards = styled.div`
padding:7vw 10vw 0vw 10vw;
display:flex;
flex-direction:column;
#cards_container{
    display:grid;
    grid-template-columns:auto auto;
    gap:55px;
}
#cards_container #cards {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:50px 40px;
    box-shadow:0 4px 8px 0 rgb(0 0 0 / 12%);
    border-radius:15px;
    border:0.4vw solid #e4f2f8;
    transition:0.5s ease-in-out;
}
#cards_container #cards h1 {
    margin-top: 0px;
    margin-bottom: 16px;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 32px;
    line-height: 1.36;
    font-weight: 700;
}
#cards_container #cards p {
    margin-bottom: 24px;
    font-family: Silka, sans-serif;
    color: #15357a;
    font-size: 17px;
    line-height: 1.72;
    width:320px;
}
#cards_container #cards #card_price{
    text-align:center;
    display:flex;
    flex-direction:column;
}
#cards_container #cards #card_price p {
    display: inline;
    font-size: 30px;
    line-height: 1.2;
    font-weight: 500;
    margin:0;
}
#cards_container #cards #card_price p span{
    font-size: 4vw;
    font-weight:700;
}
#cards_container #cards button{
    height: 48px;
  padding: 15px 40px;
  align-self: center;
  border-style: solid;
  border-width: 2px;
  border-color: #fff;
  border-radius: 40px;
  background-color: #2c71f0;
  box-shadow: none;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin:35px 0 20px 0;
}
#cards_container #cards h2{
color: #15357a;
  font-size: 14px;
  line-height: 1.6;
  list-style-type: none;
  margin:15px auto 15px 0;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:400;
  transition:0.5s ease-in-out;
}
#cards_container #cards h2 .icon{
width:15px;
height:15px;
margin: 0 15px 0 0;
}
#link{
    border:none;
    outline:none;
    background:transparent;
    color: #2c71f0;
    font-size: 20px;
    font-weight: 700;
    margin:3vw auto auto auto;
}
  `

export const PriceSolutionCards = styled.div`
padding:7vw 10vw 0 10vw;
#solutionCards{
border-top:0.2vw solid #e4f2f8;
display:grid;
grid-template-columns:auto auto;
gap:30px;
padding:5vw 0;
}
#solutionCards #cards{
    display:flex;
    align-items:center;
    padding:30px;
    border:10px;
    border-radius:10px;
}
#solutionCards #cards #cards_matter h1{
    font-size: 18px;
  line-height: 1.77;
  font-weight: 700;
  color:${palette.PRIMARY_TXT_COLOR};
  margin-bottom:0.7vw;
}
#solutionCards #cards #cards_matter p{
    color: #15357a;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  color:${palette.PRIMARY_TXT_COLOR};
  width:340px;
}
#solutionCards #cards button{
    height: 48px;
  padding: 15px 25px;
  align-self: center;
  border-style: solid;
  border-width: 2px;
  border-color: #fff;
  border-radius: 40px;
  background-color: #2c71f0;
  box-shadow: none;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin:auto;
}
#solutionCards #cards:nth-child(1){
    border:0.3vw solid #feca00;
}
#solutionCards #cards:nth-child(2){
    border:0.3vw solid #ffa9c6;
}
#matter{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
#matter h1{
    font-size: 2.1vw;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    color: ${palette.PRIMARY_TXT_COLOR};
    width:550px;
}
#matter button{
    height: 48px;
  padding: 15px 32px;
  align-self: center;
  border-style: solid;
  border-width: 2px;
  border-color: #fff;
  border-radius: 40px;
  background-color: #2c71f0;
  box-shadow: none;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin:2vw auto auto auto;
}
`

export const PriceFooter = styled.div`
#PriceFooter{
padding:6vw 0 0 0;
}
`