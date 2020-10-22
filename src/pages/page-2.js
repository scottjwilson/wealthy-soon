import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useScript } from "../hooks/useScript"
const SecondPage = () => {
  // useScript("https://gumroad.com/js/gumroad.js")
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <button>hey</button>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
