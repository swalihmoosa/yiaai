import React from 'react'
import styled from 'styled-components'

import thumbnailImage from '../assets/images/videoPage/video.png'
import steypImage from '../assets/images/videoPage/small.svg'
import tefunImage from '../assets/images/videoPage/1080.svg'
import arrowImage from '../assets/images/videoPage/down-arrow.svg'
import playImage from '../assets/images/videoPage/play-circle-white.svg'


export default function VideoPage() {
    return (
        <VideoPageSection>
            <Wrapper>
                <Video>
                    <Thumbnail>
                        <img src={thumbnailImage} alt='Thumbnail' />
                    </Thumbnail>
                    <P>
                        Technology Fundamentals
                    </P>
                    <H4>
                        What is technology?
                    </H4>
                    <Steyp>
                        <img src={steypImage} alt='Steyp' />
                    </Steyp>
                    <Tefun>
                        <img src={tefunImage} alt='Tefun' />
                    </Tefun>
                </Video>
                <Ul>
                    <Li>
                        <Head>
                            <Intro>

                            </Intro>
                            <Arrow>
                                <img src={arrowImage} alt='Arrow' />
                            </Arrow>
                        </Head>
                        <SubHead>
                            <Play>
                                <img src={playImage} alt='Play' />
                            </Play>
                            <Question>

                            </Question>
                            <Duration>
                                
                            </Duration>
                        </SubHead>
                    </Li>
                </Ul>
            </Wrapper>
        </VideoPageSection>
    )
}
const VideoPageSection = styled.section`
    padding: 10% 0 2% 0;
`
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
const Video = styled.div`
    width: 70%;
    background: #f5f5f5;
    padding: 2%;
    border-radius: 20px;
`
const Thumbnail = styled.div`
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 3%;
`
const P = styled.p`
    font-size: 15px;
    color: #15232e7d;
    font-weight: 900;
    margin-bottom: 1%;
`
const H4 = styled.h4`
    font-size: 25px;
    color: #000;
    font-weight: 900;
    margin-bottom: 2%;
`
const Steyp = styled.div`
    width: 100%;
    margin-bottom: 3%;
`
const Tefun = styled.div`
    width: 100%;
    margin-bottom: 3%;
`
const Ul = styled.ul``
const Li = styled.li``
const Head = styled.div``
const Intro = styled.p``
const Arrow = styled.div``
const SubHead = styled.div``
const Play = styled.div``
const Question = styled.p``
const Duration = styled.p``