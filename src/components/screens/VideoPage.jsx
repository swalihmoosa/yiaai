import React from 'react'
import styled from 'styled-components'

export default function VideoPage() {
    return (
        <VideoPageSection>
            <Wrapper>
                <Video>
                    <Thumbnail>
                        <img src='' alt='Thumbnail' />
                    </Thumbnail>
                    <P>

                    </P>
                    <H4>

                    </H4>
                    <Steyp>
                        <img src='' alt='Steyp' />
                    </Steyp>
                    <Tefun>
                        <img src='' alt='Tefun' />
                    </Tefun>
                </Video>
                <Ul>
                    <Li>
                        <Head>
                            <Intro>

                            </Intro>
                            <Arrow>
                                <img src='' alt='Arrow' />
                            </Arrow>
                        </Head>
                        <SubHead>
                            <Play>
                                <img src='' alt='Play' />
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