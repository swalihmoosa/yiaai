import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export default function ExamPage() {
    const [ hour, setHour ] = useState(3);
    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(10);
    const [exams] = useState([
        {
            id : 1,
            question : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea saepe sint repudiandae consectetur, esse quia magnam velit, libero fuga facilis excepturi numquam quam atque doloremque quidem iusto, tempora expedita.",
            answers : [
                {
                    id : "A",
                    option : "adadsd"
                },
                {
                    id : "B",
                    option : "adadsd"
                },
                {
                    id : "C",
                    option : "adadsd"
                },
                {
                    id : "D",
                    option : "adadsd"
                }
            ]
        }
    ])

    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
                if (minutes === 0) {
                    if (hour === 0) {
                        clearInterval(myInterval)
                    } else {
                        setHour(hour - 1);
                        setMinutes(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
    });

    const renderExams = () => (
        exams.map((exam)=>(
            <ExamPaper>
                <Question key={exam.id} >
                    {exam.question}
                </Question>
                {
                    exam.answers.map((answer)=>(
                        <AnswerList key={answer} >
                            <IdContainer>
                                {answer.id}
                            </IdContainer>
                            <OptionContainer>
                                {answer.option}
                            </OptionContainer>
                        </AnswerList>
                    ))
                }
            </ExamPaper>
        ))
    )

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
                        { hour === 0 && minutes === 0 && seconds === 0
                            ? null
                            : <Running> {hour}:{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Running> 
                        }
                    </Time>
                </Description>
                {renderExams()}
            </Wrapper>
        </ExamPageSection>
    )
}
const ExamPageSection = styled.section`
    padding: 10% 0 2%;
`
const Wrapper = styled.section``
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
const ExamPaper = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 3% 2%;
    border-radius: 15px;
    border: 1px solid #bfbfbf;
`
const Question = styled.p`
    font-size: 21px;
    width: 75%;
    margin: 0 auto 5%;
    color: #8b8b8b;
`
const AnswerList = styled.p`
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