import React from 'react'
import styled from 'styled-components'
import logoImage from '../assets/images/logo.svg'
import hamburgerImage from '../assets/images/hamburg.7b560c07.svg'


export default function Header() {
  return (
      <HeaderNav>
          <Wrapper>
            <LogoContainer>
                <img src={logoImage} alt="Logo" />
            </LogoContainer>
            <JoinButton>
                Join Now
            </JoinButton>
            <HamBurger>
                <img src={hamburgerImage} alt="Hamburger" />
            </HamBurger>
          </Wrapper>
      </HeaderNav>
  )
}
const HeaderNav = styled.header`
    background-color: rgba(255, 255, 255, 0.3);
    padding: 2% 0;
    width: 100%;
`
const Wrapper = styled.section`
    width:90%;
    margin : 0 auto;
    display: flex;
    align-items: center;
`
const LogoContainer = styled.h1`
    width: 7%;
    margin-right: 73%;
`
const JoinButton = styled.button`
    cursor: pointer;
    width: 10%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: rgb(255, 255, 255);
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right, #68ba50,#469aad);
    margin-right: 3%;
`
const HamBurger = styled.div`
    width: 2%;
    cursor: pointer;
`