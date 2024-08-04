import React from "react";
import {Alert, Button, Container, Spinner} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import {CardNewBook} from "../compoments/CardNewBook";
import {BookInterface} from "../interfaces/BookServiceInterfaces";
import {GetBooks} from "../api/BookService";

enum ScrollStatus {
    LEFT = "left",
    RIGHT = "right",
    NONE = "none"
}

const NewBookLable: React.FC = () => {
    return (
        <Container className={"pb-3"}>
            <div
                className={"lable-new-book d-flex justify-content-between align-items-center bg-white rounded py-2 px-3"}>
                <div className={"d-flex justify-content-start align-items-center gap-3"}>
                    <Icon.JournalBookmarkFill className={"text-danger"} size={25}/>
                    <h4 className={"mb-0"}>Sách Mới</h4>
                </div>
                <Button variant="link" className={"py-1 px-0 text-decoration-none"}>
                        <span className={"fw-bold"}>
                            Xem tất cả <Icon.ChevronRight size={20}/>
                        </span>
                </Button>
            </div>
        </Container>
    );
}

const ListNewBook: React.FC = () => {

    const [books, setBooks] = React.useState<BookInterface[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>("");
    const handleScrollListNewBook = React.useRef<HTMLDivElement | null>(null);
    const [scrollStatus, setScrollStatus] = React.useState<ScrollStatus>(ScrollStatus.LEFT);

    React.useEffect(() => {
        setLoading(true);
        GetBooks()
            .then((data) => {
                setBooks(data.books);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => {
                setLoading(false);
            })
    }, [])

    const scrollLeft = () => {
        if (handleScrollListNewBook.current) {
            handleScrollListNewBook.current.scrollBy({
                left: -handleScrollListNewBook.current.offsetWidth - 44,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (handleScrollListNewBook.current) {
            handleScrollListNewBook.current.scrollBy({
                left: handleScrollListNewBook.current.offsetWidth + 44,
                behavior: 'smooth',
            });
        }
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (handleScrollListNewBook.current) {
                const {scrollLeft, scrollWidth, offsetWidth} = handleScrollListNewBook.current;
                if (scrollLeft === 0) {
                    setScrollStatus(ScrollStatus.LEFT);
                } else if (scrollLeft + offsetWidth >= scrollWidth) {
                    setScrollStatus(ScrollStatus.RIGHT);
                } else {
                    setScrollStatus(ScrollStatus.NONE);
                }
            }
        };

        const currentRef = handleScrollListNewBook.current;

        if (currentRef) currentRef.addEventListener('scroll', handleScroll);

        return () => {
            if (currentRef) currentRef.removeEventListener('scroll', handleScroll)
        };
    }, [loading]);

    const listCardNewBook = books.map((book) => {
        return <CardNewBook key={book.bookId} book={book}/>
    })

    if (loading) {
        return (
            <Container>
                <div className={"d-flex justify-content-center align-items-center"} style={{height: "300px"}}>
                    <Spinner animation="border" variant="light"/>
                </div>
            </Container>
        )
    }

    if (error) {
        return (
            <Container>
                <div className={"d-flex justify-content-center align-items-center"} style={{height: "300px"}}>
                    <Alert key={"danger"} variant={"danger"}>
                        {error}
                    </Alert>
                </div>
            </Container>
        )
    }

    return (
        <Container>
            <div className={"position-relative"}>
                <div ref={handleScrollListNewBook} className={"list-book-new hiden-scroll"}>
                    {listCardNewBook}
                </div>
                <div
                    className={`position-absolute top-50 start-0 translate-middle ${scrollStatus !== ScrollStatus.LEFT ? "d-block" : "d-none"}`}>
                    <div
                        onClick={() => {
                            scrollLeft();
                        }}
                        className={"book-new-button-left rounded-circle bg-white d-flex justify-content-center align-items-center shadow"}
                        style={{width: "30px", height: "30px"}}>
                        <Icon.ChevronLeft size={15}/>
                    </div>
                </div>
                <div
                    className={`position-absolute top-50 start-100 translate-middle ${scrollStatus !== ScrollStatus.RIGHT ? "d-block" : "d-none"}`}>
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
            className={"py-3 mt-4"}
            style={{
                background: `url("https://cdn0.fahasa.com/media/fahasa_web_image/flash_sale_background_image.jpg") no-repeat center center`,
            }}
        >
            <NewBookLable/>
            <ListNewBook/>
        </Container>
    )
}