import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
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
