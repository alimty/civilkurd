import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people ali 02</h1>
    <h2>this is test Header for CI/CD</h2>
    <h2>this is test Header for CI/CD 2</h2>
    <h2>this is test Header for CI/CD 3</h2>
    <p>Welcome to your new Civil Kurd website.</p>
    <p>This will be a platform and so on so forth</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
