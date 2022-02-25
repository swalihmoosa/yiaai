import React from 'react'
import styled from 'styled-components'

import storeImage from '../../assets/images/landing/green-and-play.svg'
import appImage from '../../assets/images/landing/grey-app-play.svg'
import yiaImage from '../../assets/images/landing/mobile-app.png'
import lines from '../../assets/images/landing/lines-bg.svg'


export default function Platform() {
    return (
        <PlatformSection>
            <Wrapper>
                <H4>
                    Download Our Mobile<br /> App to Make it Easier
                </H4>
                <P>
                <Brand>Tefun</Brand>-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ <Brand>yia.ai</Brand> മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.
                </P>
                <Store>
                    <Play href="https://play.google.com/store/apps/details?id=com.yiaai" target="blank" >
                        <img src={storeImage} alt='Play Store' />
                    </Play>
                    <Play href="https://apps.apple.com/in/app/yiaai-ott-community-platform/id1609634713" target="blank" >
                        <img src={appImage} alt='Play Store' />
                    </Play>
                </Store>
                <Yia>
                    <img src={yiaImage} alt='Yia' />
                </Yia>
            </Wrapper>
        </PlatformSection>
    )
}
const PlatformSection = styled.section`
    padding: 5% 0;
`
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    background: url(${lines});
    background-color: #f3f9eb;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 5%;
    position: relative;
`
const H4 = styled.h4`
    font-size: 45px;
    margin-bottom: 3%;
    font-weight: 900;
`
const P = styled.p`
    font-size: 25px;
    margin-bottom: 6%;
    font-weight: 400;
    width: 48%;
    color: #666962;
`
const Brand = styled.b`
    font-weight: 900;
    color: #5aa870;
`
const Store = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
`
const Play = styled.a`
    width: 45%;
    display: block;
`
const Yia = styled.div`
    width: 55%;
    position: absolute;
    top: -6%;
    right: 0%;

`