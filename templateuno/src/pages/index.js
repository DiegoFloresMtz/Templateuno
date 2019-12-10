import React from "react"
import { Link } from "gatsby"
import Carousel from "../components/elements"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sect1 from "../components/sections"

const IndexPage = () => (
  <Layout>
<Carousel/>
    <SEO title="Home" />

  </Layout>
)

export default IndexPage
