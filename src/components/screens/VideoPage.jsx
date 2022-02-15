import React, { useState } from 'react'
import styled from 'styled-components'

import thumbnailImage from '../assets/images/videoPage/video.png'
import steypImage from '../assets/images/videoPage/small.svg'
import tefunImage from '../assets/images/videoPage/1080.svg'
import arrowImage from '../assets/images/videoPage/down-arrow.svg'
import playImage from '../assets/images/videoPage/play-black.svg'


export default function VideoPage() {
    const [selectedId,setSelectedId] = useState("")
    const [topicLists]= useState([
        {
            id:1,
            heading : "Introduction to Technology",
            subheads : [
                {
                    id : 1,
                    title : "What is technology?",
                    durattion : "2:34",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    durattion : "2:34",
                },
                {
                    id : 3,
                    title : "Why should we learn technology?",
                    durattion : "2:34",
                },
                {
                    id : 4,
                    title : "In which age who can learn technology?",
                    durattion : "2:34",
                },
            ],
        },
        {
            id:2,
            heading : "Introduction to Technology",
            subheads : [
                {
                    id : 1,
                    title : "What is technology?",
                    durattion : "2:34",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    durattion : "2:34",
                },
            ],
        },
    ])

    const renderTopics = () => {
        return topicLists.map((topicList) => (
            <Li key={topicList.id} onClick = { ()=> { setSelectedId(topicList.id) } } >
                <Head>
                    <Intro>
                        {topicList.heading}
                    </Intro>
                    <Arrow>
                        <img src={arrowImage} alt='Arrow' />
                    </Arrow>
                </Head>

                {
                    topicList.subheads.map((subhead) => (
                        <SubHead key={subhead.id} >
                            <Play>
                                <img src={playImage} alt='Play' />
                            </Play>
                            <Question>
                                {subhead.title}
                            </Question>
                            <Duration>
                                {subhead.durattion}
                            </Duration>
                        </SubHead>
                    ))
                }

            </Li>
        ));
    };


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
                    {renderTopics()}
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
const Ul = styled.ul`
    width: 26%;
`
const Li = styled.li`
    width: 100%;
`
const Head = styled.div`
    background: #f5f5f5;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    padding: 4% 6%;
    width: 100%;
    margin-bottom: 5%;
`
const Intro = styled.p`
    width: 90%;
    font-size: 17px;
    font-weight: 700;
`
const Arrow = styled.div`
    width: 5%;
`
const SubHead = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto 3%;
`
const Play = styled.div`
    width: 6%;
`
const Question = styled.p`
    width: 80%;
    font-size: 15px;
    font-weight: 700;
    color: #536b70;
`
const Duration = styled.p`
    width: 5%;
    font-size: 14px;
    font-weight: 700;
    color: #536b70;
`