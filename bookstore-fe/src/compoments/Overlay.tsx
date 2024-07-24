import React from "react";

interface OverlayProps {
    children: React.ReactNode;
}

export const Overlay : React.FC<OverlayProps> = ({children}) => {
    return (
        <div className={"position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center background-opacity-50"}>
            {children}
        </div>
    );
}