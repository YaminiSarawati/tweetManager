import { Component, OnInit } from '@angular/core';
import { TweetService }      from '../tweet.service';
import { Tweet }             from '../../shared/models/tweet.model';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html'
})
export class TweetListComponent implements OnInit {
  tweets: Tweet[] = [];

  constructor(private tweetService: TweetService) {}

  ngOnInit() {
    this.tweetService.getTweets().subscribe(data => this.tweets = data);
  }
}
