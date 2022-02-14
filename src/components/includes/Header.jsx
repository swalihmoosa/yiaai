import React, { useState } from 'react'
import styled from 'styled-components'

import logoImage from '../assets/images/logo.svg'
import hamburgerImage from '../assets/images/hamburg.7b560c07.svg'
import flagImage from '../assets/images/menu/india-flag.jpeg'
import arrowImage from '../assets/images/menu/arrow.svg'
import closeImage from '../assets/images/menu/close.svg'
import decorator from '../assets/images/menu/decorator.svg'
import callImage from '../assets/images/menu/phone.svg'


export default function Header() {
    const[hamBurgerClick,setHarmBurgerClick] = useState(false)

  return (
      <HeaderNav>
          <Wrapper>
            <LogoContainer>
                <img src={logoImage} alt="Logo" />
            </LogoContainer>
            <JoinButton onClick={ ()=> { setHarmBurgerClick( hamBurgerClick => !hamBurgerClick ) } } >
                Join Now
            </JoinButton>
            <HamBurger onClick={ ()=> { setHarmBurgerClick( hamBurgerClick => !hamBurgerClick ) } } >
                <img src={hamburgerImage} alt="Hamburger" />
            </HamBurger>
          </Wrapper>
          <MenuBar className={hamBurgerClick ? 'active' : ''} >
              <White>
                <H4>
                Login to your account
                </H4>
                <P>
                Enter your registered phone number
                </P>
                <Mob>
                    <Flag>
                        <img src={flagImage} alt='Flag' />
                    </Flag>
                    <Arrow>
                        <img src={arrowImage} alt='Arrow' />
                    </Arrow>
                    <Form>
                        <Call>
                            <img src={callImage} alt='Call' />
                        </Call>
                        <Input type="number" placeholder="Enter MObile NUmber" />
                    </Form>
                </Mob>
                <Next>
                    Next
                </Next>
                <New>
                        New to Yiaai?
                    <B> Create an account
                    </B>
                </New>
                <Hr />
                <Terms>
                Terms of service
                </Terms>
            </White>
            <Close onClick={ ()=> { setHarmBurgerClick( hamBurgerClick => !hamBurgerClick ) } } >
                <img src={closeImage} alt="Close" />
            </Close>
          </MenuBar>
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
    &:hover{
        transition: all 0.5s ease 0s;
        background-image: linear-gradient(to right, #469aad,#68ba50);

    }
`
const HamBurger = styled.div`
    width: 2%;
    cursor: pointer;
`
const MenuBar = styled.div`
    position: fixed;
    right: -100%;
    top: 0px;
    width: 600px;
    opacity: 1;
    height: 100vh;
    background-color: #fff;
    transition: all 0.4s ease 0s;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.active{
        right: 0px;
        top: 0px;
    }
`
const White = styled.div`
    background: #fff;
    background: url(${decorator});
    background-size: 100%;
    padding: 50% 15% 0;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
`
const H4 = styled.h4`
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 3%;
`
const P = styled.p`
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 15%;
`
const Mob = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 11%;
`
const Flag = styled.div`
    width: 12%;
    border-radius: 50%;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 2%;
    transform: rotate(90deg);
`
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    border: 2px solid #5aa970;
    border-radius: 13px;
    padding: 10px 25px;
`
const Call = styled.div`
    width: 7%;
`
const Input = styled.input`
    width: 90%;
`
const Next = styled.button`
    width: 100%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    margin-bottom: 6%;
    &:hover{
        background-image: linear-gradient(to right,#469aad,#68ba50);
        cursor: pointer;
    }
`
const New = styled.p`
    margin-bottom: 55%;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
`
const B = styled.b`
    font-size: 15px;
    font-weight: 600;
    color: #5aa970;
    &:hover{
        cursor: pointer;
    }
`
const Hr = styled.hr`
    width: 100%;
    border-top: 1px dotted #000;
    margin-bottom: 8%;
`
const Terms = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    &:hover{
        cursor: pointer;
    }
`
const Close = styled.div`
    position: absolute;
    width: 7%;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
    padding: 2%;
    left: -9%;
    top: 2%;
    &:hover{
        cursor: pointer;
    }
`