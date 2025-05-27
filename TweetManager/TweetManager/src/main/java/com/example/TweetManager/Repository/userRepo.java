package com.example.TweetManager.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TweetManager.Entity.User;  // Make sure this import is correct

@Repository
public interface userRepo extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
