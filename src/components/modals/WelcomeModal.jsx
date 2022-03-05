import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import leftImage from '../../assets/images/details/activated.svg'


export default function WelcomeModal({isSubmitted}) {
    return (
        <WelcomeBg className={ isSubmitted ? 'active' : "" } >
            <Welcome>
                <Left>
                    <img src={leftImage} alt='Character' />
                </Left>
                <Right>
                    <WelcomeHead>
                        Welcome
                    </WelcomeHead>
                    <Activated>
                        You're Successfully activated Your Tefun Program
                    </Activated>
                    <Goto to="/video-page/" >
                        Go to Dashboard
                    </Goto>
                </Right>
            </Welcome>
        </WelcomeBg>
    )
}
const WelcomeBg = styled.section`
    position: fixed; 
    left: 0; 
    right: 0;
    top: 50%;
    margin : auto ;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    border-radius: 50px;
    transform: scale(0) translateY(-50%);
    transition: all 0.6s ease 0s;
    z-index:1 ;
    &.active{
        transform: scale(1) translateY(-50%);
    }
`
const Welcome= styled.div`
    display: flex;
    justify-content: space-between;
    width: 55%;
    margin: 0 auto;
    align-items: center;
    background: #e4fcf7;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
`
const Left = styled.div`
    width: 45%;
`
const Right = styled.div`
    width: 50%;
`
const WelcomeHead = styled.h3`
    text-align: center;
    font-size: 33px;
    font-weight: 900;
    color: #61b262;
    margin-bottom: 5%;

`
const Activated = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #bfbfbf;
    margin-bottom: 5%;
`
const Goto = styled(Link)`
    width: 65%;
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    &:hover{
        cursor: pointer;
    }
`