import React from "react";
import {Container} from "react-bootstrap";
import {Home} from "../pages/Home";

export const Content : React.FC = () => {
    return (
        <Container fluid className={"background-gray min-vh-100 px-0"}>
            <Home/>
        </Container>
    )
}