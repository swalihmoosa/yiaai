import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import mobile from '../../../assets/images/landing/phone-g-call.svg'
import scissor from '../../../assets/images/landing/scissors.svg'
import certificate from '../../../assets/images/landing/certificate-r.svg'
import device from '../../../assets/images/landing/devices.svg'
import certidicateBlue from '../../../assets/images/landing/certificate.svg'


export default function School() {
    return (
        <SchoolSection>
            <Wrapper>
                <H4>
                    <B>
                        How
                    </B><br />
                    Schools Can Join
                </H4>
                <Ul>
                    <Li>
                        <ColorDiv className='colour'>
                        </ColorDiv>
                        <P>
                        Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് <Mob href="https://talrop.com/" target="blank" >Talrop</Mob> -ന്റെ ടീമുമായി 
                         <Mob href="https://wa.me/+918589998744" target="blank" > 858 999 8744</Mob>  എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
                        </P>
                        <Round className='round'>
                            <img src={mobile} alt='Mobile' />
                        </Round>
                        <Num>
                            01
                        </Num>
                    </Li>
                    <Li>
                        <ColorDiv className='colour'>
                        </ColorDiv>
                        <P>
                        സ്കൂളിന്റെ ലോഗോയും ആവശ്യ വിവരങ്ങളും നൽകുക.
                        </P>
                        <Round className='round'>
                            <img src={scissor} alt='Mobile' />
                        </Round>
                        <Num>
                            02
                        </Num>
                    </Li>
                    <Li>
                        <ColorDiv className='colour'>
                        </ColorDiv>
                        <P>
                        സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video ഡിജിറ്റലായി <Mob href="https://talrop.com/" target="blank" >Talrop</Mob> നൽകുന്നതാണ്. 
                        </P>
                        <Round className='round'>
                            <img src={certificate} alt='Mobile' />
                        </Round>
                        <Num>
                            03
                        </Num>
                    </Li>
                    <Li>
                        <ColorDiv className='colour'>
                        </ColorDiv>
                        <P>
                        Mobile, Tab, Laptop, Desktop Computer എന്നിവയിൽ ഏതെങ്കിലും ഡിവൈസുകൾ ഉപയോഗിച്ച് <Mob href="https://talrop.com/" target="blank" > Talrop </Mob> 
                        ലഭ്യമാക്കുന്ന Web, Android, iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ കുട്ടികൾക്ക് പഠിക്കുവാൻ സാധിക്കും.                       
                        </P>
                        <Round className='round'>
                            <img src={device} alt='Mobile' />
                        </Round>
                        <Num>
                            04
                        </Num>
                    </Li>
                    <Li>
                        <ColorDiv className='colour'>
                        </ColorDiv>
                        <P>
                        വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു.
                        </P>
                        <Round className='round'>
                            <img src={certidicateBlue} alt='Mobile' />
                        </Round>
                        <Num>
                            05
                        </Num>
                    </Li>
                </Ul>
                <Register to="fill-details" >
                    Register Now
                </Register>
            </Wrapper>
        </SchoolSection>
    )
}
const SchoolSection = styled.section`
    padding: 7% 0;
`
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
`
const H4 = styled.h4`
    text-align: center;
    margin-bottom: 7%;
    font-size: 35px;
    font-weight: 700;
`
const B = styled.b`
    color: #5aa870;
    font-size: 35px;
    font-weight: 700;
`
const Ul = styled.ul`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 5%;
`
const Li = styled.li`
    width: 32%;
    position: relative;
    margin-bottom: 7%;
    &:nth-child(4n){
        margin-left: auto;
        margin-right: 4%;
        margin-bottom: 0%;
    }
    &:nth-child(5n){
        margin-right: auto;
        margin-left: 0;
        margin-bottom: 0%;
    }
    &:nth-child(2n) .colour{
        background: #f6b52c;
    }
    &:nth-child(3n) .colour{
        background: #e95531;
    }
    &:nth-child(4n) .colour{
        background: #b377fa;
    }
    &:nth-child(5n) .colour{
        background: #4a97fa;
    }
    &:nth-child(2n) .round{
        border: 3px solid #f6b52c;
    }
    &:nth-child(3n) .round{
        border: 3px solid #e95531;
    }
    &:nth-child(4n) .round{
        border: 3px solid #b377fa;
    }
    &:nth-child(5n) .round{
        border: 3px solid #4a97fa;
    }
`
const ColorDiv = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 auto 10%;
    border-radius: 30px;
    transform: rotate(45deg);
    background: #009a66;
`
const P = styled.p`
    font-size: 20px;
    text-align: center;
`
const Mob = styled.a`
    color: #5aa870;
    font-size: 20px;
    font-weight: 700;
`
const Round = styled.div`
    position: absolute;
    top: 25%;
    right: 27%;
    height: 80px;
    width: 80px;
    background: #fff;
    border: 3px solid #539c67;
    border-radius: 50%;
    padding: 5%;
`
const Num = styled.p`
    position: absolute;
    top: -25%;
    left: 30%;
    color: #eaeaea;
    font-weight: 900;
    font-size: 80px;
`
const Register = styled(Link)`
    cursor: pointer;
    text-align: center;
    width: 17%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    margin: 0 auto;
    &:hover{
        background-image: linear-gradient(to right,#469aad,#68ba50);
    }
`