import React from "react";
import {Overlay} from "../../../compoments/Overlay";
import {Col, Row} from "react-bootstrap";
import FormLogin from "../../../compoments/FormLogin";
import {FormRegister} from "../../../compoments/FormRegister";
import * as Icon from "react-bootstrap-icons";
import {useFormLoginAndRegisterDispatch} from "../../../App";

export enum OptionType {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER"
}

interface OptionProps {
    active: OptionType;
    setActive: (active: OptionType) => void;
    text: string;
    type: OptionType;
}

export const Option : React.FC<OptionProps> = ({active, setActive, text, type}) => {
    const classActive = "border-2 border-bottom text-danger border-danger"
    return (
        <Col
            className={`cursor-pointer ${(active === type) ? classActive : ""}`}
            onClick={() => setActive(type)}
        >
            <p>{text}</p>
        </Col>
    );
}

export const FormLoginAndRegister = () => {

    const dispatch = useFormLoginAndRegisterDispatch();
    const [typeActive, setTypeActive] = React.useState<OptionType>(OptionType.LOGIN);

    return (
        <Overlay>
            <div className={"bg-white p-5 rounded-3 position-relative"} style={{width: "450px"}}>
                <Row className={"mb-3"}>
                    <Option active={typeActive} setActive={setTypeActive} text={"Đăng nhập"} type={OptionType.LOGIN} />
                    <Option active={typeActive} setActive={setTypeActive} text={"Đăng kí"} type={OptionType.REGISTER} />
                </Row>
                {
                    (typeActive === OptionType.LOGIN) ? <FormLogin /> : <FormRegister />
                }
                <div onClick={() => dispatch(false)} className={"position-absolute fs-6 cursor-pointer"} style={{top: "15px", right: "20px"}}>
                    <Icon.XLg/>
                </div>
            </div>
        </Overlay>
    );
}