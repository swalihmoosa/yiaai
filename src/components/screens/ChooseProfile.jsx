import React from 'react'
import styled from 'styled-components'

import bg from '../assets/images/details/top.svg'


export default function ChooseProfile() {
    return (
        <FillDetailsSection>
            <Wrapper>
                <Choose>
                    <B>Hi,Swalih Moosa</B>Choose your profile from the number
                </Choose>
                <Details>
                    <Profile>
                        <H3>
                            Choose Your Profile
                        </H3>
                        <Number>
                            +91 8129133008
                        </Number>
                    </Profile>
                    <Hr />
                    <Bottom>
                        <Buttons>
                            <Back>Back</Back>
                            <Submit>Submit</Submit>
                        </Buttons>
                    </Bottom>
                </Details>
            </Wrapper>
        </FillDetailsSection>
    )
}
const FillDetailsSection = styled.section`
    padding: 10% 0 0;
`
const Wrapper = styled.section`
    margin: 0 auto;
    width: 90%;
    background-color: #e4fdf7;
    padding: 4%;
    border-radius: 50px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: left top;
    position: relative;
`
const Choose = styled.h3`
`
const B = styled.b`
`
const Details = styled.div`
    width: 50%;
    margin: 0 auto;
    border: 1px dotted #bfbfbf;
    border-radius: 25px;
`
const Profile = styled.div`
    padding: 5%;
`
const Number = styled.p`
`
const H3 = styled.h3`
    font-size: 20px;
    font-weight: 700;
`
const Hr = styled.hr`
    border-top: 1px dotted #bfbfbf;
    margin-bottom: 30px;
    width: 100%;
`
const Bottom = styled.div`
    padding: 5%;
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 7%;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 111%;
        height: 50%;
        border-left: 2px dotted #5aa870;
        bottom: -94px;
        left: -39px;
        background-image: linear-gradient(to right,#68ba50,#469aad);
        border-radius: 0 0 25px 25px;
    }
`
const Back = styled.button`
    width: 25%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #4f585e;
    border: 2px solid #dfdfdf;
    padding: 20px 30px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: 4%;
    &:hover{
        border: 2px solid #22c1c3;
        cursor: pointer;
    }
`
const Submit = styled.button`
    width: 25%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    &:hover{
        background-image: linear-gradient(to right,#469aad,#68ba50);
        cursor: pointer;
    }
`