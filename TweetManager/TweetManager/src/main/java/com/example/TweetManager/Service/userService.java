package com.example.TweetManager.Service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.TweetManager.Entity.User;  // your entity
import com.example.TweetManager.Repository.userRepo;

@Service
public class userService {

    private final userRepo repo;

    public userService(userRepo repo) {
        this.repo = repo;
    }

    // Register method should take User entity as input, not String
    public User register(User user) {
        return repo.save(user);
    }

    // Delegate to repository to find user by username
    public Optional<User> findByUsername(String username) {
        return repo.findByUsername(username);
    }
}
