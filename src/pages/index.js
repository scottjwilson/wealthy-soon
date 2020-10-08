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
      <Header />
      <Optin />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage
