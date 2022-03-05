import React, { useState } from 'react'
import styled from 'styled-components'
import playImage from '../../../assets/images/landing/play-solid.svg'
import person from '../../../assets/images/landing/person.jpg'


export default function Tefun() {
    const[engineers] = useState([
        {
            id : 1,
            name : "Swalih Moosa",
            class : 8,
            college : "Jamia Edavanna",
            avatar : person
        },
        {
            id : 2,
            name : "Swathy Saran",
            class : 5,
            college : "Jamia Edavanna",
            avatar : person
        },
        {
            id : 3,
            name : "Hamsa Kulath",
            class : 10,
            college : "Jamia Edavanna",
            avatar : person
        }
    ])

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
                    {
                        engineers.map(engineer=>(
                            <Li key={engineer.id}>
                                <img src={engineer.avatar} alt={engineer.name} className="person" />
                                <Details>
                                    <Name>
                                        {engineer.name}
                                    </Name>
                                    <School>
                                        {engineer.class}<Sup>Th</Sup>,{engineer.college}
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
                                <Overlay className='overlay' >
                                </Overlay>
                            </Li>
                        ))
                    }
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
    width: 23%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 20px;
    margin-bottom: 3%;
    cursor: pointer;
    &:hover .story{
        opacity: 1;
        transition: all 0.4s ease 0s;
        transform: scale(1);

    }
    &:hover .overlay{
        background: rgba(0,0,0,0.3);
        backdrop-filter: blur(8px);
        transition: all 0.4s ease 0s;
        border-radius: 20px;
    }
    &:hover .person{
        transform: scale(1.5);
        transition: all 0.4s ease 0s;
    }
`
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    transition: all 0.4s ease 0s;
`
const Details = styled.div`
    position: absolute;
    bottom: 3%;
    padding: 0 5%;
    width: 100%;
    z-index: 2;
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
    align-items: center;
    background: #fff;
    border-radius: 15px;
    padding: 13px 19%;
    width: 100%;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    transform: scale(0);
    opacity: 0;
`
const Play = styled.div`
    width: 10%;
    margin-left: auto;
    margin-right: 15px;
`
const Watch = styled.p`
    margin-right: auto;
`