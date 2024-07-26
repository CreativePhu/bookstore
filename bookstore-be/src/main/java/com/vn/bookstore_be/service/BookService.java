package com.vn.bookstore_be.service;

import com.vn.bookstore_be.model.Book;
import com.vn.bookstore_be.repository.BookRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Page<Book> getBooks(int page, int size, Sort sort) {
        Pageable pageable = PageRequest.of(page, size, sort);
        return bookRepository.findAll(pageable);
    }

    public Book getBook(long bookId) {
        return bookRepository.findById(bookId).orElse(null);
    }

    public Page<Book> searchBookByName(int page, int size, Sort sort, String keyword) {
        Pageable pageable = PageRequest.of(page, size, sort);
        return bookRepository.findByBookNameContainingIgnoreCase(keyword, pageable);
    }
}
