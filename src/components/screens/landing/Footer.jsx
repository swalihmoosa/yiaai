import React from 'react'
import styled from 'styled-components'

import logoImage from '../../assets/images/landing/logo-grey.svg'
import insta from '../../assets/images/landing/instagram.svg'
import instaColor from '../../assets/images/landing/instagram-color.svg'
import facebook from '../../assets/images/landing/facebook.svg'
import facebookColor from '../../assets/images/landing/facebook-color.svg'
import twitter from '../../assets/images/landing/twitter.svg'
import twitterColor from '../../assets/images/landing/twitter-color.svg'
import linkedIn from '../../assets/images/landing/linkedin.svg'
import linkedInColor from '../../assets/images/landing/linkedin-color.svg'
import youTube from '../../assets/images/landing/youtube.svg'
import youTubeColor from '../../assets/images/landing/youtube-color.svg'


export default function Footer() {
    return (
        <FooterSection>
            <Wrapper>
                <Logo>
                    <img src={logoImage} alt='Yiaai' className='logoImage' />
                </Logo>
                <Social>
                    <Media>
                        <SocialMedia className='socialMedia' src={insta} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={instaColor} alt='Social-Media' />
                    </Media>
                    <Media>
                        <SocialMedia className='socialMedia' src={facebook} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={facebookColor} alt='Social-Media' />
                    </Media>
                    <Media>
                        <SocialMedia className='socialMedia' src={twitter} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={twitterColor} alt='Social-Media' />
                    </Media>
                    <Media>
                        <SocialMedia className='socialMedia' src={linkedIn} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={linkedInColor} alt='Social-Media' />
                    </Media>
                    <Media>
                        <SocialMedia className='socialMedia' src={youTube} alt='Social-Media' />
                        <SocialMediaColor className='socialMediaColor' src={youTubeColor} alt='Social-Media' />
                    </Media>
                </Social>
                <Contact>
                    <Mob>
                    +91 858 999 8744
                    </Mob>
                    <Mail>
                    yiaai@talrop.com
                    </Mail>
                </Contact>
                <FooterDiv>
                    <Copy>
                    &copy; 2022, Talrop Private Limited
                    </Copy>
                    <Terms>
                        Terms of service
                    </Terms>
                    <Privacy>
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
const Social = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 16%;
    margin: 0 auto 3%;
`
const Media = styled.li`
    width: 18%;
    height: 20px;
    cursor: pointer;
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
const Mob = styled.p`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        color: #5aa870
    }
`
const Mail = styled.p`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
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
const Copy = styled.p`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        color: #5aa870;
    }
`
const Terms = styled.p`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        color: #5aa870;
    }
`
const Privacy = styled.p`
    font-size: 16px;
    color: #949494;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        color: #5aa870;
    }
`