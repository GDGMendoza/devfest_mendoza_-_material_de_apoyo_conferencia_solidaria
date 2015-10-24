/// <reference path="../../../../typings/angular2/angular2.d.ts"/>

import {
	Component, 
	View
} from 'angular2/angular2';

import {
	BlogHeader
} from 'app/blog/blog-header';

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
class BlogDetail {

	post = {
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		title: 'Post Title'
	};
	
}

export {BlogDetail};