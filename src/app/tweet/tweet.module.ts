import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { NewTweetComponent } from './new-tweet/new-tweet.component';

@NgModule({
  imports: [
    CommonModule,
    TweetListComponent,
    NewTweetComponent,
  ],
})
export class TweetModule { }
