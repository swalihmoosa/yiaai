import React, { useState } from 'react'
import styled from 'styled-components'

import posterImage from '../../assets/images/videoPage/video.png'
import posterImageOne from '../../assets/images/videoPage/video-one.png'
import posterImageTwo from '../../assets/images/videoPage/video-two.png'
import steypImage from '../../assets/images/videoPage/small.svg'
import tefunImage from '../../assets/images/videoPage/1080.svg'
import arrowImage from '../../assets/images/videoPage/down-arrow.svg'
import playImage from '../../assets/images/videoPage/play-black.svg'
import tickImage from '../../assets/images/videoPage/green-tick.svg'
import warningImage from '../../assets/images/videoPage/triangle-exclamation-solid.svg'
import lockImage from '../../assets/images/videoPage/play-lock.svg'

import { Player } from 'video-react';
import { Link } from 'react-router-dom'


export default function VideoPage() {
    const [selectedId,setSelectedId] = useState(1)
    const [subheadSelectedId,setSubheadSelectedId] = useState(1)
    const [examNotify,setExamNotify] = useState(false)
    const [examStart,setExamStart] = useState(false)
    const [topicLists]= useState([
        {
            id:1,
            heading : "Introduction to Technology",
            subheads : [
                {
                    id : 1,
                    title : "What is technology?",
                    video : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                    poster : posterImage,
                    durattion : "2:34",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    video : "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
                    poster : posterImageOne,
                    durattion : "8:30",
                },
                {
                    id : 3,
                    title : "Why should we learn technology?",
                    video : "http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4",
                    poster : posterImageTwo,
                    durattion : "20:14",
                },
                {
                    id : 4,
                    title : "In which age who can learn technology?",
                    video : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                    poster : posterImage,
                    durattion : "00:34",
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
                    video : "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
                    poster : posterImageOne,
                    durattion : ":14",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    video : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                    poster : posterImageTwo,
                    durattion : "8:34",
                },
            ],
        },
        {
            id:3,
            heading : "Introduction to Technology",
            subheads : [
                {
                    id : 1,
                    title : "What is technology?",
                    video : "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
                    poster : posterImageOne,
                    durattion : ":14",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    video : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                    poster : posterImageTwo,
                    durattion : "8:34",
                },
            ],
        },
    ])

    const videoClip = topicLists[selectedId - 1].subheads[subheadSelectedId - 1].video
    const videoPoster = topicLists[selectedId - 1].subheads[subheadSelectedId - 1].poster
    const headListNumber = topicLists.length
    const subheadListNumber = topicLists[selectedId - 1].subheads.length

    const renderImages = (subhead, subheadSelectedId) =>{
        if (subhead.id === subheadSelectedId ){
            return <img src={playImage} alt="Play" />
        }
        if (subhead.id <= subheadSelectedId ){
            return <img src={tickImage} alt="Play" />
        }
        if (subhead.id >= subheadSelectedId ){
            return <img src={lockImage} alt="Play" />
        }
    }

    const renderTopics = () => {
        return topicLists.map((topicList) => (
            <Li key={topicList.id} className={ topicList.id === selectedId && 'active' } >
                <Head  onClick = { ()=> {
                    if(selectedId >= topicList.id){
                        setSelectedId(topicList.id)
                    }else{
                        // setSubheadSelectedId(1)
                        // setSelectedId(topicList.id)
                    }
                }}
                style={{cursor : selectedId < topicList.id ? 'not-allowed' : 'pointer' }} 
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
                        <SubHead key={subhead.id} 
                        className={ subhead.id === subheadSelectedId && 'subheadActive' } 
                        onClick={ ()=> subhead.id <= subheadSelectedId ? setSubheadSelectedId(subhead.id) : "" }
                        style={{cursor : subhead.id > subheadSelectedId ? 'not-allowed' : 'pointer' }} >
                            <Play>
                                {
                                    renderImages(subhead,subheadSelectedId)
                                }
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
            
        {
            examNotify ?            
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
            : ""
        }

        {
            examStart ? 
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
                <Start to="/exam-start" >
                    Start Now
                </Start>
            </Exam>
            : ""
        }

            <Wrapper>
                <Video>
                    <Thumbnail>
                        <Player
                            playsInline
                            poster= {videoPoster}
                            src= {videoClip}
                            />
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
                        <Mark 
                            onClick={ ()=>{
                                if(headListNumber === selectedId){
                                    setExamNotify(true)
                                    if(subheadListNumber === subheadSelectedId){
                                        setExamStart(true)
                                        setExamNotify(false)
                                        window.scrollTo(0,0)
                                    }else{
                                        setSubheadSelectedId(subheadSelectedId + 1 )
                                    }
                                }else{
                                    if(subheadListNumber === subheadSelectedId){
                                        setSelectedId(selectedId + 1)
                                        setSubheadSelectedId(1)
                                    }else{
                                        setSubheadSelectedId(subheadSelectedId + 1 )
                                    }
                                }
                            } }
                        >
                            <Tick>
                                <img src={tickImage} alt='Tick' />
                            </Tick>
                            <Complete>
                                Mark as Completed
                            </Complete>
                        </Mark>
                    </Tech>
                    <Steyp href="https://www.steyp.com/" target="blank" >
                        <img src={steypImage} alt='Steyp' />
                    </Steyp>
                    <Tefun href="https://www.talrop.com/" target="blank"  >
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
const Steyp = styled.a`
    width: 100%;
    display: block;
    margin-bottom: 3%;
`
const Tefun = styled.a`
    width: 100%;
    margin-bottom: 3%;
    display: block;
`
const Ul = styled.ul`
    width: 26%;
`
const Li = styled.li`
    width: 100%;
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
    /* display: none; */
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
const Start = styled(Link)`
    display: block;
    text-align: center;
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
        background: transparent;
        color: #e4794b;
        border: 2px solid #e4794b;
    }
`