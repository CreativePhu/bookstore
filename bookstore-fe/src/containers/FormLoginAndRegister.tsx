import React from "react";
import {Overlay} from "../compoments/Overlay";
import {Col, Row} from "react-bootstrap";
import FormLogin from "../compoments/FormLogin";

enum OptionType {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER"
}

interface OptionProps {
    active: OptionType;
    setActive: (active: OptionType) => void;
    text: string;
    type: OptionType;
}

const Option : React.FC<OptionProps> = ({active, setActive, text, type}) => {
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

    const [typeActive, setTypeActive] = React.useState<OptionType>(OptionType.LOGIN);

    return (
        <Overlay>
            <div className={"bg-white p-5 rounded-3"} style={{width: "450px"}}>
                <Row className={"mb-3"}>
                    <Option active={typeActive} setActive={setTypeActive} text={"Đăng nhập"} type={OptionType.LOGIN} />
                    <Option active={typeActive} setActive={setTypeActive} text={"Đăng kí"} type={OptionType.REGISTER} />
                </Row>
                <FormLogin />
            </div>
        </Overlay>
    );
}