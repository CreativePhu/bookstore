package com.vn.bookstore_be.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long userId;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "password")
    @JsonIgnore
    private String password;

    @Column(name = "phone", unique = true,  nullable = true)
    private String phone;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "active")
    private boolean active;

    @Column(name = "created_date")
    private LocalDateTime createdDate;

    @Column(name = "updated_date")
    private LocalDateTime updatedDate;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> roles;

    public void addRole(Role role) {
        if(roles == null){
            roles = new ArrayList<>();
            roles.add(role);
        } else {
            roles.add(role);
        }
    }
}
