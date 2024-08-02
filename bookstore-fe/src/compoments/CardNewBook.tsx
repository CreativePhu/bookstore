import React from "react";
import {Badge, Image} from "react-bootstrap";

interface CardNewBookProps {
    className?: string;
}

export const CardNewBook: React.FC<CardNewBookProps> = ({className}) => {
    return (
        <div className={`book ${className}`}>
            <a href={"/"} className={"image-book"}>
                <Image src="https://cdn0.fahasa.com/media/catalog/product/c/h/chiasetutraitim-bia.jpg" loading={"lazy"} fluid/>
            </a>
            <a href={"/"} className={"book-title"}>
                Chia sẻ từ trái tim Chia sẻ từ trái tim Chia sẻ từ trái tim Chia sẻ từ trái tim
            </a>
            <span className={"book-price"}>
                100.000đ <Badge className={"py-2 ms-2"} bg="danger">-10%</Badge>
            </span>
            <span className={"book-price-discount"}>100.000đ</span>
            <span className={"paid"}>Đã bán 100</span>
        </div>
    )
}