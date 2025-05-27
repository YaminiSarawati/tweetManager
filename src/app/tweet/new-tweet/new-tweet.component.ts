import { Component }          from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TweetService }       from '../tweet.service';
import { Router }             from '@angular/router';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html'
})
export class NewTweetComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tweetService: TweetService,
    private router: Router
  ) {
    this.form = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(280)]]
    });
  }

  onSubmit() {
    this.tweetService.createTweet(this.form.value).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
