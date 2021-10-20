import React, { Fragment } from "react"
import Nav from "../components/Landing/Nav/index"
import Payments from "../components/Solutions/Payments"
import Growing from "../components/Landing/Growing/index"
import Footer from "../components/Landing/Footer/index"


const IndexPage = () => {
  return (
    <Fragment>
      <Nav />
      <Payments/>
      <Growing/>
      <Footer />
    </Fragment>
  )
}

export default IndexPage
