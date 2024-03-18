package com.example.Rubrics.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Rubrics.entity.Account;



@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
  Optional<Account> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
  
  Optional<Account> findByEmailAndVerificationCode(String email, String verificationCode);

Optional<Account> findByEmail(String email);
  

}
