/// <reference path="../../../../typings/angular2/angular2.d.ts"/>

import {
	Component, 
	View,
	Inject
} from 'angular2/angular2';

import {
	BlogHeader
} from 'app/blog/blog-header';

import {RouteParams} from 'angular2/router';

import {PostService} from 'components/components';

@Component({
	selector: 'blog-detail'
})
@View({
	templateUrl: 'app/blog/detail/template.html',
	directives: [
		BlogHeader
	],
	styleUrls: [
		'app/blog/detail/blog-detail.module.scss', 'components/card/card.scss'
	]
})
export class BlogDetail {

	post = {};
	
	constructor (@Inject(PostService) postService: PostService, @Inject(RouteParams) params: RouteParams) {
		
		var self = this;
		
		var id = params.get('id');
		
		postService.getPost(id).then(function (post) {
			self.post = post;
		});
		
	}
	
}