import './App.css';

import Header from './components/includes/Header';
import ExamComplete from './components/screens/ExamComplete';
// import ExamStart from './components/screens/ExamStart';
// import ChooseProfile from './components/screens/ChooseProfile';
// import ExamPage from './components/screens/ExamPage';
// import LandingSingle from './components/screens/LandingSingle';
// import FillDetails from './components/screens/FillDetails';
// import VideoPage from './components/screens/VideoPage';
// import LandingPage from './components/screens/LandingPage';


function App() {
    return (
        <> 
            <Header />
            {/* <LandingPage /> */}
            {/* <VideoPage /> */}
            {/* <FillDetails /> */}
            {/* <ChooseProfile /> */}
            {/* <ExamStart /> */}
            {/* <ExamPage /> */}
            {/* <LandingSingle /> */}
            <ExamComplete />
        </>
    );
}
export default App;
