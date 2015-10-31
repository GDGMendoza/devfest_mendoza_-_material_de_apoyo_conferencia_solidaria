/// <reference path="../../../../typings/tsd.d.ts" />

import {
	Component, 
	View,
	Inject,
	FORM_DIRECTIVES
} from 'angular2/angular2';

import {
	RouteParams, Router, RouterLink
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
		BlogHeader, RouterLink, FORM_DIRECTIVES
	],
	styleUrls: [
		'app/blog/detail/blog-detail.module.scss', 'app/blog/edit/blog-edit.module.scss', 'styles/buttons.scss', 'styles/card.scss'
	]
})
export class BlogEdit {
	
	post: project.IPost = {
		PostCategory: '',
		PostText: '',
		PostTitle: ''
	};
	
	postService: project.PostService;
	
	constructor (@Inject(PostService) postService: PostService, @Inject(RouteParams) params: RouteParams, @Inject(Router) public router: Router) {
		
		this.postService = postService;
		
		var id = parseInt(params.get('id'));
		
		this.postService.getPost(id).subscribe(post => this.post = post);
	}
	
	updatePost () {
		this.postService.updatePost(this.post).subscribe(() =>
			this.router.navigate(['/BlogDetail', {id: this.post.PostID}])
		, e => console.error('e', e));
	}
	
}