import React from "react"
import styled from "styled-components"
import Nav from "../components/nav"

const StyledHeader = styled.header`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: space-between;
  height: 100%;
  width: 200px;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 5px 0 5px gray;
`

const Header = () => (
  <StyledHeader>
    <Nav />
  </StyledHeader>
)

export default Header
