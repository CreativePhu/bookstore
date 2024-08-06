INSERT INTO `role` (role_name)
VALUES ("USER"),
       ("ADMIN");

INSERT INTO `user` (password, full_name, phone, email, active, created_date, updated_date)
VALUES ("$2a$12$bquKKKcvECK.AFANG0ULEuMMW4dgsbKaAOSW7EkGbkzjZD0UuC3Im", "Ngô Thiên Phú", "0348191482",
        "phutot2322@gmail.com", 1, "2024-02-02", "2024-02-02");

INSERT INTO user_role (role_id, user_id)
VALUES (1, 1);

insert into publisher (publisher_id, publisher_name)
values (1, "Kim Đồng");

insert into book(book_id, book_description, book_discount, book_name, book_price, book_quantity, publisher_id)
values (1, "Book 1", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (2, "Book 2", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (3, "Book 3", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (4, "Book 4", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (5, "Book 5", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (6, "Book 6", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (7, "Book 7", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (8, "Book 8", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (9, "Book 9", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (10, "Book 10", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (11, "Book 11", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (12, "Book 12", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (13, "Book 13", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (14, "Book 14", 0, "Đắc Nhân Tâm", "120000", 100, 1),
       (15, "Book 15", 0, "Đắc Nhân Tâm", "120000", 100, 1);

insert into image(image_id, image_url, main_image, book_id)
values (1, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        1),
       (2, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        2),
       (3, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        3),
       (4, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        4),
       (5, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        5),
       (6, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        6),
       (7, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        7),
       (8, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        8),
       (9, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        9),
       (10, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        10),
       (11, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        11),
       (12, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        12),
       (13, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        13),
       (14, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        14),
       (15, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 1,
        15);

insert into image(image_id, image_url, main_image, book_id)
values (16, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        1),
       (17, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        2),
       (18, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        3),
       (19, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        4),
       (20, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        5),
       (21, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        6),
       (22, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        7),
       (23, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        8),
       (24, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        9),
       (25, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        10),
       (26, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        11),
       (27, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        12),
       (28, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        13),
       (29, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        14),
       (30, "https://salt.tikicdn.com/cache/750x750/ts/product/8e/fd/8a/ab48fe6480d3ca4f32e32f9b43cb9fb0.jpg.webp", 0,
        15);