import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetListComponent }   from './tweet-list/tweet-list.component';
import { NewTweetComponent }    from './new-tweet/new-tweet.component';
import { AuthGuard }            from '../auth/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: TweetListComponent, canActivate: [AuthGuard] },
  { path: 'new',       component: NewTweetComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TweetRoutingModule { }
