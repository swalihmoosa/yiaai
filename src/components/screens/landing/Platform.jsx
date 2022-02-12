import React from 'react'
import styled from 'styled-components'

import storeImage from '../../assets/images/landing/green-and-play.svg'
import yiaImage from '../../assets/images/landing/mobile-app.png'
import lines from '../../assets/images/landing/lines-bg.svg'


export default function Platform() {
    return (
        <PlatformSection>
            <Wrapper>
                <H4>
                    Download Our Mobile App to Make it Easier
                </H4>
                <P>
                Tefun-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ yia.ai മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.
                </P>
                <Store>
                    <Play>
                        <img src={storeImage} alt='Play Store' />
                    </Play>
                    <Play>
                        <img src={storeImage} alt='Play Store' />
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
`
const H4 = styled.h4``
const P = styled.p``
const Store = styled.div``
const Play = styled.button``
const Yia = styled.div``