INSERT INTO `role` (role_name)
VALUES ("USER"), ("ADMIN");

INSERT INTO `user` (user_name, password, full_name, phone, email, active, created_date, updated_date)
VALUES ("phutot1111", "$2a$12$bquKKKcvECK.AFANG0ULEuMMW4dgsbKaAOSW7EkGbkzjZD0UuC3Im", "Ngô Thiên Phú", "0348191482", "phutot2322@gmail.com", 1, "2024-02-02", "2024-02-02");

INSERT INTO user_role (role_id, user_id)
VALUES (1, 1);