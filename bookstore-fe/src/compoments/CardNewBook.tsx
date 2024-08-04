import React from "react";
import {Badge, Image} from "react-bootstrap";
import {BookInterface} from "../interfaces/BookServiceInterfaces";
import {formatVND} from "../utils/FormartPrice";
import {getMainImage} from "../utils/GetMainImage";
import {getDiscountPrice} from "../utils/GetDiscountPrice";

interface CardNewBookProps {
    className?: string;
    book: BookInterface;
}

export const CardNewBook: React.FC<CardNewBookProps> = ({className, book}) => {
    if (!book) return null;

    return (
        <div className={`book ${className || ""}`}>
            <a href={"/"} className={"image-book"}>
                <Image src={getMainImage(book.images)?.imageUrl || ""} loading={"lazy"} fluid/>
            </a>
            <a href={"/"} className={"book-title"}>
                {book.bookName}
            </a>
            <span className={"book-price"}>
                {formatVND(book.bookPrice)}
                <Badge bg="danger" className={"py-2 ms-2"}>{book.bookDiscount}%</Badge>
            </span>
            <span className={"book-price-discount"}>{getDiscountPrice(book.bookPrice, book.bookDiscount)}</span>
            <span className={"paid"}>Đã bán 100</span>
        </div>
    );
}