import styled from "styled-components"

export const BannerSection = styled.div`
  width: 100%;
  height: 49vw;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  #banner_container {
    text-align: right;
    width: fit-content;
    margin: auto 10.7913669064748vw auto auto;
  }
  #banner_container h1 {
    width: 34.5323741007194vw;
    font-weight: 200;
    font-size: 4.60431654676259vw;
    line-height: 1.3;
    margin-left: auto;
    color: white;
  }
  #banner_container h2 {
    color: white;
    font-weight: 700;
    font-size: 6.90647482014388vw;
    margin-top:2.15827338129496vw;
  }
  #banner_container p {
    font-weight: 500;
    font-size: 1.43884892086331vw;
    line-height: 1.6;
    width: 38.1294964028777vw;
    text-align: left;
    margin-left: auto;
    margin-top:2.15827338129496vw;
    color: white;
  }
  #banner_container button {
    background: #2c71f0;
    border: none;
    outline: none;
    color: #fff;
    width: 13.8424460431655vw;
    height: 3.45323741007194vw;
    font-size: 1.00719424460432vw;
    border-radius: 3.59712230215827vw;
    margin: 1.43884892086331vw 24.4604316546763vw 0 0;
    cursor: pointer;
  }
  @media (max-width: 750px) {
    height: 190vw;
    #banner_container {
      margin: auto;
      text-align: center;
    }
    #banner_container h1 {
      width: 100%;
      font-weight: 300;
      font-size: 7vw;
      line-height: 1.3;
      color: white;
      text-align: center;
      margin: auto;
    }
    #banner_container h2 {
      color: white;
      font-weight: 700;
      font-size: 11.9vw;
      margin: 2.15827338129496vw 0 7vw 0;
      text-align: center;
    }
    #banner_container p {
      font-weight: 500;
      font-size: 4.5vw;
      line-height: 1.6;
      width: 85vw;
      text-align: left;
      color: white;
      margin: 5vw auto 15vw auto;
      text-align: center;
    }
  }
`
export const ImageConteiner = styled.div`
  position:absolute;
  z-index:-1;
  width:100%;
  height:100%;
  #img1{
      height:49vw;
  }
  @media (max-width: 750px) {
    #img1 {
      height: 190vw;
    }
  }
`
