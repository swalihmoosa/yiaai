import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import arrowImage from '../../assets/images/menu/arrow.svg'
import closeImage from '../../assets/images/menu/close.svg'
import decorator from '../../assets/images/menu/decorator.svg'
import callImage from '../../assets/images/menu/phone.svg'
import indiaImage from '../../assets/images/menu/india-flag.jpeg'
import afganisthan from '../../assets/images/menu/Afghanistan.png'
import angola from '../../assets/images/menu/Angola.png'
import aruba from '../../assets/images/menu/Aruba.png'
import argentina from '../../assets/images/menu/Argentina.png'
import armenia from '../../assets/images/menu/Armenia.png'
import bahrain from '../../assets/images/menu/BAHRAIN.jpeg'

import { JoinContext } from '../../App'

export default function LoginModal() {
    const hamBurgerClick = useContext(JoinContext).hamBurgerClick;
    const {updatehamBurgerClick} = useContext(JoinContext)
    const[countriesShow,setCountriesShow] = useState(false)
    const[selectedCountryId,setselectedCountryId] = useState(1)
    const[countries] = useState([
        {
            id : 1,
            name : "India",
            flag : indiaImage,
            code : "+91",
        },
        {
            id : 2,
            name : "Afganisthan",
            flag : afganisthan,
            code : "+93",
        },
        {
            id : 3,
            name : "Angola",
            flag : angola,
            code : "+244",
        },
        {
            id : 4,
            name : "Argentina",
            flag : argentina,
            code : "+54",
        },
        {
            id : 5,
            name : "Armenia",
            flag : armenia,
            code : "+374",
        },
        {
            id : 6,
            name : "Aruba",
            flag : aruba,
            code : "+297",
        },
        {
            id : 7,
            name : "Bahrain",
            flag : bahrain,
            code : "+973",
        },
    ])

    const selectedCountry = countries[selectedCountryId - 1]


    return (
            <Overlay className={ hamBurgerClick ? 'active' : ''} >
                <MenuBar className={ hamBurgerClick ? 'active' : ''} >
                    <White>
                    <H4>
                    Login to your account
                    </H4>
                    <P>
                    Enter your registered phone number
                    </P>
                    <Mob>
                        <Flag onClick={()=>setCountriesShow(!countriesShow)} >
                            <img src={selectedCountry.flag} alt='Flag' />
                        </Flag>
                        <Arrow onClick={()=>setCountriesShow(!countriesShow)} >
                            <img src={arrowImage} alt='Arrow' />
                        </Arrow>
                        {
                            countriesShow ? 
                            <CountriesUl>
                                {
                                    countries.map(country=>(
                                        <CountriesLi key={country.id}
                                            onClick={()=> {
                                                setselectedCountryId(country.id)
                                                setCountriesShow(!countriesShow)
                                            }}
                                        >
                                            <FlagList>
                                                <img src={country.flag} alt='Flag' />
                                            </FlagList>
                                            <ListName>
                                                {country.code} , {country.name}
                                            </ListName>
                                        </CountriesLi>
                                    ))
                                }
                            </CountriesUl>
                            : ""
                        }
                        <Form>
                            <Call>
                                <img src={callImage} alt='Call' />
                            </Call>
                            <Code>
                                {selectedCountry.code}
                            </Code>
                            <Input type="number" placeholder="Enter Mobile Number" />
                        </Form>
                    </Mob>
                    <Next>
                        Next
                    </Next>
                    <New>
                            New to Yiaai?
                        <B> Create an account
                        </B>
                    </New>
                    <Hr />
                    <Terms>
                    Terms of service
                    </Terms>
                </White>
                <Close onClick={()=> updatehamBurgerClick() } >
                    <img src={closeImage} alt="Close" />
                </Close>
                </MenuBar>
            </Overlay>
    )
}
const HeaderNav = styled.header`
    background-color: rgba(255, 255, 255, 0.3);
    padding: 2% 0;
    width: 100%;
    position: fixed;
    z-index: 10;
    box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
`
const Wrapper = styled.section`
    width:90%;
    margin : 0 auto;
    display: flex;
    align-items: center;
`
const LogoContainer = styled.h1`
    width: 7%;
    margin-right: 76%;
`
const JoinButton = styled.button`
    cursor: pointer;
    width: 10%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: rgb(255, 255, 255);
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right, #68ba50,#469aad);
    margin-right: 3%;
    &:hover{
        transition: all 0.5s ease 0s;
        background-image: linear-gradient(to right, #469aad,#68ba50);

    }
`
const HamBurger = styled.div`
    width: 2%;
    cursor: pointer;
`
const MenuBar = styled.div`
    position: fixed;
    right: -100%;
    top: 0px;
    width: 600px;
    opacity: 1;
    height: 100vh;
    background-color: #fff;
    transition: all 0.4s ease 0s;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.active{
        right: 0px;
        top: 0px;
    }
`
const White = styled.div`
    background: #fff;
    background: url(${decorator});
    background-size: 100%;
    padding: 50% 15% 0;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: relative;
`
const H4 = styled.h4`
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 3%;
`
const P = styled.p`
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 15%;
`
const Mob = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 11%;
`
const Flag = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
`
const Arrow = styled.div`
    width: 2%;
    transform: rotate(90deg);
    cursor: pointer;
`
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    border: 2px solid #5aa970;
    border-radius: 13px;
    padding: 10px;
`
const Call = styled.div`
    width: 5%;
`
const Code = styled.p`
    width: 5%;
    font-size: 14px;
    font-weight: 700 ;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
    width: 80%;
`
const Next = styled.button`
    width: 100%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    margin-bottom: 6%;
    &:hover{
        background-image: linear-gradient(to right,#469aad,#68ba50);
        cursor: pointer;
    }
`
const New = styled.p`
    margin-bottom: 55%;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
`
const B = styled.b`
    font-size: 15px;
    font-weight: 600;
    color: #5aa970;
    &:hover{
        cursor: pointer;
    }
`
const Hr = styled.hr`
    width: 100%;
    border-top: 1px dotted #000;
    margin-bottom: 8%;
`
const Terms = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    &:hover{
        cursor: pointer;
    }
`
const Close = styled.div`
    position: absolute;
    width: 7%;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
    padding: 2%;
    left: -9%;
    top: 2%;
    &:hover{
        cursor: pointer;
    }
`
const User = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 2%;
    width: 9%;
    align-items: center;
    cursor: pointer;
`
const Name = styled.p`
    font-size: 17px;
    font-weight: 700;
    width: 90%;
    color: #bfbfbf;
`
const DownArrow = styled.div`
    transform: rotate(90deg);
    width: 6%;
`
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
const CountriesUl = styled.ul`
    background: #afafaf;
    width: 70%;
    position: absolute;
    height: 40vh;
    padding: 4%;
    border-radius: 10px;
    overflow: scroll;
`
const CountriesLi = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6%;
    background: #fff;
    padding: 3%;
    border-radius: 15px;
    align-items: center;
    cursor: pointer;
`
const FlagList = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
`
const ListName = styled.p`
    font-size: 17px;
    font-weight: 700;
    width: 70%;
    color: rgba(0,0,0,.5);
    text-align : left;
`
const Overlay = styled.div`
    position: fixed;
    right: -100%;
    top: 0px;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    transition: all 0.4s ease 0s;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.active{
        right: 0px;
        top: 0px;
    }
`