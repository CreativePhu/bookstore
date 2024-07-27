import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Navbar} from "./containers/Navbar";
import {Footer} from "./containers/Footer";
import {Content} from "./containers/Content";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
