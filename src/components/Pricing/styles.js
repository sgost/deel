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

  #NavContainer #navLogo #logo span{
    color:${palette.SECONDARY_TXT_COLOR}
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
    gap:3.9568345323741vw;
}
#cards_container #cards {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:3.59712230215827vw 2.87769784172662vw;
    box-shadow:0 0.287769784172662vw 0.575539568345324vw 0 rgb(0 0 0 / 12%);
    border-radius:1.07913669064748vw;
    border:0.4vw solid #e4f2f8;
    transition:0.5s ease-in-out;
}
#cards_container #cards h1 {
    margin-top: 0;
    margin-bottom: 1.15107913669065vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 2.30215827338129vw;
    line-height: 1.36;
    font-weight: 700;
}
#cards_container #cards p {
    margin-bottom: 1.72661870503597vw;
    font-family: Silka, sans-serif;
    color: #15357a;
    font-size: 1.22302158273381vw;
    line-height: 1.72;
    width:23.0215827338129vw;
}
#cards_container #cards #card_price{
    text-align:center;
    display:flex;
    flex-direction:column;
}
#cards_container #cards #card_price p {
    display: inline;
    font-size: 2.15827338129496vw;
    line-height: 1.2;
    font-weight: 500;
    margin:0;
}
#cards_container #cards #card_price p span{
    font-size: 4vw;
    font-weight:700;
}
#cards_container #cards button{
    height: 3.45323741007194vw;
  padding: 1.07913669064748vw 2.87769784172662vw;
  align-self: center;
  border-style: solid;
  border-width: 0.143884892086331vw;
  border-color: #fff;
  border-radius: 2.87769784172662vw;
  background-color: #2c71f0;
  box-shadow: none;
  color: #fff;
  font-size: 1.00719424460432vw;
  line-height: 1.15107913669065vw;
  font-weight: 500;
  margin:2.51798561151079vw 0 1.43884892086331vw 0;
}
#cards_container #cards h2{
color: #15357a;
  font-size: 1.00719424460432vw;
  line-height: 1.6;
  list-style-type: none;
  margin:1.07913669064748vw auto 1.07913669064748vw 0;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:400;
  transition:0.5s ease-in-out;
}
#cards_container #cards h2 .icon{
width:1.07913669064748vw;
height:1.07913669064748vw;
margin: 0 1.07913669064748vw 0 0;
}
#link{
    border:none;
    outline:none;
    background:transparent;
    color: #2c71f0;
    font-size: 1.43884892086331vw;
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
gap:2.15827338129496vw;
padding:5vw 0;
}
#solutionCards #cards{
    display:flex;
    align-items:center;
    padding:2.15827338129496vw;
    border: 0.719424460431655vw;
    border-radius: 0.719424460431655vw;
}
#solutionCards #cards #cards_matter h1{
    font-size: 1.29496402877698vw;
  line-height: 1.77;
  font-weight: 700;
  color:${palette.PRIMARY_TXT_COLOR};
  margin-bottom:0.7vw;
}
#solutionCards #cards #cards_matter p{
    color: #15357a;
  font-size: 1.15107913669065vw;
  line-height: 1.6;
  font-weight: 400;
  color:${palette.PRIMARY_TXT_COLOR};
  width:24.4604316546763vw;
}
#solutionCards #cards button{
    height: 3.45323741007194vw;
  padding: 1.07913669064748vw 1.vw;
  align-self: center;
  border-style: solid;
  border-width: 0.143884892086331vw;
  border-color: #fff;
  border-radius: 2.87769784172662vw;
  background-color: #2c71f0;
  box-shadow: none;
  color: #fff;
  font-size: 0.9vw;
  line-height: 1.1510791366906vw;
  font-weight: 500;
  margin:auto;
  width:100%;
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
    width:39.568345323741vw;
}
#matter button{
    height: 3.45323741007194vw;
  padding: 1.07913669064748vw 2.30215827338129vw;
  align-self: center;
  border-style: solid;
  border-width: 0.143884892086331vw;
  border-color: #fff;
  border-radius: 2.87769784172662vw;
  background-color: #2c71f0;
  box-shadow: none;
  color: #fff;
  font-size: 1.00719424460432vw;
  line-height: 1.15107913669065vw;
  font-weight: 500;
  margin:2vw auto auto auto;
}
`

export const PriceFooter = styled.div`
#PriceFooter{
padding:6vw 0 0 0;
}
`