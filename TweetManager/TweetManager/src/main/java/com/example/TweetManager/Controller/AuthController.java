package com.example.TweetManager.Controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.TweetManager.Entity.User;
import com.example.TweetManager.Service.userService;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final userService userService;

    public AuthController(userService userService) {
        this.userService = userService;
    }

   @PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody User user) {
    User savedUser = userService.register(user);
    return ResponseEntity.ok(savedUser);
}
@GetMapping("/user/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable String username) {
        Optional<User> user = userService.findByUsername(username);
        return user.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
