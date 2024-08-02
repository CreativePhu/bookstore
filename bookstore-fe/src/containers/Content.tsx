import React from "react";
import {Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";

export const Content : React.FC = () => {
    return (
        <Container fluid className={"background-gray px-0"}>
            <Outlet/>
        </Container>
    )
}