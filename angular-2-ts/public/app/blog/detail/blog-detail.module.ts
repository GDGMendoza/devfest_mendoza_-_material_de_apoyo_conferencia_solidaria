/// <reference path="../../../../typings/project/project.d.ts" />

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
	
	constructor (@Inject(PostService) public postService: PostService, @Inject(RouteParams) params: RouteParams, @Inject(Router) public router: Router) {
		
		var id = params.get('id');
		
		postService.getPost(id).then(post => this.post = post);
	}
	
	deletePost () {
		this.postService.deletePost(this.post.PostID).then(() => {
			this.router.navigate(['/BlogList']);
		}).catch(e => console.error('e', e));
	}
	
}