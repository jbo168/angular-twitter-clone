import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
