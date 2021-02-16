import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import ParticleBG from "../components/atoms/ParticleBG"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
    <ParticleBG></ParticleBG>
  </Layout>
)

export default IndexPage
