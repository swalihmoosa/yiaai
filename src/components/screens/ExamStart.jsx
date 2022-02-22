import React from 'react'
import styled from 'styled-components'

import arrowImage from '../assets/images/arrow-right-solid.svg'


export default function ExamPage() {

    return (
        <ExamPageSection>
            <Wrapper>
                <Description>
                    <Char>
                        {/* <img src='' alt='Character' /> */}
                    </Char>
                    <Paragraph>
                        Tefun Examination
                    </Paragraph> 
                    <Time>
                        <TimeHead>
                            Time Remaining
                        </TimeHead>
                        <Running>03 : 00 : 00</Running> 
                    </Time>
                </Description>
                <ExamPaperContainer>



                <ExamPaper>
                    <Question >
                        <b>Examination</b> Instructions
                    </Question>
                        <AnswerList>
                            <IdContainer>
                                <BgDot></BgDot>
                            </IdContainer>
                            <OptionContainer>
                            60 മിനിറ്റ് ആയിരിക്കും എക്സാം ഉണ്ടാകുക
                            </OptionContainer>
                        </AnswerList>
                        <AnswerList>
                            <IdContainer>
                                <BgDot></BgDot>
                            </IdContainer>
                            <OptionContainer>
                            എല്ലാ ചോദ്യത്തിനും തെയ്യം എഴുതണം
                            </OptionContainer>
                        </AnswerList>
                        <AnswerList>
                            <IdContainer>
                                <BgDot></BgDot>
                            </IdContainer>
                            <OptionContainer>
                            ഓരോ ശരിയുത്തരത്തിനും ഓരോ വിക്കറ്റ് വീതം ലഭിക്കും
                            </OptionContainer>
                        </AnswerList>
                        <AnswerList>
                            <IdContainer>
                                <BgDot></BgDot>
                            </IdContainer>
                            <OptionContainer>
                            കോഴ്സ് സർട്ടിഫിക്കറ്റ് നിങ്ങളുടെ സ്കൂളിലേക്ക് എത്തിക്കുന്നത്
                            </OptionContainer>
                        </AnswerList>
                        <AnswerList>
                            <IdContainer>
                                <BgDot></BgDot>
                            </IdContainer>
                            <OptionContainer>
                            ഓരോ ശരിയുത്തരത്തിനും ഓരോ വിക്കറ്റ് വീതം ലഭിക്കും
                            </OptionContainer>
                        </AnswerList>
                    <Start>
                        <StartIn>
                            <Dot>

                            </Dot>
                            <StartHead>
                                Start
                            </StartHead>
                            <CurrentNum>
                                01
                            </CurrentNum>
                            <NextNum>
                                02
                            </NextNum>
                        </StartIn>
                    </Start>
                </ExamPaper>

                    <Next>
                        Start Exam Now
                        <Arrow>
                            <img src={arrowImage} alt='Arrow' />
                        </Arrow>
                    </Next>
                </ExamPaperContainer>
            </Wrapper>
        </ExamPageSection>
    )
}
const ExamPageSection = styled.section`
    padding: 10% 0 2%;
`
const Wrapper = styled.section`
    position: relative;
`
const Description = styled.div`
    width: 90%;
    background : #fdf3eb;
    display: flex;
    margin: 0 auto;
    padding: 3% 2%;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 1%;
    border: 1px solid #bfbfbf;
`
const Paragraph = styled.p`
    color: #000;
    margin-left: 2%;
    font-size: 18px;
    font-weight: 700;
`
const Char = styled.div`
    width: 50px;
    height: 50px;
    background: #d2814a;
    border-radius: 50%;
`
const Time = styled.div`
    margin-left: auto;
    position: relative;

    &::before{
        position: absolute;
        content: "";
        height: 100%;
        width: 2px;
        border-left: 2px solid #bfbfbf;
        left: -33%;
    }
`
const TimeHead = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 700;
`
const Running = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: #bfbfbf;
    text-align: center;
`
const ExamPaperContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 3% 2%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
`
const ExamPaper = styled.div`
    width: 100%;
    position: relative;
`
const Question = styled.h3`
    text-align: center;
    font-size: 35px;
    font-weight: 700; 
    margin: 0 auto 5%;
    color: #000;
    & b{
        font-size: 35px;
        font-weight: 700;
        color : #66b858;
    }
`
const AnswerList = styled.div`
    width: 50%;
    margin: 0 auto 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const IdContainer = styled.div`
    width: 20px;
    background: #fff;
    border: 1px solid #66b858;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BgDot = styled.div`
    width: 75%;
    background: #66b858;
    height: 75%;
    border-radius: 50%;
`
const OptionContainer = styled.p`
    width: 95%;
    text-align: left;
    font-size: 22px;
`
const Next = styled.button`
    width: 15%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: rgb(255, 255, 255);
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right, #68ba50,#469aad);
    margin: 4% auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        transition: all 0.5s ease 0s;
        background-image: linear-gradient(to right, #469aad,#68ba50);
        cursor: pointer;

    }
    &:hover div{
        transform: scale(1.5);
        margin-left: 5px;
        transition: all 0.5s ease 0s;
    }
`
const Arrow = styled.div`
    width: 10%;
    & img{
        filter: invert(1);
    }
`
const Start = styled.div`
    position: absolute;
    border-left: 2px dotted #66b858;
    height: 45%;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
`
const StartIn = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 20px;
`
const Dot = styled.div`
    width: 20px;
    height: 20px;
    background: #66b858;
    border-radius: 50%;
    position: absolute;
    left: -12px;
    top: 0px;
`
const StartHead = styled.p`
    font-weight: 700;
    font-size: 35px;
    color: #66b858;
    position: absolute;
    top: -15px;
`
const CurrentNum = styled.p`
    position: absolute;
    background: #fff;
    border-radius: 50%;
    font-size: 20px;
    color: #bfbfbf;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
`
const NextNum = styled.p`
    position: absolute;
    font-size: 20px;
    color: #bfbfbf;
    font-weight: 700;
    left: -13px;
    top: 100%;
`
