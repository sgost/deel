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
    background: radial-gradient(
      69.3% 63.46% at 11.17% 10.02%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 0.01%,
      rgba(200, 200, 200, 0.1) 100%
    );
    backdrop-filter: blur(120px);
    padding: 0.719424460431655vw 3.59712230215827vw;
    position: fixed;
    width: 100vw;
    z-index: 10;
    transition: width 2s;
    top: 0;
  }
  #navLogo #logo {
    font-size: 2.30215827338129vw;
    font-weight: bold;
    color: white;
  }
  #navLNks {
    display: flex;
    width: fit-content;
    height: fit-content;
    margin: auto auto auto 0;
    justify-content: center;
    align-items: center;
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
      .navPopover {
        display: none !important;
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
      border: none;
      border-radius: 2.15827338129496vw;
    }
  }

  #NavContainer #navLogo #logo {
    color: white;
    font-size: 2.30215827338129vw;
    font-weight: bold;
  }
  #NavContainers #navLogo #logo {
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 2.30215827338129vw;
    font-weight: bold;
  }

  #NavContainers #navLNks #navTitle p {
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainer #navLogo #logo span {
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
  @media (max-width: 750px) {
    display: none;
  }
`
export const NavMatter = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
  background: white;
  border-radius: 16px;
  transition: 0.5s ease;
  #nav_matter_content p1 {
    font-size: 16px;
    margin-bottom: 5px;
    color: ${palette.PRIMARY_TXT_COLOR};
    transition: 0.5s ease-in-out;
  }
  #nav_matter_content p1:hover {
    color: ${palette.SECONDARY_TXT_COLOR};
  }
  #nav_matter_content p {
    font-size: 14px;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 400;
    width: 200px;
  }
`

export const NavMatter2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  #nav_matter_block1_content {
    height: fit-content;
    margin: auto 0 auto 0;
    border-right: 0.3px solid gray;
  }
  #nav_matter_block1_content h1 {
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 1.2vw;
    margin-bottom: 1vw;
    display: flex;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  #nav_matter_block1_content h1:hover {
    color: ${palette.SECONDARY_TXT_COLOR};
  }
  #nav_matter_block1_content h1 .icon {
    margin: 0.2vw 2vw 0 2vw;
    font-size: 1vw;
  }
  #none {
    display: none;
  }
  #nav_matter_block2 {
    padding: 2vw;
    display: grid;
    grid-template-columns: auto auto;
    gap: 2vw 4vw;
  }
  #nav_matter_content p1 {
    font-size: 16px;
    margin-bottom: 5px;
    color: ${palette.PRIMARY_TXT_COLOR};
    transition: 0.5s ease-in-out;
    font-weight: 400;
  }
  #nav_matter_content p1:hover {
    color: ${palette.SECONDARY_TXT_COLOR};
  }
  #nav_matter_content p {
    font-size: 14px;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 400;
    width: 200px;
  }
`

export const NavContainer2 = styled.div`
  z-index: 1;
  #mob_nav {
    width: 100%;
    height: 100%;
    background: white;
    padding:40px 30px;
    position:fixed;
    z-index:2;
    display:none;
  }
  #mob_nav #mob_nav_container {
    border-bottom: 1px solid #7c8286;
  }
  #mob_nav #mob_nav_container #nav_title {
    font-size: 14px;
    font-weight: 500;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin: 8vw 0;
    display:flex;
    align-items: center;
  }
  #mob_nav #mob_nav_container #nav_title .icon{
    margin-left:10vw;
  }
  #mob_nav #mob_nav_container #mob_nav_Links {
    padding: 4vw 0;
  }
  #mob_nav #mob_nav_container #mob_nav_Links #nav_lnks {
    display: flex;
    flex-direction: column;
  }
  #mob_nav #mob_nav_container #mob_nav_Links #nav_lnks h1 {
    font-size: 16px;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 400;
    margin: 2vw 0 0 0;
  }
  #mob_nav #mob_nav_container #mob_nav_Links #nav_lnks p {
    font-size: 12px;
    color: #7c8286;
    font-weight: 400;
    max-width: 220px;
  }
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
    background: radial-gradient(
      69.3% 63.46% at 11.17% 10.02%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 0.01%,
      rgba(200, 200, 200, 0.1) 100%
    );
    backdrop-filter: blur(120px);
    padding: 0.719424460431655vw 3.59712230215827vw;
    position: fixed;
    width: 100vw;
    z-index: 10;
    transition: width 2s;
    top: 0;
  }
  #navLogo {
    display: flex;
    width: 100%;
    align-items: center;
  }
  #navLogo #navBtn {
    margin-left: auto;
    width: fit-content;
    display: flex;
    align-items: center;
  }
  #NavContainer #navLogo #logo {
    color: white;
    font-size: 10vw;
    font-weight: 500;
  }
  #NavContainers #navLogo #logo {
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 10vw;
    font-weight: 500;
  }
  #NavContainer #navLogo #logo span {
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainer #navBtn #nav_link {
    color: white;
    margin-right: 15vw;
  }

  #NavContainers #navBtn #nav_link {
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-right: 15vw;
  }

  #NavContainers #navBtn #nav_link {
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #NavContainer #navBtn .icon {
    width: 12vw;
    height: 12vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e4f2f8;
    border-radius: 8vw;
    font-weight: 500;
    color: ${palette.SECONDARY_TXT_COLOR};
  }
  #NavContainers #navBtn .icon {
    width: 12vw;
    height: 12vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e4f2f8;
    border-radius: 8vw;
    font-weight: 500;
    color: ${palette.SECONDARY_TXT_COLOR};
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
