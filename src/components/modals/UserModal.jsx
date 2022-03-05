import React, { useContext } from 'react'
import styled from 'styled-components'

import leftArrowImage from '../../assets/images/header/back.svg'
import campusImage from '../../assets/images/header/school.svg'
import classImage from '../../assets/images/header/book.svg'
import divImage from '../../assets/images/header/cap.svg'
import logOutImage from '../../assets/images/header/logout.svg'

import { JoinContext } from '../../App'

export default function UserModal() {
    const useBarClick = useContext(JoinContext).useBarClick;
    const {updateUseBarClick} = useContext(JoinContext);

    return (
        <UserBar className={useBarClick ? 'active' : ''}  >
            <Profile>
                <LeftArrow onClick={()=> updateUseBarClick() } >
                    <img src={leftArrowImage} alt='Arrow' />
                </LeftArrow>
                <ProfileDes>
                    Profile
                </ProfileDes>
                <Details>
                    <Letter>
                        S
                    </Letter>
                    <FullName>
                        Swalih Moosa
                    </FullName>
                    <Mobile>
                        +91 8129133008
                    </Mobile>
                </Details>
            </Profile>
            <Study>
                <School>
                    <img src={campusImage} alt='Campus' />
                </School>
                <SchoolDetail>
                    <Head>
                        Campus
                    </Head>
                    <Subhead>
                        Lekshmi Vilasom High School
                    </Subhead>
                </SchoolDetail>
            </Study>
            <Study>
                <School>
                    <img src={classImage} alt='Campus' />
                </School>
                <SchoolDetail>
                    <Head>
                        Class
                    </Head>
                    <Subhead>
                        10
                    </Subhead>
                </SchoolDetail>
            </Study>
            <Study>
                <School>
                    <img src={divImage} alt='Campus' />
                </School>
                <SchoolDetail>
                    <Head>
                        Division
                    </Head>
                    <Subhead>
                        A
                    </Subhead>
                </SchoolDetail>
            </Study>
            <LogOut>
                <Log>
                    <img src={logOutImage} alt='LogOut' />
                </Log>
                <Out>
                    Log Out
                </Out>
            </LogOut>
        </UserBar>
    )
}
const UserBar = styled.div`
    padding: 22px;
    background: #fff;
    box-shadow: rgb(0 0 0 / 14%) -2px 11px 15px;
    border-radius: 8px;
    width: 375px;
    height: 100vh;
    position: absolute;
    top: 0px;
    right: -100%;
    transition: all 0.6s ease 0s;
    &.active{
        right: 0px;
        top: 0px;
    }
`
const Profile = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 17px 13px 22%;
    border-radius: 10px;
    width: 100%;
    background-color: #f7ffe9;
    margin-bottom: 30%;
`
const LeftArrow = styled.div`
    width: 12%;
    cursor: pointer;
`
const ProfileDes = styled.p`
    width: 80%;
    text-align: center;
    font-size: 18px;
    color: #9b9999;
    font-weight: 700;
`
const Details = styled.div`
    position: absolute;
    bottom: -75%;
    right: 25%;
`
const Letter = styled.p`
    margin: 0 auto 10%;
    text-align: center;
    background: #5aa970;
    color: #fff;
    font-size: 25px;
    font-weight: 900;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FullName = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 3%;
    text-align: center;

`
const Mobile = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 3%;
    text-align: center;
    color: #5aa970;
`
const Study = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 17px 13px;
    border-radius: 10px;
    width: 100%;
    background-color: #f7ffe9;
    margin-bottom: 7%;
`
const School = styled.div`
    width: 10%;
`
const SchoolDetail = styled.div`
    width: 80%;
`
const Head = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #808080;
    margin-bottom: 2%;

`
const Subhead = styled.p`
    font-size: 17px;
    font-weight: 700;
`
const LogOut = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    padding: 0 15px;
    margin-top: 100%;
    &:hover{
        cursor: pointer;
    }
`
const Log = styled.div`
    width: 25%;
`
const Out = styled.p`
    color: #e72b2b;
    font-size: 16px;
    font-weight: 700;
`