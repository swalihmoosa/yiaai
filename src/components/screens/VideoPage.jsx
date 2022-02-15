import React, { useState } from 'react'
import styled from 'styled-components'

import thumbnailImage from '../assets/images/videoPage/video.png'
import steypImage from '../assets/images/videoPage/small.svg'
import tefunImage from '../assets/images/videoPage/1080.svg'
import arrowImage from '../assets/images/videoPage/down-arrow.svg'
import playImage from '../assets/images/videoPage/play-black.svg'
import tickImage from '../assets/images/videoPage/green-tick.svg'
import warningImage from '../assets/images/videoPage/triangle-exclamation-solid.svg'


export default function VideoPage() {
    const [selectedId,setSelectedId] = useState("")
    const [subheadSelectedId,setSubheadSelectedId] = useState(1)
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
            <Li key={topicList.id} className={ topicList.id === selectedId && 'active' } >
                <Head  onClick = { ()=> {
                    if(selectedId === topicList.id){
                        setSelectedId("")
                    }else{
                        setSelectedId(topicList.id)
                    }
                }} 
                >
                    <Intro>
                        {topicList.heading}
                    </Intro>
                    <Arrow className={ topicList.id === selectedId && 'arrowActive' } >
                        <img src={arrowImage} alt='Arrow' />
                    </Arrow>
                </Head>

                {
                    topicList.subheads.map((subhead) => (
                        <SubHead key={subhead.id} className={ subhead.id === subheadSelectedId && 'subheadActive' } 
                        onClick={ ()=> { setSubheadSelectedId(subhead.id) } }  >
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
            
            <Notify>
                <Warning>
                    <img src={warningImage} alt='Warning' />
                </Warning>
                <Date>
                    <H3>
                        We will notify Your Examination date Soon
                    </H3>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequuntur officiis temporibus explicabo iure eaque minus in. 
                        Odit, deleniti laborum quidem omnis possimus neque placeat recusandae inventore accusantium magnam tempore.
                    </Paragraph>
                </Date>
            </Notify>

            <Exam>
                <Warning>
                    <img src={warningImage} alt='Warning' />
                </Warning>
                <Description>
                    <H3>
                        Your Examination date Announced
                    </H3>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequuntur officiis temporibus explicabo iure eaque minus in. 
                        Odit, deleniti laborum quidem omnis possimus neque placeat recusandae inventore accusantium magnam tempore.
                    </Paragraph>
                </Description>
                <Start>
                    Start Now
                </Start>
            </Exam>

            <Wrapper>
                <Video>
                    <Thumbnail>
                        <img src={thumbnailImage} alt='Thumbnail' />
                    </Thumbnail>
                    <Tech>
                        <Fundamentals>
                            <P>
                                Technology Fundamentals
                            </P>
                            <H4>
                                What is technology?
                            </H4>
                        </Fundamentals>
                        <Mark>
                            <Tick>
                                <img src={tickImage} alt='Tick' />
                            </Tick>
                            <Complete>
                                Mark as Completed
                            </Complete>
                        </Mark>
                    </Tech>
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
    /* align-items: center; */
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
    &:hover{
        cursor: pointer;
    }
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
`
const Steyp = styled.div`
    width: 100%;
    margin-bottom: 3%;
    &:hover{
        cursor: pointer;
    }
`
const Tefun = styled.div`
    width: 100%;
    margin-bottom: 3%;
    &:hover{
        cursor: pointer;
    }
`
const Ul = styled.ul`
    width: 26%;
`
const Li = styled.li`
    width: 100%;
    cursor: pointer;
    &.active div {
        display: flex;
    }
    & .arrowActive{
        transform: rotate(180deg);
    }
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
    transition: all 0.3s ease 0s;
`
const SubHead = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto 3%;
    display: none;
    transition: all 0.3s ease 0s;
    justify-content: space-between;
    align-items: center;
    padding: 12px 31px;
    cursor: pointer;
    border-radius: 9px;
    &.subheadActive{
        background-image: linear-gradient(to right,#68ba50,#469aad);
    }
    &.subheadActive p{
        color: #fff;
    }
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
const Tech = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2%;
`
const Fundamentals = styled.div`
    width: 70%;
`
const Mark = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    &:hover{
        background-image: linear-gradient(to right,#469aad,#68ba50);
        cursor: pointer;
    }
`
const Tick = styled.div`
    width: 12%;
`
const Complete = styled.p`
    width: 88%;
    font-size: 18px;
    font-weight: 900;
    color: #fff;
`
const Exam = styled.div`
    background : #fdf3eb;
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding: 3% 2%;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 4%;
`
const Notify = styled.div`
    background : #fdf3eb;
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 3% 2%;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 4%;
`
const Warning = styled.div`
    width: 2%;
`
const Description = styled.div`
    width: 80%;
`
const Date = styled.div`
    width: 80%;
    margin-left: 3%;
`
const H3 = styled.h3`
    color: #e4794b;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 1%;
`
const Paragraph = styled.p`
    color: #aba9a9;
    font-size: 18px;
    font-weight: 700;
`
const Start = styled.button`
    cursor: pointer;
    width: 10%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    border: 2px solid #e4794b;
    background: #e4794b;
    &:hover{
        background: #fff;
        color: #e4794b;
        border: 2px solid #e4794b;
    }
`