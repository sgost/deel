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
      width:100%;
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
  #Register_form_real #input1 #select {
    height: 3.45323741007194vw;
    border: 0.0719424460431655vw solid #cfd0d6;
    border-radius: 0.143884892086331vw;
    background-color: transparent;
    width: 100%;
    outline: none;
    font-size: 1.1vw;
    position: relative;
    color: black;
    cursor: pointer;
  }
  #Register_form_real #input1 #select #input {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 1vw 1vw 1vw 1.2vw;
  }
  #Register_form_real #input1 #select #option {
    position: absolute;
    top: 100%;
    width: 100%;
    background: white;
    z-index: 1;
    left: 0;
    border-bottom-right-radius: 1vw;
    border-bottom-left-radius: 1vw;
    overflow: hidden;
    cursor: pointer;
  }
  #Register_form_real #input1 #select #option p {
    padding: 1vw 0.2vw 1vw 1.3vw;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  #Register_form_real #input1 #select #option p:hover {
    background-color: blue;
    color: white;
  }

  @media (max-width:750px){
    flex-direction:column-reverse;
    #Register_matter {
      text-align: left;
      width: 100%;
      margin: auto;
      text-align: center;
      padding:0 5vw;
    }
     #Register_matter h1 {
      font-size: 8vw;
      margin: 17vw 0 6vw 0;
  }
   #Register_matter p {
    font-size: 4vw;
    line-height: 1.72;
    color: #15357a;
    margin:0 0 10vw 0;
}

    #Register_form {
      width: 90%;
      border-radius: 3vw;
      padding: 10vw 5vw;
      margin: 36vw auto auto auto;
    }
    #Register_form_real {
      width: 100%;
      gap: 5vw;
      margin-top: 7vw;
    }
    #Register_form #input2 {
      display: grid;
      grid-template-columns: auto;
      gap: 5vw;
    }
    #Register_form h1 {
      font-size: 7vw;
      margin: 0;
      text-align: center;
    }
    #Register_form_real input {
      height: 12vw;
      border-radius: 1vw;
      padding: 1vw 1vw 1vw 3vw;
      font-size: 4vw;
    }
    #Register_form_real label {
      font-size: 3.9vw;
    }
    #Register_form_real #input1 #select {
      height: 12vw;
      border-radius: 1vw;
    }
    #Register_form_real #input1 #select #input {
      padding: 0 0 0 3vw;
      font-size: 4vw;
      display: flex;
      align-items: center;
    }
    #Register_form #input button {
      height: 12vw;
      border-radius: 8vw;
      padding: 1vw 1vw 1vw 3vw;
      font-size: 4vw;
    }
    #Register_form_real #input1 #select {
      height: 12vw;
      border-radius: 1vw;
    }
    #Register_form_real #input1 #select #input {
      padding: 0 0 0 3vw;
      font-size: 4vw;
      display: flex;
      align-items: center;
    }
    #Register_form #input button {
      height: 12vw;
      border-radius: 8vw;
      padding: 1vw 1vw 1vw 3vw;
      font-size: 4vw;
    }
    #Register_form_real #input1 #select #option p {
      padding: 1vw 0.2vw 1vw 3.9vw;
    }
     #Register_matter #Register_matter_carousal {
      margin: 0;
      padding: 0;
      box-shadow:0 4px 8px 0 rgb(19 21 51 / 12%);
  }
    #Register_matter #Register_matter_carousal #btn{
      display:none;
  }
   #Register_matter #Register_matter_carousal #Register_matter_carousal_section {
    width: 100%;
    padding:8vw 5vw;
}
 #Register_matter #Register_matter_carousal #carousal_img {
  flex-direction: column;
}
 #Register_matter #Register_matter_carousal #Register_matter_carousal_section p {
  width: 100%;
  margin: 4vw 0 0 0;
  font-weight: 400;
}
#Register_matter #Register_matter_carousal #carousal_img #carousal_img_container .star{
  width:8vw;
  height:8vw;
  margin-left:1vw;
}
 #Register_matter #Register_matter_carousal #carousal_img h2 {
  font-size: 4vw;
}
 #Register_matter #Register_matter_carousal #Register_matter_carousal_section p:nth-child(4) {
  margin: 4vw 0 0 0;
  font-size: 5vw;
}
 #Register_matter #Register_matter_carousal_rating p {
  width: 100%;
  line-height: 1.72661870503597vw;
  margin: 7vw 0 3vw 0;
}
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
  @media (max-width: 750px){
     #Trust_container2 {
      grid-template-columns: auto auto;
      gap: 15vw 10vw;
      margin: 0 auto;
      padding: 15vw 1vw 16vw 1vw;
  }
   #Trust_container2 img {
    width: 35vw;
    height: 7vw;
}
  }
  `