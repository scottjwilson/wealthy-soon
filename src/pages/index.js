import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Optin from "../components/Optin"
import Testimonials from "../components/Testimonials"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Supply & Demand Trading" />
      <Header
        heading1="wealthy soon"
        heading2="SUPPLY & DEMAND TRADING COURSE
        "
        paragraph="Bits of Advice for Traders seeking maximum profitablity

        "
      />
      <Optin />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage
