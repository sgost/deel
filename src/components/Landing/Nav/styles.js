import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const NavContainer = styled.div`
  #NavContainer2 {
    display: none;
  }
  #NavContainer {
    display: flex;
    background: none;
    padding: 0.719424460431655vw 3.59712230215827vw;
    position: fixed;
    width: 100vw;
    z-index: 10;
  }
  #NavContainers {
    display: flex;
    background: white;
    padding: 0.719424460431655vw 3.59712230215827vw;
    position: fixed;
    width: 100vw;
    z-index: 10;
    transition: width 2s;
    top: 0;
  }
  #navLogo {
    font-size: 2.30215827338129vw;
    font-weight: bold;
    color: white;
  }
  #navLNks {
    display: flex;
    width: fit-content;
    height: fit-content;
    margin: auto;
    #navTitle {
      display: flex;
      padding-left: 2.15827338129496vw;
      flex-direction: column;
      position: relative;
      width: fit-content;
      p {
        font-size: 1.07913669064748vw;
        font-weight: 700;
        color: white;
      }
    }
    #nav_link {
      font-size: 1.07913669064748vw;
      font-weight: 700;
      color: white;
      margin-left: 2.15827338129496vw;
      display: flex;
      cursor: pointer;
    }
    #nav_link #span {
      width: 0.575539568345324vw;
      height: 0.575539568345324vw;
      border-left: 0.143884892086331vw solid white;
      border-bottom: 0.143884892086331vw solid white;
      transform: rotate(-45deg);
      margin: 0.359712230215827vw 0 0 0.719424460431655vw;
    }
    #nav_matter {
      display: grid;
      grid-template-columns: auto;
      gap: 20px;
      background: white;
      padding: 46px;
      border-radius: 16px;
      transition: 0.5s ease;
      position: absolute;
      margin: 60px 0 0 20px;
    }
    #nav_matter #nav_matter_content h1 {
      font-size: 16px;
      margin-bottom: 5px;
      color: ${palette.PRIMARY_TXT_COLOR};
      transition:0.5s ease-in-out;
    }
    #nav_matter #nav_matter_content h1:hover {
      color: ${palette.SECONDARY_TXT_COLOR};
    }
    #nav_matter #nav_matter_content p {
      font-size: 14px;
      color: ${palette.PRIMARY_TXT_COLOR};
      font-weight: 400;
      width: 200px;
    }
  }
  #navBtn {
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    #nav_link {
      font-size: 1.07913669064748vw;
      font-weight: 700;
      color: white;
      margin-left: 2.15827338129496vw;
    }
    button {
      width: 11.5107913669065vw;
      height: 3.45323741007194vw;
      font-size: 1.07913669064748vw;
      font-weight: 700;
      color: white;
      margin-left: 2.15827338129496vw;
      outline: none;
      background: none;
      border: 0.143884892086331vw solid white;
      border-radius: 2.15827338129496vw;
    }
  }

  #NavContainer #navLogo #logo{
    color:white;
  }
  #NavContainers #navLogo #logo{
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainers #navLNks #navTitle p {
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainers #navLNks #nav_link {
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainers #navBtn #nav_link {
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #NavContainers #navBtn button {
    background: ${palette.SECONDARY_TXT_COLOR};
    color: white;
  }
  #NavContainers #nav_link #span {
    width: 0.575539568345324vw;
    height: 0.575539568345324vw;
    border-left: 0.143884892086331vw solid ${palette.PRIMARY_TXT_COLOR};
    border-bottom: 0.143884892086331vw solid ${palette.PRIMARY_TXT_COLOR};
    transform: rotate(-45deg);
    margin: 0.359712230215827vw 0 0 0.719424460431655vw;
  }
`
