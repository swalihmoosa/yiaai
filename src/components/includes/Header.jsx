import React from 'react'
import styled from 'styled-components'
import logoImage from '../assets/images/logo.svg'


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
    justify-content: space-between;
    align-items: center;
`
const LogoContainer = styled.div`
    width: 7%;
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
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
`