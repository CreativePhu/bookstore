import React from "react";
import {Container} from "react-bootstrap";
import {HeroSection} from "./HeroSection";
import {Categories} from "./Categories";
import {BookNew} from "./BookNew";

export const Content : React.FC = () => {
    return (
        <Container fluid className={"background-gray min-vh-100 px-0"}>
            <HeroSection/>
            <Categories/>
            <BookNew/>
        </Container>
    )
}