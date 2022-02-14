import React, { useState } from 'react'
import styled from 'styled-components'

import dropImage from '../../assets/images/landing/down-arrow.svg'


export default function Faq() {
    const[click,setClick] = useState(false)

    return (
        <FaqSection>
            <Wrapper>
                <Head>
                    <Bold>
                        Frequently
                    </Bold><br />
                    Asked Questions
                </Head>
                <Ul>
                    <Li onClick={ ()=> { setClick(click=> !click) } } className={click ? 'active' : '' } >
                        <Question>
                            <P>
                                <Brand>
                                Tefun
                                </Brand> പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?
                            </P>
                            <Drop className={click ? 'active' : ''}  >
                                <img src={dropImage} alt='Drop-Down' />
                            </Drop>
                        </Question>
                        <Answer className={click ? 'active' : ''} >
                        LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.
                        </Answer>
                    </Li>
                    <Li>
                        <Question>
                            <P>
                                <Brand>
                                Tefun
                                </Brand> പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?
                            </P>
                            <Drop>
                                <img src={dropImage} alt='Drop-Down' />
                            </Drop>
                        </Question>
                        <Answer>
                        LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.
                        </Answer>
                    </Li>
                    <Li>
                        <Question>
                            <P>
                                <Brand>
                                Tefun
                                </Brand> പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?
                            </P>
                            <Drop>
                                <img src={dropImage} alt='Drop-Down' />
                            </Drop>
                        </Question>
                        <Answer>
                        LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.
                        </Answer>
                    </Li>
                    <Li>
                        <Question>
                            <P>
                                <Brand>
                                Tefun
                                </Brand> പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?
                            </P>
                            <Drop>
                                <img src={dropImage} alt='Drop-Down' />
                            </Drop>
                        </Question>
                        <Answer>
                        LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.
                        </Answer>
                    </Li>
                </Ul>
            </Wrapper>
        </FaqSection>
    )
}
const FaqSection = styled.section`
    padding: 5% 0;
`
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
`
const Head = styled.h4`
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 3%;
`
const Bold = styled.b`
    color: #5aa870;
    font-weight: 700;
`
const Ul = styled.ul`
    width: 70%;
    margin: 0 auto;
`
const Li = styled.li`
    background: #f8fbf4;
    border: 2px solid #e3edda;
    padding: 2% 3%;
    border-radius: 20px;
    margin-bottom: 3%;
    transition: all 0.3s ease 0s;
    &:last-child{
        margin-bottom: 0%;
    }
    &:hover{
        cursor: pointer;
    }
`
const Question = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1%;
`
const P = styled.p`
    font-size: 20px;
`
const Brand = styled.b`
    color: #5aa870;
    font-weight: 900;
`
const Drop = styled.div`
    color: #5aa870;
    transition: all 0.3s ease 0s;
    &.active{
        transform: rotate(180deg);
    }
`
const Answer = styled.p`
    font-size: 20px;
    display: none;
    transition: all 0.3s ease 0s;
    &.active{
        display: block;
    }
`