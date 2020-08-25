import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/model/post.model';
import { FeedService } from '../feed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {
  feed: Post[];

  constructor(private feedService: FeedService,
              private router: Router) { }

  ngOnInit(): void {
    this.feed = this.feedService.getFeed();
  }

}
