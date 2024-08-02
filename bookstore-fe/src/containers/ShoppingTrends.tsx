import React from "react";
import {Button, Container} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import {CardNewBook} from "../compoments/CardNewBook";

const LabelShoppingTrends: React.FC = () => {
    return (
        <div className={"rounded-top"} style={{backgroundColor: "#FCDDEF"}}>
            <div className={"d-flex justify-content-start align-items-center gap-3 py-3 px-3"}>
                <Icon.ClipboardDataFill className={"text-danger"} size={25}/>
                <h4 className={"text-center mb-0"}>Xu Hướng Mua Sắm</h4>
            </div>
        </div>
    )
}

const ListItemsShoppingTrends: React.FC = () => {
    return (
        <div className={"list-items-shopping-trends py-2 bg-white"}>
            <div className={"list-book-shopping-trend"}>
                <CardNewBook className={"hover-card-new-book"}/>
                <CardNewBook className={"hover-card-new-book"}/>
                <CardNewBook className={"hover-card-new-book"}/>
                <CardNewBook className={"hover-card-new-book"}/>
                <CardNewBook className={"hover-card-new-book"}/>
                <CardNewBook className={"hover-card-new-book"}/>
                <CardNewBook className={"hover-card-new-book"}/>
                <CardNewBook className={"hover-card-new-book"}/>
                <CardNewBook className={"hover-card-new-book"}/>
                <CardNewBook className={"hover-card-new-book"}/>
            </div>
            <div className={"py-4"}>
                <Button variant={"outline-danger"}>Xem thêm</Button>
            </div>
        </div>
    )
}

export const ShoppingTrends = () => {
    return (
        <Container className={"py-3"}>
            <LabelShoppingTrends/>
            <ListItemsShoppingTrends/>
        </Container>
    )
};