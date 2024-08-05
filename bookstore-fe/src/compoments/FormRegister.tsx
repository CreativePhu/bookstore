import React from "react";
import {Button, Form} from "react-bootstrap";
import {FormField} from "./FormField";
import {FormFieldEmailSendOTP} from "./FormFieldSendOTO";
import {MainFormProps, FormData, FormErrors} from "../interfaces/FormLoginAndRegisterInterfaces";

const regexEmailPattern = process.env.REACT_APP_REGEX_EMAIL;
const regexPasswordPattern = process.env.REACT_APP_REGEX_PASSWORD;

if (!regexEmailPattern || !regexPasswordPattern) {
    throw new Error("Regex patterns are not defined in the environment variables");
}

const MainFormRegister: React.FC<MainFormProps> = ({children, handleSubmit}) => {

    const REGEX_EMAIL = new RegExp(regexEmailPattern);
    const REGEX_PASSWORD = new RegExp(regexPasswordPattern);

    const [formData, setFormData] = React.useState<FormData>({
        email: "",
        otp: "",
        password: "",
        passwordConfirm: ""
    })
    const [errors, setErrors] = React.useState<FormErrors>({
        email: "",
        otp: "",
        password: "",
        passwordConfirm: ""
    });

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        })

        if(errors[name]) {
            setErrors((preValue) => {
                const newErrors = {...preValue};
                delete newErrors[name];
                return newErrors;
            })
        }
    }

    const validateForm = (data: FormData) : boolean => {
        const errors: FormErrors = {};
        let check = false;

        if (!data.email) {
            errors.email = "Vui lòng nhập email";
            check = true;
        } else if (!data.email.match(REGEX_EMAIL)) {
            errors.email = "Email không hợp lệ";
            check = true;
        }

        if (!data.otp) {
            errors.otp = "Vui lòng nhập mã OTP";
            check = true;
        }

        if (!data.password) {
            errors.password = "Vui lòng nhập mật khẩu";
            check = true;
        } else if (!data.password.match(REGEX_PASSWORD)) {
            errors.password = "Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt";
            check = true;
        }

        if (!data.passwordConfirm) {
            errors.passwordConfirm = "Vui lòng nhập lại mật khẩu";
            check = true;
        } else if (data.password !== data.passwordConfirm) {
            errors.passwordConfirm = "Mật khẩu không trùng khớp";
            check = true;
        }

        setErrors(errors);
        return check;
    }

    const validateEmail = ():boolean => {
        let check = false;
        if (!formData.email) {
            setErrors((preValue) => {
                return {
                    ...preValue,
                    email: "Vui lòng nhập email"
                }
            })
            check = true;
        }else if(!formData.email.match(REGEX_EMAIL)) {
            setErrors((preValue) => {
                return {
                    ...preValue,
                    email: "Email không hợp lệ"
                }
            })
            check = true;
        }
        return check;
    }

    const handleFormSubmit = () => {
        handleSubmit(formData);
    }

    return (
        <Form>
            {
                React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        if(child.type === FormFieldEmailSendOTP){
                            return React.cloneElement(child as React.ReactElement, {
                                onChange: handleChange,
                                value: formData[(child as React.ReactElement).props.name],
                                error: errors[(child as React.ReactElement).props.name],
                                checkMail: validateEmail
                            })
                        }

                        if(child.type === FormField){
                            return React.cloneElement(child as React.ReactElement, {
                                value: formData[(child as React.ReactElement).props.name],
                                onChange: handleChange,
                                error: errors[(child as React.ReactElement).props.name]
                            })
                        }
                    }
                    return child;
                })
            }
            <Button
                type={"button"}
                className={"form-control"}
                variant="outline-danger"
                onClick={()=> {
                    if (!validateForm(formData)) handleFormSubmit();
                }}
            >
                Đăng kí
            </Button>
        </Form>
    )
}

export const FormRegister: React.FC = () => {

    const handleSubmit = (data: FormData) => {
        alert(JSON.stringify(data));
    }

    return (
        <MainFormRegister handleSubmit={handleSubmit}>
            <FormFieldEmailSendOTP
                label={"Email"}
                type={"email"}
                name={"email"}
                placeholder={"Nhập email của bạn"}
                className={"text-start"}
                time={120}
            />
            <FormField
                label={"Mã xác nhận OTP"}
                type={"text"}
                name={"otp"}
                placeholder={"Nhập mã OTP"}
                className={"text-start"}
            />
            <FormField
                label={"Mật khẩu"}
                type={"password"}
                name={"password"}
                placeholder={"Nhập mật khẩu"}
                className={"text-start"}
            />
            <FormField
                label={"Nhập lại mật khẩu"}
                type={"password"}
                placeholder={"Nhập lại mật khẩu"}
                name={"passwordConfirm"}
                className={"text-start"}
            />
        </MainFormRegister>
    )
}