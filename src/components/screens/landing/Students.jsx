import React from 'react'
import styled from 'styled-components'

import rightImage from '../../assets/images/landing/join-img.png'


export default function Students() {
    return (
        <StudentsSection>
            <Wrapper>
                <H4>
                    <B>
                        How
                    </B><br />
                    Students Can Join
                </H4>
                <Join>
                    <Left>
                        <Li>
                            <P>
                            <Brand>Tefun</Brand> പ്രോഗ്രാം സ്കൂളിൽ ഉദ്ഘാടനം ചെയ്തതിനുശേഷം വിദ്യാർത്ഥികൾക്ക് <Brand>Tefun</Brand>-ൽ ജോയിൻ ചെയ്യാവുന്നതാണ്.
                            </P>
                            <Round>
                                01
                            </Round>
                        </Li>
                    </Left>
                    <Right>
                        <img src={rightImage} alt='Student' />
                    </Right>
                </Join>
            </Wrapper>
        </StudentsSection>
    )
}
const StudentsSection = styled.section``
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
`
const H4 = styled.h4`
    font-size: 35px;
    font-weight: 900;
    margin-bottom: 2%;
`
const B = styled.b`
    font-size: 35px;
    font-weight: 900;
    color: #5aa870;
`
const Join = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`
const Left = styled.ul`
    width: 47%;
`
const Li = styled.li`
    background: #ebf2fa;
    padding: 5%;
    border-radius: 25px;
    &:first-child{
        background: #fef6ec;
    }
`
const P = styled.p``
const Brand = styled.b``
const Round = styled.p``
const Right = styled.div`
    width: 47%;
`