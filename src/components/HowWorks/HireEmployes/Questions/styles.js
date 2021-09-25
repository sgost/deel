import styled from "styled-components"
import * as palette from "../../../../styles/variables"

export const QuestionSection = styled.div`
  padding: 100px 150px;
  h1 {
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 48px;
    margin-bottom: 50px;
  }
`

export const QuestionSectionContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 583px 583px;
  column-gap: 64px;
`

export const QuestionSectionCards = styled.div`
  border-top: 1px solid ${palette.SECONDARY_TXT_COLOR};
  padding: 30px 0;
  .ant-collapse-borderless > .ant-collapse-item{
      border:2px solid red;
  }
  #question h1 {
    margin: 10px 0;
    font-size: 18px;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
    display: flex;
  }
  #question p {
    font-size: 18px;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-top: 30px;
  }
  #question h1 .icon {
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-left: auto;
  }
`
