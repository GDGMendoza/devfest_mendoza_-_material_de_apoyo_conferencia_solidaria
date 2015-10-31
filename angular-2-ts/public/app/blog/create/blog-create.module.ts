/// <reference path="../../../../typings/tsd.d.ts" />

import {
	Component, 
	View,
	Inject,
	FORM_DIRECTIVES
} from 'angular2/angular2';

import {
	Router, RouteParams, RouterLink
} from 'angular2/router';

import {
	PostService
} from 'components/components';

import {Response} from "angular2/http";

@Component({
	selector: 'blog-edit'
})
@View({
	templateUrl: 'app/blog/create/template.html',
	directives: [
		RouterLink, FORM_DIRECTIVES
	],
	styleUrls: [
		'app/blog/detail/blog-detail.module.scss', 'app/blog/edit/blog-edit.module.scss', 'styles/buttons.scss', 'styles/card.scss'
	]
})
export class BlogCreate {
	
	post: project.IPost = {
		PostTitle: '',
		PostText: '',
		PostCategory: ''
	};
	
	postService: project.PostService;
	
	constructor (@Inject(Router) public router: Router, @Inject(PostService) postService: PostService) {
		this.postService = postService;
	}
	
	createPost () {
		this.postService.createPost(this.post).subscribe(res =>
			this.router.navigate(['/BlogDetail', {id: res.PostID}])
		, e => console.error('e', e));
	}
	
}