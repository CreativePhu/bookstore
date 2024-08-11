import React from "react";
import {Button, Container, Form, Image, InputGroup} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import logo_brand from "../assets/images/logo_brand.webp";
import {Link} from "react-router-dom";
import {useFormLoginAndRegisterDispatch} from "../App";

interface ItemMenuUserProps {
    icon: React.ReactNode;
    text: string;
}

const StatusHoverAccountContext = React.createContext(false);

const LogoBrand = () => {
    return (
        <div title={"logo_brand"}
             className={"d-flex flex-grow-1 flex-lg-grow-0 justify-content-center mb-3 mb-lg-0"}>
            <Link to={"/"}>
                <Image src={logo_brand} loading={"lazy"} fluid style={{width: "220px", height: "auto"}}/>
            </Link>
        </div>
    );
}

const MenuSearch = () => {
    return (
        <div title={"menu_search"} className={"d-flex flex-row flex-grow-1 flex-sm-grow-0 align-items-center"}
             style={{minWidth: "260px", width: "550px"}}>
            <span title={"icon_menu"} className={"mx-3"}>
                <Icon.Grid color={"gray"} size={30}/>
            </span>
            <InputGroup>
                <Form.Control type={"search"} placeholder={"Truyện hài hước,...."}/>
                <Button variant="danger">
                    <Icon.Search color={"white"} size={20} className={"mx-3"}/>
                </Button>
            </InputGroup>
        </div>
    );
}

const ItemMenuUser: React.FC<ItemMenuUserProps> = ({icon, text}) => {
    return (
        <div className={"px-2 cursor-pointer"}>
            {icon}
            <p className={"fw-semibold text-secondary m-0 d-none d-lg-block"} style={{fontSize: "14px"}}>{text}</p>
        </div>
    );
}

const HoverAccount: React.FC<{ hover: boolean, setHover: React.Dispatch<boolean> }> = ({hover, setHover}) => {

    const dispatch = useFormLoginAndRegisterDispatch();

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`position-absolute bg-white rounded p-2 shadow-sm ${hover ? "d-block" : "d-none"}`}
            style={{bottom: "-120%", right: 0, width: "200px"}}>
            <Button
                onClick={() => dispatch(true)}
                variant="outline-danger"
                className={"form-control fw-bold"}>
                Đăng Nhập/Đăng Kí
            </Button>
        </div>
    )
}

const MenuUser = () => {

    const statusHoverAccountReducer = (state: boolean, action: boolean) => {
        switch (action) {
            case true:
                return true;
            case false:
                return false;
            default:
                return state;
        }
    }

    const [statusHoverAccount, setStatusHoverAccount] = React.useReducer(statusHoverAccountReducer, false)

    return (
        <StatusHoverAccountContext.Provider value={statusHoverAccount}>
            <div className={"d-none d-md-flex flex-row position-relative"}>
                <ItemMenuUser icon={<Icon.Cart color={"gray"} size={20}/>} text={"Giỏ hàng"}/>
                <Link
                    onMouseEnter={() => setStatusHoverAccount(true)}
                    onMouseLeave={() => setStatusHoverAccount(false)}
                    to={"/login"}
                    className={"text-decoration-none"}
                >
                    <ItemMenuUser icon={<Icon.PersonFill color={"gray"} size={20}/>} text={"Tài khoản"}/>
                </Link>
                <HoverAccount hover={statusHoverAccount} setHover={setStatusHoverAccount}/>
            </div>
        </StatusHoverAccountContext.Provider>
    );
}

export const Navbar = () => {
    return (
        <Container fluid>
            <Container className={"d-flex flex-wrap flex-row justify-content-between align-items-center py-2"}>
                <LogoBrand/>
                <MenuSearch/>
                <MenuUser/>
            </Container>
        </Container>
    );
}