import React from 'react'
import styled from 'styled-components'

import warningImage from '../../assets/images/videoPage/triangle-exclamation-solid.svg'

import { Link } from 'react-router-dom'

export default function ExamStartModal({examNotify, examStart}) {
    return (
        <Exam>
            <Warning>
                <img src={warningImage} alt='Warning' />
            </Warning>
            <Description>
                <H3>
                    {
                        examNotify ? "We will notify Your Examination date Soon" : examStart ? "Your Examination date Announced" : ""
                    }
                </H3>
                <Paragraph>
                    {
                        examNotify ?
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. We will notify Your Examination date Soon "
                        : examStart ? 
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Your Examination date Announced"
                        : ""

                    }
                </Paragraph>
            </Description>
            {
                examStart ? 
                    <Start to="/exam-start" >
                        Start Now
                    </Start>
                : ""
            }
        </Exam>
    )
}
const Exam = styled.div`
    background : #fdf3eb;
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding: 3% 2%;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 4%;
`
const Description = styled.div`
    width: 80%;
`
const Warning = styled.div`
    width: 2%;
    `
const H3 = styled.h3`
    color: #e4794b;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 1%;
`
const Paragraph = styled.p`
    color: #aba9a9;
    font-size: 18px;
    font-weight: 700;
`
const Start = styled(Link)`
    display: block;
    text-align: center;
    width: 10%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    border: 2px solid #e4794b;
    background: #e4794b;
    &:hover{
        background: transparent;
        color: #e4794b;
        border: 2px solid #e4794b;
    }
`