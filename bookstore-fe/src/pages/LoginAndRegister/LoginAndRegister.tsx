import React from "react";
import FormLogin from "../../compoments/FormLogin";
import {Container, Row} from "react-bootstrap";
import {FormRegister} from "../../compoments/FormRegister";
import {Option, OptionType} from "./compoments/FormLoginAndRegister";

export const LoginAndRegister: React.FC = () => {

    const [typeActive, setTypeActive] = React.useState<OptionType>(OptionType.LOGIN);

    return (
        <Container className={"d-flex justify-content-center align-items-center"} style={{minHeight: "650px"}}>
            <div className={"bg-white rounded-3 p-5"} style={{width: "450px"}}>
                <Row className={"mb-3"}>
                    <Option active={typeActive} setActive={setTypeActive} text={"Đăng nhập"} type={OptionType.LOGIN}/>
                    <Option active={typeActive} setActive={setTypeActive} text={"Đăng kí"} type={OptionType.REGISTER}/>
                </Row>
                {
                    (typeActive === OptionType.LOGIN) ? <FormLogin/> : <FormRegister/>
                }
            </div>
        </Container>
    );
};