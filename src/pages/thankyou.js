import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThankYouHeader from "../components/ThankYouHeader"

const ThankYou = () => (
  <Layout>
    <SEO title="almost there..." />
    <ThankYouHeader
      heading1="Congratulations"
      heading2="check your inbox for your discount code"
    />
  </Layout>
)

export default ThankYou
