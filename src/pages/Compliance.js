import React, { Fragment } from "react"
import Nav from "../components/Landing/Nav/index"
import Compliance from "../components/Solutions/Compliance"
import Growing from "../components/Landing/Growing/index"
import Footer from "../components/Landing/Footer/index"

const IndexPage = () => {
  return (
    <Fragment>
      <Nav />
      <Compliance />
      <Growing />
      <Footer />
    </Fragment>
  )
}

export default IndexPage
