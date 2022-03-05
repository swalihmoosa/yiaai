import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import leftImage from '../../assets/images/tefun-certificate.svg'
import CountDownModal from '../modals/CountDownModal';


export default function ExamPage() {
    const [ selectedAnswer, setSelectedAnswer ] = useState("");
    const [ examCompleted, setExamCompleted ] = useState(false);
    const [ hour, setHour ] = useState(3);
    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(1);
    const [exams] = useState([
        {
            id : 1,
            question : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea saepe sint repudiandae consectetur, esse quia magnam velit, libero fuga facilis excepturi numquam quam atque doloremque quidem iusto, tempora expedita.",
            answers : [
                {
                    id : "A",
                    option : "sdjhgd"
                },
                {
                    id : "B",
                    option : "skjh"
                },
                {
                    id : "C",
                    option : "adajhsgdhdsd"
                },
                {
                    id : "D",
                    option : "adadsd"
                }
            ]
        },
        {
            id : 2,
            question : "consectetur adipisicing elit. Aperiam ea saepe sint repudiandae consectetur, esse quia magnam velit, ",
            answers : [
                {
                    id : "A",
                    option : "ret"
                },
                {
                    id : "B",
                    option : "vfr"
                },
                {
                    id : "C",
                    option : "sdjfghsgfgygdyfkkhjh"
                },
                {
                    id : "D",
                    option : "sgsdtjsdghghhgdhfghsgfhgfhdgfhgdhfghdgf"
                }
            ]
        },
        {
            id : 3,
            question : "Lorem ",
            answers : [
                {
                    id : "A",
                    option : "htry"
                },
                {
                    id : "B",
                    option : "heart"
                },
                {
                    id : "C",
                    option : "hagsft"
                },
                {
                    id : "D",
                    option : "ader"
                }
            ]
        },
    ])

    const [index, setIndex] = useState(0);
    const currentExam = exams[index];

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes > 0) {
                    setMinutes(minutes-1)
                    setSeconds(59);
                } if (minutes === 0)  {
                    if(hour > 0){
                        setHour(hour - 1)
                        setMinutes(59);
                        setSeconds(59);
                    }
                    if(hour === 0){
                        setExamCompleted(true)
                        clearInterval(myInterval);
                    }
                }
            }
        }, 1000)

        return ()=> {
            clearInterval(myInterval);
        };
    });

    const renderExams = () => (
        <ExamPaper key={currentExam.id} >
        <Question >
            {currentExam.question}
        </Question>
        {
            currentExam.answers.map((answer)=>(
                <AnswerList key={answer.id} onClick={ ()=> { setSelectedAnswer(answer.id) } } 
                className={ selectedAnswer === answer.id && 'active' } >
                    <IdContainer key={answer}>
                        {answer.id}
                    </IdContainer>
                    <OptionContainer>
                        {answer.option}
                    </OptionContainer>
                </AnswerList>
            ))
        }
        <Start>
            <StartIn>
                <Dot>

                </Dot>
                {
                    currentExam.id - 1 === 0 ? <StartHead>start</StartHead> : <StartHead>{currentExam.id-1}</StartHead>
                }
                <CurrentNum>
                    {currentExam.id}
                </CurrentNum>
                <NextNum>
                    {currentExam.id + 1}
                </NextNum>
            </StartIn>
        </Start>
    </ExamPaper>
    )

    return (
        <ExamPageSection>
            <Wrapper>
                <CountDownModal />

                <ExamPaperContainer>
                    {renderExams()}
                    <Next 
                        onClick={() => {
                            if(index < exams.length - 1){
                                setIndex(index + 1)
                            }
                            else{
                                setExamCompleted(true)
                            }
                        }}
                    >
                        Next
                    </Next>
                </ExamPaperContainer>

                <WelcomeBg className={ examCompleted ? 'active' : "" } >
                    <Welcome>
                        <Left>
                            <img src={leftImage} alt='Character' />
                        </Left>
                        <Right>
                            <WelcomeHead>
                                Congratulations
                            </WelcomeHead>
                            <Activated>
                                You're Successfully Completed Your Examination, We will provide your certificate soon.
                            </Activated>
                            <Goto to="/exam-complete/" >
                                Next Page
                            </Goto>
                        </Right>
                    </Welcome>
                </WelcomeBg>

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
    width: 25px;
    height: 25px;
    background: #bfbfbf;
    border-radius: 50%;
    position: absolute;
    left: -14px;
    top: 0px;
`
const StartHead = styled.p`
    font-size: 24px;
    color: #bfbfbf;
    font-weight: 700;
    position: absolute;
    left: 19px;
    top: -5px;
`
const CurrentNum = styled.p`
    position: absolute;
    background: #fff;
    border-radius: 50%;
    font-size: 35px;
    color: #66b858;
    font-weight: 700;
    width: 30px;
    left: -9px;
    top: 50%;
    transform: translateY(-50%);
`
const NextNum = styled.p`
    position: absolute;
    font-size: 20px;
    color: #bfbfbf;
    font-weight: 700;
    left: -8px;
    top: 100%;
`

const WelcomeBg = styled.section`
    position: absolute; 
    left: 0; 
    right: 0;
    top: 50%;
    margin : auto ;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    border-radius: 50px;
    transform: scale(0) translateY(-60%);
    transition: all 0.6s ease 0s;
    &.active{
        transform: scale(1) translateY(-50%);
    }
`
const Welcome= styled.div`
    display: flex;
    justify-content: space-between;
    width: 55%;
    margin: 0 auto;
    align-items: center;
    background: #e4fcf7;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    padding: 5%;
`
const Left = styled.div`
    width: 45%;
`
const Right = styled.div`
    width: 50%;
`
const WelcomeHead = styled.h3`
    text-align: center;
    font-size: 33px;
    font-weight: 900;
    color: #61b262;
    margin-bottom: 5%;

`
const Activated = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #bfbfbf;
    margin-bottom: 5%;
`
const Goto = styled(Link)`
    width: 65%;
    display: block;
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    &:hover{
        cursor: pointer;
    }
`