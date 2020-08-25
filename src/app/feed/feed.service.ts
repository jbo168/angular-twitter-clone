import { Injectable } from '@angular/core';
import { Post } from '../shared/model/post.model';

@Injectable()
export class FeedService {
  private feed: Post[] = [
    new Post('john', 'Test post 1'),
    new Post('john', 'Test post 2'),
    new Post('john', 'Test post 3'),
    new Post('john', 'Test post 4'),
    new Post('john', 'Test post 5'),
    new Post('john', 'Test post 6'),
    new Post('john', 'Test post 7'),
    new Post('john', 'Test post 8')
  ];


  getFeed() {
    return this.feed.slice();
  }
}
