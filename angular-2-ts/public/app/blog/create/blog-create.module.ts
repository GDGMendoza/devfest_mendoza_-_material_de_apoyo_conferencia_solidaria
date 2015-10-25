/// <reference path="../../../../typings/project/project.d.ts" />

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
	BlogHeader
} from 'app/blog/blog-header';

import {
	PostService
} from 'components/components';

@Component({
	selector: 'blog-edit'
})
@View({
	templateUrl: 'app/blog/create/template.html',
	directives: [
		BlogHeader, RouterLink, FORM_DIRECTIVES
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
	
	constructor (@Inject(Router) public router: Router, @Inject(PostService) public postService: PostService) {
		
	}
	
	createPost () {
		this.postService.createPost(this.post).then((response: project.IPostID) => {
			this.router.navigate(['/BlogDetail', {id: response.PostID}]);
		}).catch(function (e) {
			console.error('e', e);
		});
	}
	
}