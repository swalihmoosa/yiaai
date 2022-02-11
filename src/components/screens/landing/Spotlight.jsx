import React from 'react'
import styled from 'styled-components'

import talropImage from '../../assets/images/landing/640.svg'
import arrowImage from '../../assets/images/landing/arrow.svg'
import childImage from '../../assets/images/landing/spot-min.jpeg'
import playImage from '../../assets/images/landing/grey-and-play.svg'
import appImage from '../../assets/images/landing/grey-and-play.svg'
import tefunImage from '../../assets/images/landing/Tefun-logo.svg'
import background from '../../assets/images/landing/elipse.svg'
import playButtonImage from '../../assets/images/play-solid.svg'


export default function Spotlight() {
    return (
        <Wrapper>
            <SpotlightSection>
                <Tefun>
                    <Tef>
                        <img src={tefunImage} alt="Tefun" />
                    </Tef>
                    <Tech>
                        Technology Fundamental Program
                    </Tech>
                    <Head>
                    കേരളത്തിലെ <Green>20 ലക്ഷം</Green> സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!
                    </Head>
                    <Subhead>
                    ഇത് <B>Industry 4.0</B> കാലഘട്ടം, ടെക്ക്‌നോളജിയുടെ പുത്തൻ സാധ്യതകൾ ഇനി നമ്മുടെ കുട്ടികൾ അറിയണം. സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും, 
                    ടെക്ക്-സാക്ഷരത ഉറപ്പുവരുത്തുന്നതിനുമുള്ള സൗജന്യാവസരം ഒരുക്കുകയാണ് <B>Talrop.</B>
                    </Subhead>
                    <Talrop>
                        <img src={talropImage} alt="Talrop" />
                    </Talrop>
                    <ButtonDiv>
                        <Join>
                            Join Now
                        </Join>
                        <Register>
                            <RegDiv>
                                <Campus>
                                    Are you a campus?
                                </Campus>
                                <Reg>
                                    Register Now
                                </Reg>
                            </RegDiv>
                        </Register>
                    </ButtonDiv>
                </Tefun>
                <Video>
                    <Child>
                        <img src={childImage} alt='Child' />
                    </Child>
                    <Store>
                        <Play>
                            <img src={playImage} alt='Playstore' />
                        </Play>
                        <App>
                            <img src={appImage} alt='Playstore' />
                        </App>
                    </Store>
                    <ArrowContainer>
                        <img src={arrowImage} alt='Playstore' />
                    </ArrowContainer>
                    <PlayDiv>
                        <PlayButton src={playButtonImage} alt='Play' />
                    </PlayDiv>
                </Video>
            </SpotlightSection>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    width:90%;
    margin : 0 auto
`
const SpotlightSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #e1e5db;
    padding: 5%;
    border-radius: 30px;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 200px;
        height: 200px;
        right: -5%;
        bottom: -8%;
        z-index: -1;
        background: url(${background}) no-repeat;
    }
`
const Tefun = styled.div`
    width: 48%;
`
const Tef = styled.div`
    width: 35%;
    margin-bottom: 3%;
`
const Tech = styled.h3`
    font-size: 24px;
    margin-bottom: 3%;
    font-weight: 900;
`
const Head = styled.h3`
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 3%;
    color: #2d2d2b;
`
const Green = styled.b`
    color: #5aa870;
    font-size: 45px;
    font-weight: 800;
`
const Subhead = styled.h3`
    font-size: 18px;
    color: #636560;
    width: 90%;
    margin-bottom: 5%;
`
const B = styled.b`
    color: #636560;
    font-weight: 900;
`
const Talrop = styled.div`
    width: 75%;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 3%;
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 65%;
`
const Join = styled.button`
    cursor: pointer;
    width: 47%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
`
const Register = styled.button`
    cursor: pointer;
    width: 47%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    border-radius: 10px;
    padding: 2px;
    background-image: linear-gradient(white, white),linear-gradient(to right, #68ba50, #469aad);
    background-origin: border-box;
    background-clip: content-box, border-box;
`
const RegDiv = styled.div`
    padding: 10px 30px;
`
const Campus = styled.p`
    color: rgb(32, 156, 165);
    font-size: 14px;
`
const Reg = styled.p`
    color: rgb(32, 156, 165);
    font-size: 19px;
`
const Video = styled.div`
    width: 48%;
    position: relative;
`
const Child = styled.div`
    width: 100%;
    border-radius: 25px;
    overflow: hidden;
    transform: rotate(5deg);
    margin-bottom: 7%;
`
const Store = styled.div`
    width:100%;
    display: flex;
`
const Play = styled.button`
    margin-left: auto;
    margin-right: 20px;
    width: 25%;
`
const App = styled.button`
    margin-right: 0; 
    margin-left: 0;
    width: 25%;
`
const ArrowContainer = styled.div`
    position: absolute;
    top: 59%;
    left: -20%;
    transform: rotate(6deg);
    width: 35%;
`
const PlayDiv = styled.div`
    left: 43%;
    top: 30%;
    position: absolute;
    background: linear-gradient(to right,#68ba50,#469aad);
    width: 15%;
    border-radius: 50%;
    overflow: hidden;
    padding: 3% 4% 3% 5%;
`
const PlayButton = styled.img`
    filter: invert(1);
`