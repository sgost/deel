import React from "react"
import Nav from "../components/Landing/Nav/index"
import Banner from "../components/HowWorks/HireEmployes/Banner"
import PayRoll from "../components/HowWorks/HireEmployes/payRoll"
import Questions from "../components/HowWorks/HireEmployes/Questions"
import Growing from "../components/Landing/Growing"
import Footer from "../components/Landing/Footer/index"

const hireEmployees = () => {
  return (
    <>
      <Nav />
      <Banner />
      <PayRoll />
      <Questions />
      <Growing />
      <Footer />
    </>
  )
}
export default hireEmployees
