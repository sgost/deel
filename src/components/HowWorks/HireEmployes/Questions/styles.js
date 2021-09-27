import styled from "styled-components"
import * as palette from "../../../../styles/variables"

export const QuestionSection = styled.div`
  padding: 7.19424460431655vw 6vw;
  h1 {
    font-weight: 700;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-size: 3.45323741007194vw;
    margin-bottom: 3.59712230215827vw;
  }
`

export const QuestionSectionContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 41.9424460431655vw 41.9424460431655vw;
  column-gap: 4.60431654676259vw;
`

export const QuestionSectionCards = styled.div`
  border-top: 0.0719424460431655vw solid ${palette.SECONDARY_TXT_COLOR};
  padding: 2.15827338129496vw 0;
  .ant-collapse-borderless > .ant-collapse-item {
    border: 0.143884892086331vw solid red;
  }
  #question h1 {
    margin: 0.719424460431655vw 0;
    font-size: 1.29496402877698vw;
    color: ${palette.PRIMARY_TXT_COLOR};
    font-weight: 500;
    display: flex;
  }
  #question p {
    font-size: 1.29496402877698vw;
    line-height: 1.72;
    font-weight: 400;
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-top: 2.15827338129496vw;
  }
  #question h1 .icon {
    color: ${palette.PRIMARY_TXT_COLOR};
    margin-left: auto;
  }
`
