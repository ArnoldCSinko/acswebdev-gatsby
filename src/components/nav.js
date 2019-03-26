import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledLink = styled(Link)`
  align-self: center;
  color: #b0bec5;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  padding-top: 6px;
  font-size: 1.5rem;
  &:hover {
    color: rgb(87, 240, 232);
  }
`
const Nav = () => (
  <StyledNav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/page-2/">Education</StyledLink>
  </StyledNav>
)

export default Nav
