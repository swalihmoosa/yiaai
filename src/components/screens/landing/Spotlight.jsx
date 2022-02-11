import React from 'react'
import styled from 'styled-components'

export default function Spotlight() {
    return (
        <Wrapper>
            <SpotlightSection>
                <Tefun>
                    <Tef>
                        TEFUN
                    </Tef>
                    <Tech>
                        Technology Fundamental Program
                    </Tech>
                    <Head>
                    കേരളത്തിലെ <Green>20 ലക്ഷം</Green> സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!
                    </Head>
                    <Subhead>

                    </Subhead>
                    <Talrop>

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

                </Video>
            </SpotlightSection>
        </Wrapper>
    )
}
const Wrapper = styled.section``
const SpotlightSection = styled.section``
const Tefun = styled.div``
const Tef = styled.h1``
const Tech = styled.h3``
const Head = styled.h3``
const Green = styled.p``
const Subhead = styled.h3``
const Talrop = styled.div``
const ButtonDiv = styled.div``
const Join = styled.button``
const Register = styled.button``
const Campus = styled.p``
const Reg = styled.p``
const Video = styled.div``