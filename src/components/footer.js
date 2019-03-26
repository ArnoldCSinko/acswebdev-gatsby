import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
`
const Left = styled.div`
  margin: 0;
  padding: 0;
`

const Footer = () => (
  <StyledFooter>
    <Left>
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </Left>
  </StyledFooter>
)

export default Footer
