import { Post } from '../model/post.model';

export class Feed {
  constructor(public posts: Post[]){}
}
