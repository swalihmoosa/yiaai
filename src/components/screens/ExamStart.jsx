import React from 'react'
import styled from 'styled-components'


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
                        "kjahsjkdhsjd"
                    </Question>
                        <AnswerList>
                            <IdContainer>
                                "khbsdg"
                            </IdContainer>
                            <OptionContainer>
                                "jhsgdh"
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
                        Next
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
const Question = styled.p`
    font-size: 21px;
    width: 75%;
    margin: 0 auto 5%;
    color: #8b8b8b;
`
const AnswerList = styled.div`
    background: #dcf2ff;
    border: 1px solid #d1c3c3;
    width: 75%;
    margin: 0 auto 2%;
    padding: 1% 2%;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
    &.active{
        border: 2px solid #629a9b;
    }
`
const IdContainer = styled.p`
    width: 30px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid #bfbfbf;
    height: 30px;
    border-radius: 5px;
    font-weight: 700;
`
const OptionContainer = styled.p`
    width: 95%;
    text-align: left;
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
    margin-left: auto;
    &:hover{
        transition: all 0.5s ease 0s;
        background-image: linear-gradient(to right, #469aad,#68ba50);
        cursor: pointer;

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
    background: #bfbfbf;
    border-radius: 50%;
    position: absolute;
    left: -12px;
    top: 6px;
`
const StartHead = styled.p`
    font-size: 20px;
    color: #bfbfbf;
    font-weight: 700;
`
const CurrentNum = styled.p`
    position: absolute;
    background: #fff;
    border-radius: 50%;
    font-size: 35px;
    color: #66b858;
    font-weight: 700;
    left: -25px;
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
