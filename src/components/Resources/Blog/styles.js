import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const BlogSection = styled.div`
border:1px solid transparent;
#NavContainer #navLogo #logo{
    color: ${palette.PRIMARY_TXT_COLOR};
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
  #BlogSection{
    display:flex;
    flex-direction:column;
    margin:12vw auto auto auto;
    width:fit-content;
  }
  #BlogSection h1{
    font-size:64px;
    font-weight:700;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  #BlogSection #search{
    width:100%;
    position:relative;
    height:fit-content;
    margin-top:1.5vw;
    height:48px;
  }
  #BlogSection #search #search_bar{
    position:absolute;
    width:100%;
    height:100%;
    border:1px solid #cccccc;
    outline:none;
    border-radius:0.5vw;
    padding: 1vw 1vw 1vw 3.5vw;
    font-weight:700;
  }
  #BlogSection #search #search_logo{
    z-index:1;
    color:#cccccc;
    top:50%;
    transform:translateY(-40%);
    left:1.5vw;
    position:absolute;
    font-weight:700;
  }
  #BlogSection #search_links{
    display:flex;
    width:100%;
    justify-content:space-between;
  }
  #BlogSection #search_links #Links{
    margin:1vw 0 0 0;
    text-decoration:none;
    font-weight:700;
  }
  #BlogSection #search_links #Links:first-child{
    margin-left:0;
  }
`

export const BlogSectionMain = styled.div`
margin-top:2.5vw;
padding:0 0 8vw 0;
#BlogSectionMain{
  width:1160px;
  margin:auto;
}
#section_top{
  width:100%;
  display:flex;
  justify-content:space-between;
  padding:1vw 0;
}
#section_top #section_top_title{
  font-size:20px;
  font-weight:600;
  color: ${palette.PRIMARY_TXT_COLOR};
  width:fit-content;
}
#section_top #Links{
  font-size:14px;
  font-weight:600;
  width:fit-content;
}
#section_middle{
  display:grid;
  grid-template-columns:repeat(4, auto);
  gap:2vw;
  padding:20px 0 0 0;
  border-top:3px solid #e4f2f8;
}
#section_middle #section_middle_card{
  display:grid;
  grid-template-column:100%;
  grid-template-rows:130px 74.7px;
}
#section_middle #section_middle_card #section_middle_card_top{
display:flex;
border-radius:1vw;
padding:1vw;
}
#section_middle #section_middle_card #section_middle_card_top #card_title{
margin-top:auto;
color:white;
font-weight:700;
font-size:18px;
}
#section_middle #section_middle_card #card_desc{
  font-size:14px;
  margin-top:1vw;
  color: ${palette.PRIMARY_TXT_COLOR};
  transition:0.5s ease;
}
#section_middle #section_middle_card #card_desc:hover{
  color:${palette.SECONDARY_TXT_COLOR};
}
`