import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ImageWrapper = styled.div`
  align-self: center;
  width: 150px;
`

const StyledImage = styled(Img)`
  width: 100%;
  border-radius: 5px;
  border: 5px solid #1565c0;
`

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const MyImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "my_image.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ImageWrapper>
        <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />
      </ImageWrapper>
    )}
  />
)
export default MyImage
