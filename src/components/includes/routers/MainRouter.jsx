import React from 'react'
import { Route, Routes } from "react-router-dom";

import ExamComplete from '../../screens/ExamComplete';
import ExamStart from '../../screens/ExamStart';
import ChooseProfile from '../../screens/ChooseProfile';
import ExamPage from '../../screens/ExamPage';
import FillDetails from '../../screens/FillDetails';
import VideoPage from '../../screens/VideoPage';
import LandingPage from '../../screens/LandingPage';


export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/fill-details/" element={<FillDetails />}/>
            <Route path="/choose-profile/" element={<ChooseProfile />}/>
            <Route path="/video-page/" element={<VideoPage />}/>
            <Route path="/exam-start/" element={<ExamStart />}/>
            <Route path="/exam-page/" element={<ExamPage />}/>
            <Route path="/exam-complete/" element={<ExamComplete />}/>
        </Routes>
    )
}
