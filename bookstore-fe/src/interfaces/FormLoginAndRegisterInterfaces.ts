import React from "react";

export interface FormData {
    [key: string]: string;
}

export interface FormErrors {
    [key: string]: string;
}

export interface MainFormProps {
    children: React.ReactNode;
    handleSubmit: (data: FormData) => void;
}