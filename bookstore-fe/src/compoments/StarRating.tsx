import React from "react";
import * as Icon from "react-bootstrap-icons";

export const StarRating: React.FC = () => {
    return (
        <div className={"star-rating"}>
            <Icon.StarFill size={14} className={"text-warning"}/>
            <Icon.StarFill size={14} className={"text-warning"}/>
            <Icon.StarFill size={14} className={"text-warning"}/>
            <Icon.StarFill size={14} className={"text-warning"}/>
            <Icon.StarFill size={14} className={"text-warning"}/>
        </div>
    )
}