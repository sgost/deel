import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const FooterContainer = styled.div`
background-color:${palette.PRIMARY_TXT_COLOR};
padding:3.59712230215827vw 14.3884892086331vw 0 14.3884892086331vw;
`
export const FooterContainerTop = styled.div`
display:flex;
width:100%;
`
export const FooterContainerBottom = styled.div`
display:flex;
padding:2.15827338129496vw 0;
border-top:1px solid #b1e7eb;
margin:80px 0 0 0;
#copy h1{
    color:#b1e7eb;
    font-size:0.863309352517986vw;
    line-height:1.36;
    font-weight:500;
}
#FooterLinks{
    display:flex;
    width:fit-content;
    margin:0 0 0 auto;
}
#FooterLinks h1{
    color:#b1e7eb;
    font-size:0.863309352517986vw;
    line-height:1.36;
    font-weight:500;
    margin-left:3.23741007194245vw;
}
`
export const FooterLogo = styled.div`
`
export const FooterLogoTop = styled.div`
color:white;
font-weight:bold;
font-size:2.15827338129496vw;
`
export const FooterLogoBottom = styled.div`
font-size:1.43884892086331vw;
color:white;
display:grid;
grid-template-columns:repeat(4, auto);
gap:1.43884892086331vw;
width:fit-content;
margin-top:1.43884892086331vw;
`
export const FooterLinksmain = styled.div`
width:fit-content;
display:flex;
margin-left:auto;
`
export const FooterLinks = styled.div`
display:flex;
flex-direction:column;
margin:0 4.31654676258993vw 0 auto;
#main{
    color:white;
    font-size:1.51079136690647vw;
    font-weight:500;
    margin-bottom:1.15107913669065vw;
}
#secondary{
    color:white;
    font-size:1.00719424460432vw;
    font-weight:500;
    margin-bottom:1.15107913669065vw;
}
`