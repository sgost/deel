import styled from "styled-components"
import * as palette from "../../../../styles/variables"

export const RegisterSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  @media (max-width: 750px) {
    height: 355vw;
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
  @media (max-width: 750px) {
    display: none;
  }
`
export const RegisterContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: 10vw auto 4vw auto;
  #Register_matter {
    text-align: left;
    width: 33.0935251798561vw;
    margin: auto 10.7913669064748vw auto auto;
  }
  #Register_matter h1 {
    font-size: 4.60431654676259vw;
    font-weight: 700;
    line-height: 1.1;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 0 0 1.72661870503597vw 0;
  }
  #Register_matter p {
    font-size: 1.72661870503597vw;
    line-height: 1.72;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #Register_form {
    padding: 2.87769784172662vw;
    border-radius: 1.15107913669065vw;
    box-shadow: 0 0.575539568345324vw 1.58273381294964vw 0 rgb(19 21 51 / 12%);
    background-color: #fff;
    width: fit-content;
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
    width: 35vw;
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
    font-size: 1.1vw;
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
  #Register_form #input2 input {
    width: 100%;
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
  #Register_form #input1 .ant-col {
    width: 35vw;
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

  @media (max-width: 750px) {
    height: 310vw;
    flex-direction: column;
    padding: 0 4vw;
    margin-top: 25vw;
    #Register_matter {
      text-align: left;
      width: 100%;
      margin: auto;
      text-align: center;
    }
    #Register_matter h1 {
      font-size: 12vw;
      margin-bottom: 3vw;
    }
    #Register_matter p {
      font-size: 5vw;
      line-height: 1.72;
      color: #15357a;
    }

    #Register_form {
      width: 100%;
      border-radius: 3vw;
      padding: 10vw 5vw;
      margin-top: 12vw;
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
  }
`

export const TrustSection = styled.div`
  width: 90%;
  margin: auto;
  padding: 10.7913669064748vw 0 0 0;
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
  #Trust_container2 {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(2, auto);
    gap: 1.43884892086331vw 4.31654676258993vw;
    width: fit-content;
    height: fit-content;
    margin: 2.87769784172662vw auto 0 auto;
    img {
      width: 11.5107913669065vw;
      height: 4.31654676258993vw;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
    background-color: #4ac7d3;
    padding: 20vw 1vw;
    #Trust_container h1 {
      font-size: 7vw;
      line-height: 1.36;
      text-align: center;
      width: 100%;
      color: white;
    }
    #Trust_container h2 {
      font-size: 5vw;
      width: 100%;
      margin-top: 5vw;
      color: white;
    }
    #Trust_container2 {
      grid-template-columns: auto auto;
      gap: 10vw 30vw;
      margin: 8vw auto 0 auto;
    }
    #Trust_container2 img {
      width: 25vw;
      height: 17.316547vw;
    }
  }
`

export const Solution = styled.div`
  margin: 0;
  padding: 10.7913669064748vw 0;
  h1 {
    font-size: 4.60431654676259vw;
    font-weight: 700;
    line-height: 1.1;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 0 auto 1.72661870503597vw auto;
    width: 57.5539568345324vw;
    text-align: center;
  }
  #card_container {
    width: 100%;
    margin: auto;
  }
  #card_container1_cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 14.3884892086331vw 0 0 0;
  }
  #card_container1 {
    padding: 0 0 0 3.45323741007194vw;
  }
  #card_container1_cards #card_container_matter {
    width: 32.3741007194245vw;
    margin: auto 0 auto 0;
    text-align: left;
  }
  #card_container_matter p1 {
    color: #00ac6b;
    font-weight: 500;
    font-size: 1.00719424460432vw;
  }
  #card_container_matter h2 {
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 700;
    font-size: 2.30215827338129vw;
    line-height: 1.36;
    margin: 0.575539568345324vw 0 1.15107913669065vw 0;
  }
  #card_container_matter h3 {
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 1.72661870503597vw;
    line-height: 1.72;
    font-weight: 400;
  }
  #card_container_image {
    width: 55.2517985611511vw;
    height: 43.5251798561151vw;
  }
  #card_container_image img {
    width: 100%;
    height: 100%;
  }

  #card_container1:nth-child(even) {
    padding: 0 3.45323741007194vw 0 0;
  }
  #card_container1:nth-child(even) #card_container1_cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 14.3884892086331vw 0 0 0;
    flex-direction: row-reverse;
  }
  #card_container1:nth-child(even)
    #card_container1_cards
    #card_container_matter {
    width: 32.3741007194245vw;
    margin: auto 0 auto 0;
    text-align: left;
  }

  @media (max-width: 750px) {
    padding: 31vw 1vw 20vw 1vw;
    h1 {
      font-size: 10vw;
      margin: auto;
      width: 90vw;
    }
    #card_container {
      padding: 20vw auto auto auto;
    }
    #card_container1 {
      padding: 0;
    }
    #card_container1_cards {
      flex-direction: column;
      padding: 24vw ​0 0 0;
    }
    #card_container1_cards #card_container_matter {
      width: 100%;
      padding: 0 2vw;
    }
    #card_container_matter p1 {
      font-size: 3.5vw;
    }
    #card_container_matter h2 {
      font-size: 8.302158vw;
      line-height: 1.2;
      margin: 0.575539568345324vw 0 3.8vw 0;
    }
    #card_container_matter h3 {
      font-size: 5vw;
      width: 80vw;
    }
    #card_container_image {
      width: 100%;
      height: 67.52518vw;
      margin-top: 10vw;
    }
    #card_container1:nth-child(even) #card_container1_cards {
      width: 100%;
      padding: 24vw 0 0 0;
      flex-direction: column;
    }
    #card_container1:nth-child(even) {
      padding: 0;
    }
    #card_container1:nth-child(even)
      #card_container1_cards
      #card_container_matter {
      width: 100%;
    }
  }
`
