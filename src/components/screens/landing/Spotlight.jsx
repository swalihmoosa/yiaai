import React from 'react'
import styled from 'styled-components'
import talropImage from '../../assets/images/landing/640.svg'
import arrowImage from '../../assets/images/landing/arrow.svg'
import childImage from '../../assets/images/landing/spot-min.jpeg'
import playImage from '../../assets/images/landing/grey-and-play.svg'
import appImage from '../../assets/images/landing/grey-and-play.svg'
import tefunImage from '../../assets/images/landing/Tefun-logo.svg'


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
                    ഇത് Industry 4.0 കാലഘട്ടം, ടെക്ക്‌നോളജിയുടെ പുത്തൻ സാധ്യതകൾ ഇനി നമ്മുടെ കുട്ടികൾ അറിയണം. സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും, 
                    ടെക്ക്-സാക്ഷരത ഉറപ്പുവരുത്തുന്നതിനുമുള്ള സൗജന്യാവസരം ഒരുക്കുകയാണ് Talrop.
                    </Subhead>
                    <Talrop>
                        <img src={talropImage} alt="Talrop" />
                    </Talrop>
                    <ButtonDiv>
                        <Join>
                            Join Now
                        </Join>
                        <Register>
                            <Campus>
                                Are you a campus?
                            </Campus>
                            <Reg>
                                Register Now
                            </Reg>
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
const Subhead = styled.h3``
const Talrop = styled.div``
const ButtonDiv = styled.div``
const Join = styled.button``
const Register = styled.button``
const Campus = styled.p``
const Reg = styled.p``
const Video = styled.div`
    width: 48%;
`
const Child = styled.div``
const Store = styled.div``
const Play = styled.button``
const App = styled.button``
const ArrowContainer = styled.div``