import React from "react";
import {Form, InputGroup} from "react-bootstrap";

interface FormFieldProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    onChange?: (name: string, value: string) => void;
    value?: string;
    className?: string;
    error?: string;
}

export const FormField: React.FC<FormFieldProps> = (props) => {
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
            </InputGroup>
            <div className={"form-text text-danger"}>{props.error}</div>
        </div>
    )
}