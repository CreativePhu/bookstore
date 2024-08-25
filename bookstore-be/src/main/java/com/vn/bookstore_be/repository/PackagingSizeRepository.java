package com.vn.bookstore_be.repository;

import com.vn.bookstore_be.model.PackagingSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackagingSizeRepository extends JpaRepository<PackagingSize, Long> {
}
