import React, { useContext } from 'react'
import styled from 'styled-components'

import logoImage from '../../assets/images/logo.svg'
import hamburgerImage from '../../assets/images/header/hamburg.7b560c07.svg'
import arrowImage from '../../assets/images/menu/arrow.svg'

import { JoinContext } from '../../App'
import LoginModal from '../modals/LoginModal'
import UserModal from '../modals/UserModal'

export default function Header() {

    const isLoggin = useContext(JoinContext).isLoggin;
    const {updatehamBurgerClick} = useContext(JoinContext)
    const {updateUseBarClick} = useContext(JoinContext);

    return (
        <HeaderNav>
            <Wrapper>
            <LogoContainer>
                <img src={logoImage} alt="Logo" />
            </LogoContainer>

            {
                isLoggin ? 
                <User onClick={()=> updateUseBarClick() } >
                    <Name>
                        Swalih Moosa
                    </Name>
                    <DownArrow>
                        <img src={arrowImage} alt='Arrow' />
                    </DownArrow>
                </User>
                : 
                <JoinButton onClick={()=> updatehamBurgerClick() } >
                    Join Now
                </JoinButton>
            }

            <HamBurger onClick={()=> updatehamBurgerClick() }  >
                <img src={hamburgerImage} alt="Hamburger" />
            </HamBurger>
            </Wrapper>
            
            <LoginModal />

            <UserModal />

        </HeaderNav>
    )
}
const HeaderNav = styled.header`
    background-color: rgba(255, 255, 255, 0.3);
    padding: 2% 0;
    width: 100%;
    position: fixed;
    z-index: 10;
    box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
`
const Wrapper = styled.section`
    width:90%;
    margin : 0 auto;
    display: flex;
    align-items: center;
`
const LogoContainer = styled.h1`
    width: 7%;
    margin-right: 76%;
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
const User = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 2%;
    width: 9%;
    align-items: center;
    cursor: pointer;
`
const Name = styled.p`
    font-size: 17px;
    font-weight: 700;
    width: 90%;
    color: #bfbfbf;
`
const DownArrow = styled.div`
    transform: rotate(90deg);
    width: 6%;
`