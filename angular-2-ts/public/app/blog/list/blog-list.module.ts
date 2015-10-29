/// <reference path="../../../../typings/tsd.d.ts" />

import {
	Component, 
	View,
	NgFor,
	Inject
} from 'angular2/angular2';

import {PostListItem, PostService} from 'components/components';

import {
	BlogHeader
} from 'app/blog/blog-header';

@Component({
	selector: 'blog-list'
})
@View({
	templateUrl: 'app/blog/list/template.html',
	directives: [
		BlogHeader,
		PostListItem,
		NgFor
	],
	styles: [`
	.articles-container {
		position: relative;
    top: -12rem;
	}
	`]
})
export class BlogList {
	
	postList: Array<project.IPost> = [];
	
	postService: project.PostService;
	
	constructor (@Inject(PostService) postService: PostService) {

		this.postService = postService;

		this.postService.getPostList().subscribe(res =>
			this.postList = res
		, e => console.error('e', e));
	}
}