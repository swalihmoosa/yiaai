import React from 'react'
import styled from 'styled-components'

export default function School() {
    return (
        <SchoolSection>
            <Wrapper>
                <H4>
                    <B>
                        How
                    </B><br />
                    Schools Can Join
                </H4>
                <Ul>
                    <Li>
                        <ColorDiv>
                        </ColorDiv>
                        <P>
                        Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop-ന്റെ ടീമുമായി 858 999 8744 എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
                        </P>
                        <Round>
                            <img src='' alt='Mobile' />
                        </Round>
                        <Num>
                            01
                        </Num>
                    </Li>
                </Ul>
            </Wrapper>
        </SchoolSection>
    )
}
const SchoolSection = styled.section`
    padding: 7% 0;
`
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
`
const H4 = styled.h4`
    text-align: center;
    margin-bottom: 3%;
    font-size: 35px;
    font-weight: 700;
`
const B = styled.b`
    color: #5aa870;
    font-size: 35px;
    font-weight: 700;
`
const Ul = styled.ul`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Li = styled.li``
const ColorDiv = styled.div``
const P = styled.p``
const Round = styled.div``
const Num = styled.p``