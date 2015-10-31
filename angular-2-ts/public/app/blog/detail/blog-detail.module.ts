/// <reference path="../../../../typings/tsd.d.ts" />

import {
	Component, 
	View,
	Inject
} from 'angular2/angular2';

import {
	BlogHeader
} from 'app/blog/blog-header';

import {Router, RouteParams, RouterLink} from 'angular2/router';

import {PostService} from 'components/components';

@Component({
	selector: 'blog-detail'
})
@View({
	templateUrl: 'app/blog/detail/template.html',
	directives: [
		BlogHeader, RouterLink
	],
	styleUrls: [
		'app/blog/detail/blog-detail.module.scss', 'styles/buttons.scss', 'styles/card.scss'
	]
})
export class BlogDetail {

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
	
	deletePost () {
		this.postService.deletePost(this.post.PostID).subscribe(() => 
			this.router.navigate(['/BlogList'])
		, e => console.error('e', e));
	}
	
}