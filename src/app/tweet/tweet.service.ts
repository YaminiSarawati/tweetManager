import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet }      from '../shared/models/tweet.model';
import { environment } from '../../environments/environment';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(`${this.apiUrl}/user`, {
      headers: this.auth.getAuthHeaders()
    });
  }

  createTweet(tweet: Partial<Tweet>): Observable<Tweet> {
    return this.http.post<Tweet>(
      `${this.apiUrl}/save`,
      tweet,
      { headers: this.auth.getAuthHeaders() }
    );
  }
}
