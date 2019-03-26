/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const SiteWrapper = styled("div")`
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: black;
`

const MainWrapper = styled("section")`
  padding: 0;
  margin: 0;
  margin-left: 200px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: #3494e6;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.63),
    rgba(87, 240, 232, 0.6),
    rgba(3, 51, 92, 0.425)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const ContentWrapper = styled.main`
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <SiteWrapper>
        <Header />
        <MainWrapper>
          <ContentWrapper>{children}</ContentWrapper>
          <Footer />
        </MainWrapper>
      </SiteWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
