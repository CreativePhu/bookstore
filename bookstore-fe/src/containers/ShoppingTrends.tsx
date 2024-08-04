import React from "react";
import {Alert, Button, Container, Spinner} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import {CardNewBook} from "../compoments/CardNewBook";
import {BookInterface} from "../interfaces/BookServiceInterfaces";
import {GetBooks} from "../api/BookService";

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

    const [books, setBooks] = React.useState<BookInterface[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>("");

    React.useEffect(() => {
        setLoading(true);
        GetBooks()
            .then((data) => {
                setBooks(data.books);
            })
            .catch((error) => {
                setError(error.message);
            }).finally(()=> {
                setLoading(false);
            })
    }, [])

    const listCardNewBook = books.map((book, index) => {
        return <CardNewBook key={book.bookId} book={book} className={"hover-card-new-book"}/>
    })

    if (loading) {
        return (
            <Container>
                <div className={"d-flex justify-content-center align-items-center"} style={{height: "300px"}}>
                    <Spinner animation="border" variant="danger" />
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
        <div className={"list-items-shopping-trends py-2 bg-white"}>
            <div className={"list-book-shopping-trend"}>
                {listCardNewBook}
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