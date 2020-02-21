import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Sect1,
        Sect2,
        Sect3} from "../components/sections";




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Sect1/>

   <Sect2/>

  <Sect3/>

  </Layout>
)

export default IndexPage
