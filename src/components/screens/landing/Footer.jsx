import React from 'react'
import styled from 'styled-components'

import logoImage from '../../../assets/images/landing/logo-grey.svg'
import insta from '../../../assets/images/landing/instagram.svg'
import instaColor from '../../../assets/images/landing/instagram-color.svg'
import facebook from '../../../assets/images/landing/facebook.svg'
import facebookColor from '../../../assets/images/landing/facebook-color.svg'
import twitter from '../../../assets/images/landing/twitter.svg'
import twitterColor from '../../../assets/images/landing/twitter-color.svg'
import linkedIn from '../../../assets/images/landing/linkedin.svg'
import linkedInColor from '../../../assets/images/landing/linkedin-color.svg'
import youTube from '../../../assets/images/landing/youtube.svg'
import youTubeColor from '../../../assets/images/landing/youtube-color.svg'


export default function Footer() {
    return (
        <FooterSection>
            <Wrapper>
                <Logo>
                    <img src={logoImage} alt='Yiaai' className='logoImage' />
                </Logo>
                <Social>
                    <Media href='https://www.instagram.com/talropworld/' target="blank" >
                        <SocialMedia className='socialMedia' src={insta} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={instaColor} alt='Social-Media' />
                    </Media>
                    <Media href='https://www.facebook.com/talropworld/' target="blank" >
                        <SocialMedia className='socialMedia' src={facebook} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={facebookColor} alt='Social-Media' />
                    </Media>
                    <Media href='https://twitter.com/talropworld/' target="blank" >
                        <SocialMedia className='socialMedia' src={twitter} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={twitterColor} alt='Social-Media' />
                    </Media>
                    <Media href='https://www.linkedin.com/company/talrop/' target="blank" >
                        <SocialMedia className='socialMedia' src={linkedIn} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={linkedInColor} alt='Social-Media' />
                    </Media>
                    <Media href='https://www.youtube.com/c/talrop' target="blank" >
                        <SocialMedia className='socialMedia' src={youTube} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={youTubeColor} alt='Social-Media' />
                    </Media>
                </Social>
                <Contact>
                    <Mob href="https://wa.me/+918589998744" target="blank" >
                    +91 858 999 8744
                    </Mob>
                    <Mail href='mailto:yiaai@talrop.com' target="blank" >
                    yiaai@talrop.com
                    </Mail>
                </Contact>
                <FooterDiv>
                    <Copy href="https://talrop.com/" target="_blank">
                    &copy; 2022, Talrop Private Limited
                    </Copy>
                    <Terms href="https://yia.ai/tos/" target="blank" >
                        Terms of service
                    </Terms>
                    <Privacy href="https://yia.ai/privacy-policy/" target="blank" >
                    Privacy Policy
                    </Privacy>
                </FooterDiv>
            </Wrapper>
        </FooterSection>
    )
}
const FooterSection = styled.section`
    background-color: #1e1e1e;
    padding: 5%;
`
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
`
const Logo = styled.div`
    width: 9%;
    margin: 0 auto 3%;
    cursor: pointer;
`
const Social = styled.div`
    display: flex;
    justify-content: space-between;
    width: 16%;
    margin: 0 auto 3%;
`
const Media = styled.a`
    width: 18%;
    height: 20px;
    cursor: pointer;
    display: block;
    &:hover .socialMedia{
        display: none;
    }
    &:hover .socialMediaColor{
        display: block;
    }
`
const SocialMedia = styled.img`
    display: block;
`
const SocialMediaColor = styled.img`
    display: none;
`
const Contact = styled.div`
    display: flex;
    justify-content: space-between;
    width: 22%;
    align-items: center;
    margin: 0 auto 3%;
`
const Mob = styled.a`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
    display: block;
    &:hover{
        cursor: pointer;
        color: #5aa870
    }
`
const Mail = styled.a`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
    display: block;
    &:hover{
        cursor: pointer;
        color: #5aa870;
    }
`
const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: 0 auto;
`
const Copy = styled.a`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
    display: block;
    &:hover{
        cursor: pointer;
        color: #5aa870;
    }
`
const Terms = styled.a`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
    display: block;
    &:hover{
        cursor: pointer;
        color: #5aa870;
    }
`
const Privacy = styled.a`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
    display: block;
    &:hover{
        cursor: pointer;
        color: #5aa870;
    }
`