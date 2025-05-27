package com.example.TweetManager.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.TweetManager.Entity.User;
import com.example.TweetManager.Entity.Tweet;
import com.example.TweetManager.Service.TweetService;
import com.example.TweetManager.Service.userService;

@RestController
@RequestMapping("/api")
public class TweetController {

    private final TweetService tweetService;
    private final userService userService;

    public TweetController(TweetService tweetService, userService userService) {
        this.tweetService = tweetService;
        this.userService = userService;
    }

    @PostMapping("/save")
public Tweet postTweet(@PathVariable String username, @RequestBody Tweet tweet) {
    // Pass username string to setUser
    tweet.setUser(username);
    return tweetService.postTweet(tweet);
}

@GetMapping("/{username}")
public List<Tweet> getUserTweets(@PathVariable String username) {
    User user = userService.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
    return tweetService.getTweetsByUser(user);
}

    @GetMapping
    public List<Tweet> getAllTweets() {
        return tweetService.getAllTweets();
    }
}
