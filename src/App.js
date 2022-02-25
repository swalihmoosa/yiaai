import './App.css';
import "../src/components/assets/css/video-react.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/includes/Header';
// import LandingSingle from './components/screens/LandingSingle';
import ExamComplete from './components/screens/ExamComplete';
import ExamStart from './components/screens/ExamStart';
import ChooseProfile from './components/screens/ChooseProfile';
import ExamPage from './components/screens/ExamPage';
import FillDetails from './components/screens/FillDetails';
import VideoPage from './components/screens/VideoPage';
import LandingPage from './components/screens/LandingPage';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/fill-details/" element={<FillDetails />}/>
                <Route path="/choose-profile/" element={<ChooseProfile />}/>
                <Route path="/exam-start/" element={<ExamStart />}/>
                <Route path="/exam-page/" element={<ExamPage />}/>
                <Route path="/exam-complete/" element={<ExamComplete />}/>
                <Route path="/video-page/" element={<VideoPage />}/>
            </Routes>
        </Router>
    );
}
export default App;
