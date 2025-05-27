package com.example.TweetManager.Repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TweetManager.Entity.Tweet;

@Repository
public interface TweetRepo extends JpaRepository<Tweet, Long> {
     List<Tweet> findByUser(com.example.TweetManager.Entity.User user);
}
