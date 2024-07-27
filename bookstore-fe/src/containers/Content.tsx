import React from "react";
import {Container} from "react-bootstrap";
import {HeroSection} from "./HeroSection";

export const Content : React.FC = () => {
    return (
        <Container fluid className={"background-gray min-vh-100"}>
            <HeroSection/>
        </Container>
    )
}