import React from "react";
import {Button, Container, Form, Image, InputGroup} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import logo_brand from "../assets/images/logo_brand.webp";

interface ItemMenuUserProps {
    icon: React.ReactNode;
    text: string;
}

const LogoBrand = () => {
    return (
        <div title={"logo_brand"}>
            <Image src={logo_brand} fluid style={{width: "220px", height: "auto"}}/>
        </div>
    );
}

const MenuSearch = () => {
    return (
        <div title={"menu_search"} className={"d-flex flex-row align-items-center"}>

            <span title={"icon_menu"} className={"mx-3"}>
                <Icon.Grid color={"gray"} size={30}/>
            </span>

            <InputGroup style={{width: "550px"}}>
                <Form.Control type={"search"} placeholder={"Truyện hài hước,...."}/>
                <Button variant="danger">
                    <Icon.Search color={"white"} size={20} className={"mx-3"}/>
                </Button>
            </InputGroup>

        </div>
    );
}

const ItemMenuUser : React.FC<ItemMenuUserProps> = ({icon, text}) => {
    return (
        <span className={"px-2 cursor-pointer"}>
            {icon}
            <p className={"fw-semibold text-secondary m-0"} style={{fontSize: "14px"}}>{text}</p>
        </span>
    );
}

const MenuUser = () => {
    return (
        <div className={"d-flex flex-row"}>
            <ItemMenuUser icon={<Icon.Cart color={"gray"} size={20}/>} text={"Giỏ hàng"}/>
            <ItemMenuUser icon={<Icon.PersonFill color={"gray"} size={20}/>} text={"Tài khoản"}/>
        </div>
    );
}

export const Navbar = () => {
    return (
        <Container fluid>
            <Container className={"d-flex flex-row justify-content-between align-items-center py-2"}>
                <LogoBrand/>
                <MenuSearch/>
                <MenuUser/>
            </Container>
        </Container>
    );
}