import React from "react";
import {FormField} from "./FormField";
import {Link} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

interface FormData {
    [key: string]: string;
}

interface MainFormProps {
    children: React.ReactNode;
    handleSubmit: (data: FormData) => void;
}

const MainFormLogin: React.FC<MainFormProps> = ({children, handleSubmit}) => {

    const [formData, setFormData] = React.useState<FormData>({
        email: "",
        password: ""
    });

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <Form>
            {
                React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type === FormField) {
                        return React.cloneElement(child as React.ReactElement, {
                            onChange: handleChange,
                            value: formData[(child as React.ReactElement).props.name]
                        });
                    }
                    return child;
                })
            }
            <div className={"mb-3 text-end"}>
                <Link to={"/"} className={"text-primary"}>Quên mật khẩu?</Link>
            </div>
            <Button
                className={"form-control"}
                type={"button"}
                variant="outline-danger"
                onClick={() => handleSubmit(formData)}
            >
                Đăng nhập
            </Button>
        </Form>
    )
}

const FormLogin = () => {

    const handleSubmit = (data: FormData) => {
        alert(JSON.stringify(data));
    }

    return (
        <MainFormLogin handleSubmit={handleSubmit}>
            <FormField
                label={"Email"}
                type={"email"}
                name={"email"}
                className={"text-start"}
                placeholder={"Nhập email của bạn"}
            />
            <FormField
                label={"Mật khẩu"}
                type={"password"}
                name={"password"}
                className={"text-start"}
                placeholder={"Nhập mật khẩu của bạn"}
            />
        </MainFormLogin>
    )
}

export default FormLogin;