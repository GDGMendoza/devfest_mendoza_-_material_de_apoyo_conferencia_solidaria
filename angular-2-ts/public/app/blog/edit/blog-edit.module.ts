/// <reference path="../../../../typings/angular2/angular2.d.ts"/>

import {
	Component, 
	View
} from 'angular2/angular2';

import {
	BlogHeader
} from 'app/blog/blog-header';

@Component({
	selector: 'blog-edit'
})
@View({
	templateUrl: 'app/blog/edit/template.html',
	directives: [
		BlogHeader
	]
})
class BlogEdit {
	
}

export {BlogEdit};