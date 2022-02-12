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
                        <Li>
                            <P>
                            Talrop-ന്റെ Web, Android, iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ (yia.ai) ഓൺലൈനായി Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാം.
                            </P>
                            <Round>
                                02
                            </Round>
                        </Li>
                        <Li>
                            <P>
                            വിദ്യാർത്ഥികളുടെ മൊബൈൽ നമ്പർ നൽകിയതിനുശേഷം പ്രൊഫൈൽ തിരഞ്ഞെടുത്ത് Tefun പ്രോഗ്രാം സ്റ്റാർട്ട് ചെയ്യാം.
                            </P>
                            <Round>
                                03
                            </Round>
                        </Li>
                        <Li>
                            <P>
                            പ്രൊഫൈൽ ലഭ്യമല്ലെങ്കിൽ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ കോഡും ക്ലാസും ഡിവിഷനും നൽകി Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കും.
                            </P>
                            <Round>
                                04
                            </Round>
                        </Li>
                        <Li>
                            <P>
                            വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.
                            </P>
                            <Round>
                                05
                            </Round>
                        </Li>
                        <Li>
                            <P>
                            Tefun പ്രോഗ്രാമിന്റെ അവസാനഘട്ടമായി സ്കൂൾ നിശ്ചയിക്കുന്ന ദിവസങ്ങളിൽ ഓൺലൈൻ എക്സാം ഉണ്ടായിരിക്കുന്നതാണ്.
                            </P>
                            <Round>
                                06
                            </Round>
                        </Li>
                        <Li>
                            <P>
                            Tefun പ്രോഗ്രാം വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖേന ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു.
                            </P>
                            <Round>
                                07
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
    position: relative;
    &::before{
        content: "";
        position: absolute;
        z-index: -1;
        width: 1px;
        height: 90%;
        border-left: 2px dotted #5aa870;
        left: -2%;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }
`
const Li = styled.li`
    background: #ebf2fa;
    padding: 5%;
    border-radius: 25px;
    width: 100%;
    position: relative;
    margin-bottom: 4%;
    &:first-child, :nth-child(5n){
        background: #fef6ec;
    }
    &:last-child{
        margin-bottom: 0;
    }
`
const P = styled.p`
    font-size: 18px;
`
const Brand = styled.b``
const Round = styled.p`
    position: absolute;
    border-radius: 50%;
    border: 3px solid #519b6f;
    width: 50px;
    height: 50px;
    text-align: center;
    align-items: center;
    padding: 1%;
    background: #fff;
    font-weight: 900;
`
const Right = styled.div`
    width: 47%;
`