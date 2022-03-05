import React from 'react'
import styled from 'styled-components'

import cirtificateImage from '../../assets/images/ExamComplete/tefun-certificate.svg'
import tefunImage from '../../assets/images/ExamComplete/Tefun-logo.svg'
import bgRibbonImage from '../../assets/images/ExamComplete/bg-ribbon.svg'
import bgDotImage from '../../assets/images/ExamComplete/bg-2.svg'
import { Link } from 'react-router-dom'

export default function ExamComplete() {
    return (
        <ExamCompleteSection>
            <Wrapper>
                <Tefun>
                    <img src={tefunImage} alt='Tefun' />
                </Tefun>
                <Cirtificate>
                    <img src={cirtificateImage} alt='Congrats' />
                </Cirtificate>
                <Congrats>
                    Congratulations
                </Congrats>
                <Description>
                    You have completed your examinations.We will provide your cirtificate soon
                </Description>
                <Button to="/video-page/" >
                    Go to Dashboard
                </Button>
            </Wrapper>
        </ExamCompleteSection>
    )
}
const ExamCompleteSection = styled.section`
    padding: 10% 0 1%;
`
const Wrapper = styled.section`
    width: 95%;
    margin: 0 auto;
    background-color: #e7f6ef;
    background-image: url(${bgRibbonImage}), url(${bgDotImage});
    padding: 7% 0;
    border-radius: 15px;
    border-bottom: 2px solid #c8d0df;
    background-repeat: no-repeat,no-repeat;
    background-position: top left,top right;
    background-size:100%;
`
const Tefun = styled.div`
    width: 10%;
    margin: 0 auto 2%;
`
const Cirtificate = styled.div`
    width: 35%;
    margin: 0 auto 3%;
`
const Congrats = styled.h4`
    color: #509971;
    font-size: 39px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 2%;
`
const Description = styled.p`
    text-align: center;
    width: 40%;
    margin: 0 auto 3%;
    font-size: 25px;
    color: #839392;
`
const Button = styled(Link)`
    width: 15%;
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    &:hover{
        cursor: pointer;
        background-image: linear-gradient(to right,#469aad,#68ba50);
    }
`