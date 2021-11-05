import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const BlogSection = styled.div`
  border: 0.0719424460431655vw solid transparent;
  #NavContainer #navLogo #logo {
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  #NavContainer #navLogo #logo span {
    color: ${palette.SECONDARY_TXT_COLOR};
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
    border-left: 0.143884892086331vw solid ${palette.PRIMARY_TXT_COLOR};
    border-bottom: 0.143884892086331vw solid ${palette.PRIMARY_TXT_COLOR};
  }
  #BlogSection {
    display: flex;
    flex-direction: column;
    margin: 12vw auto auto auto;
    width: fit-content;
  }
  #BlogSection h1 {
    font-size: 4.60431654676259vw;
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #BlogSection #search {
    width: 100%;
    position: relative;
    height: fit-content;
    margin-top: 1.5vw;
    height: 3.45323741007194vw;
  }
  #BlogSection #search #search_bar {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.0719424460431655vw solid #cccccc;
    outline: none;
    border-radius: 0.5vw;
    padding: 1vw 1vw 1vw 3.8vw;
    font-weight: 700;
    font-size: 1.3vw;
  }
  #BlogSection #search .search_logo {
    z-index: 1;
    color: #cccccc;
    top: 50%;
    transform: translateY(-40%);
    left: 1.5vw;
    position: absolute;
    font-weight: 700;
    font-size: 1.5vw;
  }
  #BlogSection #search_links {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  #BlogSection #search_links #Links {
    margin: 1vw 0 0 0;
    text-decoration: none;
    font-weight: 700;
    font-size: 1vw;
  }
  #BlogSection #search_links #Links:first-child {
    margin-left: 0;
  }
  @media (max-width: 750px) {
    padding: 0 5vw;
    #BlogSection {
      margin: 34vw 0 0 0;
      width: 100%;
    }
    #BlogSection h1 {
      font-size: 11.604317vw;
      width: 66vw;
      text-align: center;
      line-height: 12vw;
      margin: auto;
    }
    #BlogSection #search {
      width: 100%;
      position: relative;
      height: 13.453237vw;
      border-radius: 2vw;
      overflow: hidden;
      margin: 8vw 0;
      border: 0.0719424460431655vw solid #cccccc;
    }
    #BlogSection #search #search_bar {
      border: none;
      font-size: 4.5vw;
      padding: 1vw 1vw 1vw 10.1vw;
    }
    #BlogSection #search .search_logo {
      font-size: 4.5vw;
      margin: 0 0 0 2vw;
    }
    #BlogSection #search_links {
      flex-direction: column;
      width: fit-content;
      margin: auto;
      text-align: center;
    }
    #BlogSection #search_links #Links {
      font-size: 6vw;
      font-weight: 400;
    }
  }
`

export const BlogSectionMain = styled.div`
  margin-top: 4.5vw;
  padding: 0 0 8vw 0;
  #BlogSectionMain {
    width: 83.4532374100719vw;
    margin: auto;
  }
  #section_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1vw 0;
  }
  #section_top #section_top_title {
    font-size: 1.43884892086331vw;
    font-weight: 600;
    color: ${palette.PRIMARY_TXT_COLOR};
    width: fit-content;
  }
  #section_top #Links {
    font-size: 1.00719424460432vw;
    font-weight: 600;
    width: fit-content;
  }
  #section_middle {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 2vw;
    padding: 1.43884892086331vw 0 0 0;
    border-top: 0.215827338129496vw solid #e4f2f8;
  }
  #section_middle #section_middle_card {
    display: grid;
    grid-template-column: 100%;
    grid-template-rows: 9.35251798561151vw 5.37410071942446vw;
  }
  #section_middle #section_middle_card #section_middle_card_top {
    display: flex;
    border-radius: 1vw;
    padding: 1vw;
  }
  #section_middle #section_middle_card #section_middle_card_top #card_title {
    margin-top: auto;
    color: white;
    font-weight: 700;
    font-size: 1.29496402877698vw;
  }
  #section_middle #section_middle_card #card_desc {
    font-size: 1.00719424460432vw;
    margin-top: 1vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    transition: 0.5s ease;
  }
  #section_middle #section_middle_card #card_desc:hover {
    color: ${palette.SECONDARY_TXT_COLOR};
  }
  @media (max-width: 750px) {
    margin-top: 23.2vw;
    #BlogSectionMain {
      width: 100%;
      padding: 0 5vw;
    }
    #section_top {
      padding: 1vw 0 3vw 0;
    }
    #section_top #section_top_title {
      font-size: 5vw;
    }
    #section_top #Links {
      font-size: 4vw;
    }
    #section_middle {
      grid-template-columns: auto;
      padding: 8vw 0 0 0;
    }
    #section_middle #section_middle_card {
      grid-template-rows: 34vw 14vw;
      border-radius: 0;
    }
    #section_middle #section_middle_card #section_middle_card_top {
      border-radius: 3vw;
    }
    #section_middle #section_middle_card #section_middle_card_top #card_title {
      margin-top: auto;
      color: white;
      font-weight: 700;
      font-size: 6.2vw;
      line-height: 11vw;
      padding: 1vw 0 0 6vw;
    }
    #section_middle #section_middle_card #card_desc {
      display: none;
    }
  }
`
