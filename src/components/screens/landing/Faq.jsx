import React from 'react'
import styled from 'styled-components'

import dropImage from '../../assets/images/landing/down-arrow.svg'


export default function Faq() {
    return (
        <FaqSection>
            <Wrapper>
                <Head>
                    <Bold>
                        Freaquently
                    </Bold>
                    Asked Questions
                </Head>
                <Ul>
                    <Li>
                        <Question>
                            <P>
                                <Brand>
                                Tefun
                                </Brand>
                                 പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?
                            </P>
                            <Drop>
                                <img src={dropImage} alt='Drop-Down' />
                            </Drop>
                        </Question>
                        <Answer>

                        </Answer>
                    </Li>
                </Ul>
            </Wrapper>
        </FaqSection>
    )
}
const FaqSection = styled.section``
const Wrapper = styled.section``
const Head = styled.h4``
const Bold = styled.b``
const Ul = styled.ul``
const Li = styled.li``
const Question = styled.p``
const P = styled.p``
const Brand = styled.b``
const Drop = styled.div``
const Answer = styled.p``