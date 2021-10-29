import React, { useState } from "react"
import {
  QuestionSection,
  QuestionSectionContainer,
  QuestionSectionCards,
} from "./styles.js"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

const Questions = () => {
  const [opens, setOpens] = useState(true)
  const [openss, setOpenss] = useState(true)
  const [opensss, setOpensss] = useState(true)
  const [open7, setOpen7] = useState(true)
  const [open8, setOpen8] = useState(true)
  const [open9, setOpen9] = useState(true)

  return (
    <>
      <QuestionSection>
        <h1>Common <span>questions</span></h1>
        <QuestionSectionContainer>
          <QuestionSectionCards>
            <div id="question">
              <h1>
                What's an Employer of Record (EOR) ?
                {opens ? (
                  <PlusOutlined
                    className="icon"
                    onClick={() => setOpens(false)}
                  />
                ) : (
                  <MinusOutlined
                    className="icon"
                    onClick={() => setOpens(true)}
                  />
                )}
              </h1>
              {opens ? (
                ""
              ) : (
                <p>
                  Once you onboard with Deel, we'll take care of everything from
                  hiring, onboarding, and HR admin, so you are fully compliant
                  to hire everywhere. While the employee will technically be on
                  Deel's payroll, they'll still work for the company using the
                  EOR, just like any employee.
                </p>
              )}
            </div>
          </QuestionSectionCards>
          <QuestionSectionCards>
            <div id="question">
              <h1>
                What's an Employer of Record (EOR) ?
                {openss ? (
                  <PlusOutlined
                    className="icon"
                    onClick={() => setOpenss(false)}
                  />
                ) : (
                  <MinusOutlined
                    className="icon"
                    onClick={() => setOpenss(true)}
                  />
                )}
              </h1>
              {openss ? (
                ""
              ) : (
                <p>
                  Once you onboard with Deel, we'll take care of everything from
                  hiring, onboarding, and HR admin, so you are fully compliant
                  to hire everywhere. While the employee will technically be on
                  Deel's payroll, they'll still work for the company using the
                  EOR, just like any employee.{" "}
                </p>
              )}
            </div>
          </QuestionSectionCards>
          <QuestionSectionCards>
            <div id="question">
              <h1>
                What's an Employer of Record (EOR) ?
                {opensss ? (
                  <PlusOutlined
                    className="icon"
                    onClick={() => setOpensss(false)}
                  />
                ) : (
                  <MinusOutlined
                    className="icon"
                    onClick={() => setOpensss(true)}
                  />
                )}
              </h1>
              {opensss ? (
                ""
              ) : (
                <p>
                  Once you onboard with Deel, we'll take care of everything from
                  hiring, onboarding, and HR admin, so you are fully compliant
                  to hire everywhere. While the employee will technically be on
                  Deel's payroll, they'll still work for the company using the
                  EOR, just like any employee.{" "}
                </p>
              )}
            </div>
          </QuestionSectionCards>
          <QuestionSectionCards>
            <div id="question">
              <h1>
                What's an Employer of Record (EOR) ?
                {open7 ? (
                  <PlusOutlined
                    className="icon"
                    onClick={() => setOpen7(false)}
                  />
                ) : (
                  <MinusOutlined
                    className="icon"
                    onClick={() => setOpen7(true)}
                  />
                )}
              </h1>
              {open7 ? (
                ""
              ) : (
                <p>
                  Once you onboard with Deel, we'll take care of everything from
                  hiring, onboarding, and HR admin, so you are fully compliant
                  to hire everywhere. While the employee will technically be on
                  Deel's payroll, they'll still work for the company using the
                  EOR, just like any employee.{" "}
                </p>
              )}
            </div>
          </QuestionSectionCards>
          <QuestionSectionCards>
            <div id="question">
              <h1>
                What's an Employer of Record (EOR) ?
                {open8 ? (
                  <PlusOutlined
                    className="icon"
                    onClick={() => setOpen8(false)}
                  />
                ) : (
                  <MinusOutlined
                    className="icon"
                    onClick={() => setOpen8(true)}
                  />
                )}
              </h1>
              {open8 ? (
                ""
              ) : (
                <p>
                  Once you onboard with Deel, we'll take care of everything from
                  hiring, onboarding, and HR admin, so you are fully compliant
                  to hire everywhere. While the employee will technically be on
                  Deel's payroll, they'll still work for the company using the
                  EOR, just like any employee.{" "}
                </p>
              )}
            </div>
          </QuestionSectionCards>
          <QuestionSectionCards>
            <div id="question">
              <h1>
                What's an Employer of Record (EOR) ?
                {open9 ? (
                  <PlusOutlined
                    className="icon"
                    onClick={() => setOpen9(false)}
                  />
                ) : (
                  <MinusOutlined
                    className="icon"
                    onClick={() => setOpen9(true)}
                  />
                )}
              </h1>
              {open9 ? (
                ""
              ) : (
                <p>
                  Once you onboard with Deel, we'll take care of everything from
                  hiring, onboarding, and HR admin, so you are fully compliant
                  to hire everywhere. While the employee will technically be on
                  Deel's payroll, they'll still work for the company using the
                  EOR, just like any employee.{" "}
                </p>
              )}
            </div>
          </QuestionSectionCards>
        </QuestionSectionContainer>
      </QuestionSection>
    </>
  )
}
export default Questions
