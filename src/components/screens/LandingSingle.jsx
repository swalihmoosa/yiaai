import React from 'react'
import styled from 'styled-components'

import bg from '../assets/images/landingSingle/background.svg'
import tefunImage from '../assets/images/landingSingle/tefun-image.svg'
import steypImage from '../assets/images/landingSingle/640.svg'
import arrowImage from '../assets/images/landingSingle/Icon feather-arrow-right.svg'


export default function LandingSingle() {
    return (
        <LandingSingleSection>
            <Wrapper>
                <Steyp>
                    <img src={steypImage} alt='Steyp' />
                </Steyp>
                <Presents>Presents</Presents>
                <Tefun>
                    <img src={tefunImage} alt='Tefun' />
                </Tefun>
                <Description>
                കേരളത്തിലെ 20ലക്ഷം വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി റെക്കോണാലോഗിയുടെ സാധ്യതകൾ അറിയാം!
                </Description>
                <Tech>Tech സാക്ഷരത ഉറപ്പുവരുത്താം</Tech>
                <Start>Start Learning 
                    <Arrow>
                        <img src={arrowImage} alt='Arrow' />
                    </Arrow>
                </Start>
            </Wrapper>
        </LandingSingleSection>
    )
}

const LandingSingleSection = styled.section`
    padding: 10% 0 2%;
`
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    background: url(${bg});
    background-size: 100%;
    padding: 5%;
`
const Steyp = styled.div`
    width: 50%;
    margin: 0 auto 5%;
`
const Presents = styled.p`
    text-align: center;
    width: 25%;
    margin: 0 auto 5%;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width: 75px;
        height: 2px;
        left: 9%;
        bottom: 13px;
        background: #fff;
    }
    &::after{
        content: "";
        position: absolute;
        width: 75px;
        height: 2px;
        right: 9%;
        bottom: 13px;
        background: #fff;
    }
`
const Tefun = styled.div``
const Description = styled.p``
const Tech = styled.p``
const Start = styled.button``
const Arrow = styled.div``