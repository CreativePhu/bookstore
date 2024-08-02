import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Navbar} from "./containers/Navbar";
import {Footer} from "./containers/Footer";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App;
