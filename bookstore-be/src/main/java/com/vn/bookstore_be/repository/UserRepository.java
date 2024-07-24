package com.vn.bookstore_be.repository;

import com.vn.bookstore_be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    User findByUserName(String username);

}
