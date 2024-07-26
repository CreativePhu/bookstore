package com.vn.bookstore_be.dto;

import com.vn.bookstore_be.model.Book;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {
    private List<Book> books;
    private int totalPages;
    private long totalElements;
    private int currentPage;
    private int pageSize;
}
