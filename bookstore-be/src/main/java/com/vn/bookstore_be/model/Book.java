package com.vn.bookstore_be.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private long bookId;

    @Column(name = "book_name")
    private String bookName;

    @Column(name = "book_description")
    private String bookDescription;

    @Column(name = "book_price")
    private double bookPrice;

    @Column(name = "book_discount")
    private double bookDiscount;

    @Column(name = "book_quantity")
    private int bookQuantity;

    @Column(name = "book_publication_year")
    private LocalDateTime bookPublicationYear;

    @Column(name = "book_weight")
    private double bookWeight;

    @Column(name = "book_pages")
    private int bookPages;

    @OneToOne
    @JoinColumn(name = "packaging_size_id")
    private PackagingSize bookPackagingSize;

    @ManyToMany(mappedBy = "books")
    private List<Language> bookLanguages;

    @ManyToMany
    @JoinTable(
            name = "book_author",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id")
    )
    private List<Author> bookAuthors;

    @ManyToMany
    @JoinTable(
            name = "book_category",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private List<Category> bookCategories;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher bookPublisher;

    @OneToMany(mappedBy = "book")
    private List<Image> bookImages;
}

