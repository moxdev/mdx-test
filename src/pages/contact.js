import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h1>Contact Page</h1>
    <p>Welcome to the Contact Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
