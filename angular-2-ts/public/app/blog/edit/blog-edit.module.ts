/// <reference path="../../../../typings/project/project.d.ts" />

import {
	Component, 
	View,
	Inject
} from 'angular2/angular2';

import {
	RouteParams, RouterLink
} from 'angular2/router';

import {
	BlogHeader
} from 'app/blog/blog-header';

import {
	PostService
} from 'components/components';

@Component({
	selector: 'blog-edit'
})
@View({
	templateUrl: 'app/blog/edit/template.html',
	directives: [
		BlogHeader, RouterLink
	],
	styleUrls: [
		'app/blog/detail/blog-detail.module.scss', 'app/blog/edit/blog-edit.module.scss', 'components/card/card.scss'
	]
})
export class BlogEdit {
	
	post = {};
	
	constructor (@Inject(PostService) postService: PostService, @Inject(RouteParams) params: RouteParams) {
		
		var self = this;
		
		var id = params.get('id');
		
		postService.getPost(id).then(function (post) {
			self.post = post;
		});
		
	}
	
}