import React from 'react'
import styled from 'styled-components'
import playImage from '../../assets/images/play-solid.svg'


export default function Tefun() {
    return (
        <TefunSection>
            <Wrapper>
                <H3>
                    <B>
                        Tefun
                    </B><br />
                    എന്ന് പറയുമ്പോൾ 
                </H3>
                <P>
                ടെക്കിസ്  ക്ലബ്ബിലൂടെ ടെക്നോളജിയിൽ മാറ്റം കൈവരിച്ച ഞങ്ങളുടെ <br />കുട്ടി എൻജിനിയേഴ്സിന്  പറയാനുള്ളത് 
                </P>
                <Ul>
                    <Li>
                        <Name>
                            Swathi Menon
                        </Name>
                        <School>
                            8<Sup>Th</Sup>,Jamia Edavanna
                        </School>
                        <Story className='story' >
                            <Play>
                                <img src={playImage} alt='Play' />
                            </Play>
                            <Watch>
                                WATCH STORY
                            </Watch>
                        </Story>
                    </Li>
                </Ul>
            </Wrapper>
        </TefunSection>
    )
}
const TefunSection = styled.section`
    padding: 5% 0;
`
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
`
const H3 = styled.h3`
    font-weight: 900;
    text-align: center;
    font-size: 45px;
    margin-bottom: 1%;
`
const B = styled.b`
    color:#57a470;
    font-weight:900;
`
const P = styled.p`
    font-size: 23px;
    text-align: center;
    margin-bottom: 3%;
`
const Ul = styled.ul``
const Li = styled.li``
const Name = styled.h3``
const School = styled.h4``
const Sup = styled.b`
    vertical-align: super;
    font-size: small;
`
const Story = styled.button``
const Play = styled.div``
const Watch = styled.div``