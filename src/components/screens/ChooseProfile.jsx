import React, { useState } from 'react'
import styled from 'styled-components'

import bg from '../assets/images/profile/top.svg'
import tickImage from '../assets/images/profile/check-solid.svg'


export default function ChooseProfile() {
    const[selectedUser,setSelectedUser] = useState("")
    const[usersLists] = useState([
        {
            id : 1,
            name : "Swalih Moosa",
            college : "LVHS Pothencode"
        },
        {
            id : 2,
            name : "Adarsh Abu",
            college : "Jamia Edavanna"
        },
        {
            id : 3,
            name : "Hamsa Habbeb",
            college : "Jamia Edavanna"
        },
    ])

    const renderUsers = () => (
        usersLists.map((usersList) => (
            <Account onClick={ ()=> { setSelectedUser(usersList.id) } } >
                <Single>
                    {usersList.name.charAt(0)}
                </Single>
                <Middle>
                    <FullName>
                        {usersList.name}
                    </FullName>
                    <School>
                        {usersList.college}
                    </School>
                </Middle>
                <Tick>
                    {
                    usersList.id === selectedUser &&  <img src={tickImage} alt='Tick' />
                    }
                </Tick>
            </Account>
        ))
    )

    return (
        <FillDetailsSection>
            <Wrapper>
                <Choose>
                    <B>Hi,Swalih Moosa </B>Choose your profile from the number
                </Choose>
                <Details>
                    <Profile>
                        <H3>
                            Choose Your Profile
                        </H3>
                        <Number>
                            ( +91 8129133008 )
                        </Number>
                    </Profile>
                    <Hr />
                    <Bottom>
                        {renderUsers()}
                        {/* <Account>
                            <Single>
                                S
                            </Single>
                            <Middle>
                                <FullName>
                                    Swalih Moosa, (10A)
                                </FullName>
                                <School>
                                    LVHS Pothencode
                                </School>
                            </Middle>
                            <Tick>
                                <img src={tickImage} alt='Tick' />
                            </Tick>
                        </Account>
                        <Account>
                            <Single>
                                S
                            </Single>
                            <Middle>
                                <FullName>
                                    Swalih Moosa, (10A)
                                </FullName>
                                <School>
                                    LVHS Pothencode
                                </School>
                            </Middle>
                            <Tick>
                                <img src={tickImage} alt='Tick' />
                            </Tick>
                        </Account>
                        <Account>
                            <Single>
                                S
                            </Single>
                            <Middle>
                                <FullName>
                                    Swalih Moosa, (10A)
                                </FullName>
                                <School>
                                    LVHS Pothencode
                                </School>
                            </Middle>
                            <Tick>
                                <img src={tickImage} alt='Tick' />
                            </Tick>
                        </Account> */}
                        <Buttons>
                            <Back>Not Me</Back>
                            <Submit>Enroll</Submit>
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
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    width: 35%;
    margin: 0 auto 3%;
`
const B = styled.b`
    font-size: 32px;
    font-weight: 700;
    color: #61b262;
`
const Details = styled.div`
    width: 50%;
    margin: 0 auto;
    border: 1px dotted #bfbfbf;
    border-radius: 25px;
`
const Profile = styled.div`
    padding: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Number = styled.p`
    font-size: 17px;
    font-weight: 700;
    width: 50%;
    color: #61b262;
    text-align: right;
`
const H3 = styled.h3`
    font-size: 20px;
    font-weight: 700;
    width: 50%;
`
const Hr = styled.hr`
    border-top: 1px dotted #bfbfbf;
    margin-bottom: 30px;
    width: 100%;
`
const Bottom = styled.div`
    padding: 5% 5% 12%;
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
    color: #df7d7c;
    border: 2px solid #df7d7c;
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
const Account = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5% 0;
    border-bottom: 1px solid #e6e6e6;
    &:hover{
        cursor: pointer;
    }
`
const Single = styled.p`
    text-align: center;
    background: #5aa970;
    color: #fff;
    font-size: 25px;
    font-weight: 900;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Middle = styled.div`
    width: 75%;
    text-align: left;
`
const FullName = styled.h5`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 1%;
`
const School = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #5aa970;
`
const Tick = styled.div`
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 5px;
    background-image: linear-gradient(to bottom,#68ba50,#469aad);
    & img{
        filter: invert(1);
    }
`