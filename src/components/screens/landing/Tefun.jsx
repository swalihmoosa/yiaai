import React from 'react'
import styled from 'styled-components'
import playImage from '../../assets/images/landing/play-solid.svg'
import person from '../../assets/images/landing/person.jpg'


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
                        <Details>
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
                        </Details>
                    </Li>
                    <Li>
                        <Details>
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
                        </Details>
                    </Li>                    <Li>
                        <Details>
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
                        </Details>
                    </Li>                    <Li>
                        <Details>
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
                        </Details>
                    </Li>                    <Li>
                        <Details>
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
                        </Details>
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
const Ul = styled.ul`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const Li = styled.li`
    background: url(${person});
    width: 23%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 20px;
    margin-bottom: 3%;
    cursor: pointer;
    &:hover .story{
        opacity: 1;
    }
`
const Details = styled.div`
    position: absolute;
    bottom: 3%;
    padding: 0 5%;
    width: 100%;
`
const Name = styled.h3`
    font-size: 27px;
    color: #fff;
    font-weight: 900;
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
`
const School = styled.h4`
    font-size: 20px;
    color: #dbd8d8;
    font-weight: 900;
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
`
const Sup = styled.b`
    vertical-align: super;
    font-size: small;
`
const Story = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    padding: 13px 19%;
    width: 100%;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    opacity: 0;
`
const Play = styled.div`
    width: 10%;
`
const Watch = styled.p``