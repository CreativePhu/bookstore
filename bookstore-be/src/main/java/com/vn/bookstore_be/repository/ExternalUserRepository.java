package com.vn.bookstore_be.repository;

import com.vn.bookstore_be.model.ExternalUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExternalUserRepository extends JpaRepository<ExternalUser, Long>{
}
