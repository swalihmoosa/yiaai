import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterSection>
            <Wrapper>
                <Logo>
                    <img src='' alt='Yiaai' />
                </Logo>
                <Social>
                    <Media>
                        <img src='' alt='Social-Media' />
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
const FooterSection = styled.section``
const Wrapper = styled.section``
const Logo = styled.div``
const Social = styled.ul``
const Media = styled.li``
const Contact = styled.div``
const Mob = styled.p``
const Mail = styled.p``
const FooterDiv = styled.div``
const Copy = styled.p``
const Terms = styled.p``
const Privacy = styled.p``