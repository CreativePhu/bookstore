import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button, Container} from "react-bootstrap";
import {FormLoginAndRegister} from "./containers/FormLoginAndRegister";

function App() {
    return (
        <div className="App">
            <Container>
                <h1>THIS IS HOME PAGE</h1>
                <Button className={"fw-semibold"} variant="outline-danger">LOGIN/REGISTER</Button>
            </Container>
            <FormLoginAndRegister />
        </div>
    );
}

export default App;
