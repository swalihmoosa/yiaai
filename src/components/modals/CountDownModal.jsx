import React, { useEffect, useState } from 'react'

import styled from 'styled-components'


export default function CountDownModal() {
    const [ hour, setHour ] = useState(3);
    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(1);

    return (
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
                { 
                    <Running> {hour} : {minutes} : {seconds}</Running> 
                }
            </Time>
        </Description>
    )
}
const Description = styled.div`
    width: 90%;
    background : #fdf3eb;
    display: flex;
    margin: 0 auto;
    padding: 1.5% 2%;
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