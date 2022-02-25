import React, { useState } from 'react'
import styled from 'styled-components'

import dropImage from '../../assets/images/landing/down-arrow.svg'


export default function Faq() {
    const[selectedId,setSelectedId] = useState("")
    const [faqLists]= useState([
        {
            id:1,
            question : "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer : "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:2,
            question : "എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക?",
            answer : "ഈ പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop നൽകിയിരിക്കുന്ന ഫോൺ നമ്പരിൽ കോൺടാക്ട് ചെയ്ത് പ്രോഗ്രാം സ്കൂളിൽ നടപ്പിലാക്കാവുന്നതാണ്.",
        },
        {
            id:3,
            question : "എന്താണ് Tefun ലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭിക്കുന്ന നേട്ടം?",
            answer : "ലളിതവും രസകരവുമായ ടെക്ക്നോളജി പഠനമാണ് Tefun പ്രോഗ്രാമിലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭ്യമാകുന്നത്. AI, Robotics, IoT, 3D Printing, Metaverse, web 3.0 എന്നിങ്ങനെ 70-ൽപ്പരം ഭാവിയിലെ ടെക്ക്നോളജി സാധ്യതകളെക്കുറിച്ചാണ് Tefun വിദ്യാർത്ഥികളുടെ മുൻപിലേക്ക് എത്തിക്കുന്നത്. Tefun പ്രോഗ്രാം വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നതാണ്.",
        },
        {
            id:4,
            question : "Tefun പ്രോഗ്രാം നിലവിലെ പഠനത്തെ ബാധിക്കുമോ?",
            answer : "അക്കാദമിക് പഠനത്തിന് ശേഷം ഒഴിവുസമയങ്ങളിൽ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കാവുന്നതാണ്. പത്തു മണിക്കൂറിൽ താഴെയാണ് പ്രോഗ്രാം ഡ്യൂറേഷൻ വരുന്നത്. ഒരു ദിവസം 15 മിനിറ്റ് മാറ്റിവെച്ചാൽ പ്രോഗ്രാം നിശ്ചയിച്ച കാലയളവിൽ പൂർത്തിയാക്കാവുന്നതാണ്.",
        },
        {
            id:5,
            question : "വിദ്യാർത്ഥികൾക്ക് ഡയറക്ട് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുമോ?",
            answer : "Tefun പ്രോഗ്രാം സ്കൂളുകൾ മുഖേനയാണ് നടപ്പിലാക്കുന്നത്. അതുകൊണ്ട് തന്നെ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖാന്തരം മാത്രമേ പങ്കെടുക്കാൻ സാധിക്കുകയുള്ളൂ. നിങ്ങളുടെ സ്കൂൾ ഇതിൽ ഭാഗമായിട്ടില്ലെങ്കിൽ സ്കൂൾ അധികൃതരുമായി ബന്ധപ്പെട്ട ശേഷം നിങ്ങളുടെ സ്കൂൾ Tefun-ൽ രജിസ്റ്റർ ചെയ്ത് പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
    ])


    const faqs = () => {
        return faqLists.map((faqlist) => (
            <Li 
            onClick={ ()=>{
                if(faqlist.id === selectedId){
                    setSelectedId("")
                }else{
                    setSelectedId(faqlist.id)
                }
            }}
            className={faqlist.id === selectedId && 'active'} 
            key={faqlist.id} >
                <Question  >
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
const Drop = styled.div`
    color: #5aa870;
    transition: all 0.3s ease 0s;
`
const Answer = styled.p`
    font-size: 20px;
    display: none;
    transition: all 0.3s ease 0s;
`