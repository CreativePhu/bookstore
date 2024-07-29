import React from "react";
import {Badge, Button, Container, Image} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const NewBookLable: React.FC = () => {
    return (
        <Container className={"pb-3"}>
            <div
                className={"lable-new-book d-flex justify-content-between align-items-center bg-white rounded py-2 px-3"}>
                <div className={"d-flex justify-content-start align-items-center"}>
                    <span className={"fs-4 fw-bold me-2"}>Sách Mới</span>
                    <Badge bg="danger" className={"py-2"}>New</Badge>
                </div>
                <Button variant="link">
                        <span className={"fw-bold"}>
                            Xem tất cả <Icon.ChevronRight size={20}/>
                        </span>
                </Button>
            </div>
        </Container>
    );
}

const Book: React.FC = () => {
    return (
        <div className={"book"}>
            <a href={"/"} className={"image-book"}>
                <Image src="https://cdn0.fahasa.com/media/catalog/product/c/h/chiasetutraitim-bia.jpg" fluid/>
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

const ListNewBook: React.FC = () => {

    const handleScroll = React.useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (handleScroll.current) {
            handleScroll.current.scrollBy({
                left: -handleScroll.current.offsetWidth - 40,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (handleScroll.current) {
            handleScroll.current.scrollBy({
                left: handleScroll.current.offsetWidth + 40,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Container>
            <div className={"position-relative"}>
                <div ref={handleScroll} className={"list-book-new hiden-scroll"}>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                </div>
                <div className="position-absolute top-50 start-0 translate-middle">
                    <div
                        onClick={() => {
                            scrollLeft();
                        }}
                        className={"book-new-button-left rounded-circle bg-white d-flex justify-content-center align-items-center shadow"}
                        style={{width: "30px", height: "30px"}}>
                        <Icon.ChevronLeft size={15}/>
                    </div>
                </div>
                <div className="position-absolute top-50 start-100 translate-middle">
                    <div
                        onClick={() => {
                            scrollRight();
                        }}
                        className={"book-new-button-right rounded-circle bg-white d-flex justify-content-center align-items-center shadow"}
                        style={{width: "30px", height: "30px"}}>
                        <Icon.ChevronRight size={15}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export const NewBook: React.FC = () => {
    return (
        <Container
            fluid
            className={"py-3 mt-3"}
            style={{
                background: `url("https://cdn0.fahasa.com/media/fahasa_web_image/flash_sale_background_image.jpg") no-repeat center center`,
            }}
        >
            <NewBookLable/>
            <ListNewBook/>
        </Container>
    )
}