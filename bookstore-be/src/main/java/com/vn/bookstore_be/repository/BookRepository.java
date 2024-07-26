package com.vn.bookstore_be.repository;

import com.vn.bookstore_be.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    public Page<Book> findByBookNameContainingIgnoreCase (String bookName, Pageable pageable);

}
