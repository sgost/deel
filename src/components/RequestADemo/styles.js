import styled from "styled-components"
import * as palette from "../../styles/variables"

export const RegisterSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
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
`
export const ImageConteiner = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  #img1 {
    height: 100%;
  }
`
export const RegisterContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: 10vw auto 4vw auto;
  #Register_matter {
    text-align: left;
    width: 40vw;
    margin: auto 6vw auto auto;
  }
  #Register_matter h1 {
    font-size:2vw;
    font-weight: 700;
    line-height: 1.1;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 0 0 1.72661870503597vw 0;
  }
  #Register_matter p {
    font-size: 1vw;
    line-height: 1.3;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #Register_matter #Register_matter_carousal{
      width:100%;
      height:fit-content;
      display:flex;
      justify-content:center;
      align-items:center;
      margin:2.2vw 0 1vw 0;
      padding:0 2vw;
  }
  #Register_matter #Register_matter_carousal #btn button{
      outline:none;
      border:0.0719424460431655vw solid gray;
      border-radius:2.15827338129496vw;
      background:white;
      display:flex;
      justify-content:center;
      align-items:center;
  }
  #Register_matter #Register_matter_carousal #btn .carousel-control-prev-icon{
      margin-right:1.07913669064748vw;
  }
  #Register_matter #Register_matter_carousal #btn .carousel-control-next-icon{
    margin-left:1.07913669064748vw;
}
  #Register_matter #Register_matter_carousal a{
      display:none;
  }
  #Register_matter #Register_matter_carousal #Register_matter_carousal_section{
      background-color:#f6f6f6;
      padding:2.30215827338129vw;
      box-shadow:0 0.287769784172662vw 0.575539568345324vw 0 rgba(19, 21, 51, 0.12)
      border-radius:0.719424460431655vw;
      transition:0.5s ease-in-out;
  }
  #Register_matter #Register_matter_carousal #Register_matter_carousal_section:hover{
      padding:2.58992805755396vw;
  }
  #Register_matter #Register_matter_carousal #carousal_img{
      width:100%;
      margin:auto;
      display:flex;
      justify-content:center;
      align-items:center;
  }
  #Register_matter #Register_matter_carousal #carousal_img h2{
      font-size:0.8vw;
      width:fit-content;
      margin:0 0 0 0.1vw;
      color:#727283;
      font-weight:600;
  }
  #Register_matter #Register_matter_carousal #carousal_img #carousal_img_container{
      display:flex;
  }
  #Register_matter #Register_matter_carousal #carousal_img #carousal_img_container .star{
      width:2.15827338129496vw;
      height:2.15827338129496vw;
      background:#228B22;
      display:flex;
      justify-content:center;
      align-items:center;
      color:white;
      margin-left:0.107913669064748vw;
  }
  #Register_matter #Register_matter_carousal #Register_matter_carousal_section h1{
    font-weight:400;
      margin:0.5vw 0 0 0;
  }
  #Register_matter #Register_matter_carousal #Register_matter_carousal_section p{
    width:23.3093525179856vw;
    margin:1.5vw 0;
    font-weight:400;
}
#Register_matter #Register_matter_carousal #Register_matter_carousal_section p:nth-child(4){
    margin:0;
    font-weight:500;
    color: #727283;
    font-size: 1vw;
}



#Register_matter #Register_matter_carousal_rating{
    width:100%;
    margin:2vw 0 0 0;
    display:flex;
    align-items:center;
}
#Register_matter #Register_matter_carousal_rating p{
    color:black;
    width:14.3884892086331vw;
    line-height:1.72661870503597vw;
}
#Register_matter #Register_matter_carousal_rating p span{
    font-weight:600;
}



  #Register_form {
    padding: 2.87769784172662vw;
    border-radius: 1.15107913669065vw;
    box-shadow: 0 0.575539568345324vw 1.58273381294964vw 0 rgb(19 21 51 / 12%);
    background-color: #fff;
    width:fit-content;
  }
  #Register_form h1 {
    font-weight: 600;
    color: ${palette.PRIMARY_TXT_COLOR};
    line-height: 1.4;
    font-size: 2.01438848920863vw;
    margin: 0 0 1.72661870503597vw 0;
  }
  #Register_form_real {
    display: grid;
    grid-template-columns: auto;
    gap: 2.01438848920863vw;
    width:35vw;
  }
  #Register_form_real #input1 {
    display: flex;
    flex-direction: column;
  }
  #Register_form_real input {
    height: 3.45323741007194vw;
    border: 0.0719424460431655vw solid #cfd0d6;
    border-radius: 0.143884892086331vw;
    background-color: transparent;
    width: 100%;
    outline: none;
    padding: 1.43884892086331vw;
    font-size:1.1vw;
  }
  #Register_form_real label {
    margin-bottom: 0.575539568345324vw;
    color: #131533;
    font-size: 0.935251798561151vw;
    line-height: 1.5;
    font-weight: 400;
  }
  #Register_form #input2 {
    display: grid;
    grid-template-columns: auto auto;
    gap: 5%;
  }
  #Register_form #input2 input{
    width:100%;
  }
  #Register_form #input1 #input_select {
    height: 3.45323741007194vw;
    border: 0.0719424460431655vw solid #cfd0d6;
    border-radius: 0.143884892086331vw;
    background-color: transparent;
    width: 100%;
    outline: none;
    padding: 1.43884892086331vw;
  }
  #Register_form #input1 .ant-col{
    width:35vw;
  }
  #Register_form #input button {
    width: 100%;
    height: 3.38129496402878vw;
    background-color: ${palette.SECONDARY_TXT_COLOR};
    border-radius: 3.59712230215827vw;
    border: none;
    outline: none;
    color: white;
  }
`

export const RegisterLogo = styled.div`
#Trust_container2 {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(2, auto);
    gap: 1.43884892086331vw 4.31654676258993vw;
    width: fit-content;
    height: fit-content;
    margin:0 auto;
    padding:6vw 0;
    img {
      width: 9.51079136690647vw;
      height: 2.31654676258993vw;
    }
  }
  `