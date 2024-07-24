import React from "react";

interface FormFieldProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    onChange?: (name: string, value: string) => void;
    value?: string;
    className?: string;
}

export const FormField : React.FC<FormFieldProps> = ({name, type, label, placeholder, onChange, value, className}) => {
    return (
        <div className={`mb-3 ${className}`}>
            <label htmlFor="email" className={"form-label"}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={"form-control"}
                value={value}
                onChange={(e) => { if(onChange) onChange(e.target.name, e.target.value)}}
            />
            <div className={"form-text text-danger"}>We'll never share your email with anyone else.</div>
        </div>
    )
}