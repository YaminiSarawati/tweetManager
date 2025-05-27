package com.example.TweetManager.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.TweetManager.Entity.Tweet;
import com.example.TweetManager.Entity.User;
import com.example.TweetManager.Repository.TweetRepo;

@Service
public class TweetService {

    private final TweetRepo repo;

    public TweetService(TweetRepo repo) {
        this.repo = repo;
    }

    public Tweet postTweet(Tweet tweet) {
        return repo.save(tweet);
    }

    public List<Tweet> getTweetsByUser(User user) {
        return repo.findByUser(user);
    }

    public List<Tweet> getAllTweets() {
        return repo.findAll();
    }
}
