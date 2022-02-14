import React, { useState } from 'react'
import styled from 'styled-components'

import dropImage from '../../assets/images/landing/down-arrow.svg'


export default function Faq() {
    const[selectedId,setSelectedId] = useState("")
    const[isClicked,setIsClicked] = useState(false)
    const [faqLists,setFaqLists]= useState([
        {
            id:1,
            question : "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer : "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:2,
            question : "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer : "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
    ])


    const faqs = () => {
        return faqLists.map((faqlist) => (
            <Li onClick={ ()=> setSelectedId(faqlist.id) } className={faqlist.id === selectedId && 'active' } >
                <Question key={faqlist.id} >
                    <P>
                        {faqlist.question}
                    </P>
                    <Drop className='drop' >
                        <img src={dropImage} alt='Drop-Down' />
                    </Drop>
                </Question>
                <Answer className='answer' >
                    {faqlist.answer}
                </Answer>
            </Li>
        ));
    };


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
                    {faqs()}
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
    &.active .answer{
        display: block;
    }
    &.active .drop{
        transform: rotate(180deg);
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
`
const Answer = styled.p`
    font-size: 20px;
    display: none;
    transition: all 0.3s ease 0s;
`