/// <reference path="../../../../typings/angular2/angular2.d.ts"/>

import {
	Component, 
	View
} from 'angular2/angular2';

import {
	BlogHeader
} from 'app/blog/blog-header.ts?';

@Component({
	selector: 'blog-detail'
})
@View({
	templateUrl: 'app/blog/detail/template.html',
	directives: [
		BlogHeader
	]
})
class BlogDetail {
	
}

export {BlogDetail};