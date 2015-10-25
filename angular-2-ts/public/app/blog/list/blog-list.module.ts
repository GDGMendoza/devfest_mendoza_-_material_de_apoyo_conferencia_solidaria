/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.44/angular2.d.ts"/>

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
	
	postList = [];
	
	constructor (@Inject(PostService) postService: PostService) {
		var self = this;
		postService.getPostList().then(function (list) {
			self.postList = list;
		});
	}
}