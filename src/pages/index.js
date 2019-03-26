import React from "react"
import Layout from "../components/layout"
import MyImage from "../components/myImage"
import SEO from "../components/seo"
import { H1, Span, StyledP } from "../components/tags"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `portfolio`,
        `web development`,
        `gatsby`,
        `application`,
        `react`,
      ]}
    />
    <H1>
      ARNOLD<Span>SINKO</Span>
    </H1>
    <MyImage />
    <StyledP>
      I’m a Web developer with a B.S. in Computer Science from the University of
      North Carolina at Charlotte. My focus is in creating responsive,
      cross-browser, web applications using current industry standards.
    </StyledP>
  </Layout>
)

export default IndexPage
