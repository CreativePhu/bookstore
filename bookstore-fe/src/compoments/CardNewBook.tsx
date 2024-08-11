import React from "react";
import {Badge, Image} from "react-bootstrap";
import {BookInterface} from "../interfaces/BookServiceInterfaces";
import {formatVND} from "../utils/FormartPrice";
import {getMainImage} from "../utils/GetMainImage";
import {getDiscountPrice} from "../utils/GetDiscountPrice";
import {StarRating} from "./StarRating";

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
            <StarRating />
            <span className={"book-price"}>
                {formatVND(book.bookPrice)}
            </span>
            <span className={"book-price-discount"}>
                {
                    book.bookDiscount < 0 ?
                        <>
                            <Badge bg="secondary" className={"py-2 me-2"} style={{fontSize: "10px"}}>- {book.bookDiscount}%</Badge>
                            {getDiscountPrice(book.bookPrice, book.bookDiscount)}
                        </> : null
                }
            </span>
            <span className={"paid"}>Đã bán 100</span>
        </div>
    );
}