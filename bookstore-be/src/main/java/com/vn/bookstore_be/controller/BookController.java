package com.vn.bookstore_be.controller;

import com.vn.bookstore_be.dto.BookDTO;
import com.vn.bookstore_be.exception.ResourceNotFoundException;
import com.vn.bookstore_be.model.Book;
import com.vn.bookstore_be.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping()
    //http://localhost:8080/books/search?page=0&size=10&sortField=bookId&sortDir=asc&keyword=example
    public BookDTO getBooks(@RequestParam(defaultValue = "0") int page,
                               @RequestParam(defaultValue = "10") int size,
                               @RequestParam(defaultValue = "bookId") String sortField,
                               @RequestParam(defaultValue = "asc") String sortDir,
                               @RequestParam(defaultValue = "") String bookName) {
        Sort sort = Sort.by(sortDir.equalsIgnoreCase("asc") ? Sort.Direction.ASC : Sort.Direction.DESC, sortField);
        Page<Book> bookPage = bookService.searchBookByName(page, size, sort, bookName);
        return new BookDTO(
                bookPage.getContent(),
                bookPage.getTotalPages(),
                bookPage.getTotalElements(),
                bookPage.getNumber(),
                bookPage.getSize());
    }

    @GetMapping("/{bookId}")
    //http://localhost:8080/books/1
    public Book getBook(@PathVariable long bookId) {
        Book book = bookService.getBook(bookId);
        if (book == null) {
            throw new ResourceNotFoundException("Book not found with id: " + bookId);
        }
        return book;
    }


}
