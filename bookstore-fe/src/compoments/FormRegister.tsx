import React from "react";
import {Button, Form} from "react-bootstrap";
import {FormField} from "./FormField";
import {FormFieldEmailSendOTP} from "./FormFieldSendOTO";

interface FormData {
    [key: string]: string
}

interface MainFormRegisterProps {
    children: React.ReactNode,
    handleSubmit: (data: FormData) => void
}

const MainFormRegister: React.FC<MainFormRegisterProps> = ({children, handleSubmit}) => {

    const [formData, setFormData] = React.useState<FormData>({
        email: "",
        otp: "",
        password: "",
        passwordConfirm: ""
    })

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = () => {
        handleSubmit(formData);
    }

    return (
        <Form>
            {
                React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && (child.type === FormField || child.type === FormFieldEmailSendOTP)) {
                        return React.cloneElement(child as React.ReactElement, {
                            value: formData[(child as React.ReactElement).props.name],
                            onChange: handleChange
                        })
                    }
                    return child;
                })
            }
            <Button
                type={"button"}
                className={"form-control"}
                variant="outline-danger"
                onClick={handleFormSubmit}
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