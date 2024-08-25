package com.vn.bookstore_be.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@DiscriminatorValue("user")
public class User extends BaseUser {

    @Column(name = "user_password")
    @JsonIgnore
    private String userPassword;

    @Column(name = "user_status")
    private boolean userStatus;

    @Column(name = "user_created_date")
    private LocalDateTime userCreatedDate;

    @Column(name = "user_updated_date")
    private LocalDateTime userUpdatedDate;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> userRoles;

    public void addRole(Role role) {
        if(userRoles == null){
            userRoles = new ArrayList<>();
            userRoles.add(role);
        } else {
            userRoles.add(role);
        }
    }
}
