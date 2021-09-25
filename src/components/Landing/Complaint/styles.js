import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const ComplaintSection = styled.div`
width:80%;
margin:auto;
padding:10.7913669064748vw 0 5vw 0;
h1{
    font-weight:bold;
    text-align:center;
    font-size:4.60431654676259vw;
    color:${palette.PRIMARY_TXT_COLOR}
}
`
export const ComplaintContainerMain = styled.div`
margin:5vw auto auto auto;
display:grid;
grid-template-columns:auto auto;
gap:4.60431654676259vw;

`
export const ComplaintContainerCards = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:fit-content;
`
export const ComplaintContainerIcon = styled.div`
img{
    width:4.31654676258993vw;
    height:9.92805755395683vw;
}
`
export const ComplaintContainerMatter = styled.div`
height:fit-content;
margin-left:3.59712230215827vw;
h1{
    font-size:1.43884892086331vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight:500;
    line-height:1.4;
    text-align:left;
}
h2{
    font-size:1.15107913669065vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight:400;
    line-height:1.6;
    width:27.841726618705vw;
}
`
export const QuoteContainer = styled.div`
width:100%;
background-color:${palette.SECONDARY_TXT_COLOR};
padding:7.19424460431655vw 14.3884892086331vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
    width:53.9568345323741vw;
    font-size:2.30215827338129vw;
    line-height:1.36;
    font-weight:700;
    color:white;
    text-align:center;
}
button{
    border:0.143884892086331vw solid white;
    border-radius:2.87769784172662vw;
    color:${palette.APP_BACKGROUND_COLOR};
    background:none;
    outline:none;
    width:14.1302158273381vw;
    height:3.45323741007194vw;
    margin:4.31654676258993vw 0;
}
`
export const QuoteContainerSection = styled.div`
display:grid;
grid-template-columns:repeat(4, 11.8705035971223vw);
margin:auto;
width:fit-content;
gap:2.15827338129496vw;
`
export const QuoteContainerSectionCards = styled.div`
h1{
    font-weight:700;
    line-height:1.36;
    font-size:2.30215827338129vw;
    color:white;
    text-align:left;
    width:auto;
}
p{
    font-weight:700;
    line-height:1.36;
    font-size:1.72661870503597vw;
    color:white;
}
`