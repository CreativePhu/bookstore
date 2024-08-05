import React from "react";
import {FormField} from "./FormField";
import {Link} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {FormErrors, FormData, MainFormProps} from "../interfaces/FormLoginAndRegisterInterfaces";

const regexEmailPattern = process.env.REACT_APP_REGEX_EMAIL;

if (!regexEmailPattern) {
    throw new Error("Regex patterns are not defined in the environment variables");
}

const MainFormLogin: React.FC<MainFormProps> = ({children, handleSubmit}) => {
    const REGEX_EMAIL = new RegExp(regexEmailPattern);
    const [formData, setFormData] = React.useState<FormData>({email: "", password: ""});
    const [errors, setErrors] = React.useState<FormErrors>({email: "", password: ""});

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        });

        if(errors[name]) {
            setErrors((preValue) => {
                const newErrors = {...preValue};
                delete newErrors[name];
                return newErrors;
            })
        }
    }

    const validateForm = () : boolean => {
        const errors: FormErrors = {};
        let check = false;

        if (!formData.email) {
            errors.email = "Vui lòng nhập email";
            check = true;
        } else if (!formData.email.match(REGEX_EMAIL)) {
            errors.email = "Email không hợp lệ";
            check = true;
        }

        if (!formData.password) {
            errors.password = "Vui lòng nhập mật khẩu";
            check = true;
        }

        setErrors(errors);
        return check;
    }

    return (
        <Form>
            {
                React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type === FormField) {
                        return React.cloneElement(child as React.ReactElement, {
                            onChange: handleChange,
                            value: formData[(child as React.ReactElement).props.name],
                            error: errors[(child as React.ReactElement).props.name]
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
                onClick={() => {
                    if (!validateForm()) handleSubmit(formData)
                }}
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