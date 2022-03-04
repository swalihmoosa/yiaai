import React, { useState } from 'react';
import './App.css';
import "../src/components/assets/css/video-react.css";
import { BrowserRouter as Router } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './components/includes/Header';
import AppRouter from './components/includes/routers/AppRouter';

export const JoinContext = React.createContext();


function App() {
    const[hamBurgerClick,setHarmBurgerClick] = useState(false)
    const[useBarClick,setUseBarClick] = useState(false)
    const[isLoggin] = useState(false)

    const updatehamBurgerClick = () =>{
        setHarmBurgerClick(hamBurgerClick=> !hamBurgerClick);
    }

    const updateUseBarClick = () =>{
        setUseBarClick(useBarClick=> !useBarClick);
    }


    return (
        <JoinContext.Provider value={{hamBurgerClick, useBarClick, isLoggin, updatehamBurgerClick, updateUseBarClick}} >
            <Router>
                <Header />
                <AppRouter />
            </Router>
        </JoinContext.Provider>
    );
}
export default App;