import React from 'react'
import styled from 'styled-components'

import thumbnailImage from '../assets/images/videoPage/video.png'
import steypImage from '../assets/images/videoPage/small.svg'
import tefunImage from '../assets/images/videoPage/1080.svg'
import arrowImage from '../assets/images/videoPage/down-arrow.svg'
import playImage from '../assets/images/videoPage/video.png'


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
    padding-top: 10%;
`
const Wrapper = styled.section``
const Video = styled.div``
const Thumbnail = styled.div``
const P = styled.p``
const H4 = styled.h4``
const Steyp = styled.div``
const Tefun = styled.div``
const Ul = styled.ul``
const Li = styled.li``
const Head = styled.div``
const Intro = styled.p``
const Arrow = styled.div``
const SubHead = styled.div``
const Play = styled.div``
const Question = styled.p``
const Duration = styled.p``