import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

interface FormFieldProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    onChange?: (name: string, value: string) => void;
    value?: string;
    className?: string;
    time: number;
    error?: string;
    checkMail?: () => boolean;
}

export const FormFieldEmailSendOTP: React.FC<FormFieldProps> = (props) => {

    const [isSendOTP, setIsSendOTP] = React.useState<boolean>(false);
    const [time, setTime] = React.useState<number>(0);

    React.useEffect(() => {

        const intervalID = setInterval(() => {
            if(time > 0) {
                setTime(preValue => preValue - 1);
            }else {
                setIsSendOTP(false)
            }
        }, 1000)

        return () => clearInterval(intervalID);

    }, [time, isSendOTP])

    const handleSendOTP = () => {
        if(props.checkMail && !props.checkMail()) {
            setIsSendOTP(true);
            setTime(props.time);
        }
    }

    return (
        <div className={`mb-3 ${props.className}`}>
            <label htmlFor="email" className={"form-label"}>{props.label}</label>
            <InputGroup>
                <Form.Control
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    className={"form-control"}
                    value={props.value}
                    onChange={(e) => {
                        if (props.onChange) props.onChange(e.target.name, e.target.value)
                    }}
                />
                <Button disabled={isSendOTP} onClick={() => handleSendOTP()} variant="outline-danger">
                    {
                        isSendOTP ? `Gửi lại sau ${time}s` : "Gửi mã OTP"
                    }
                </Button>
            </InputGroup>
            <div className={"form-text text-danger"}>{props.error}</div>
        </div>
    )
}