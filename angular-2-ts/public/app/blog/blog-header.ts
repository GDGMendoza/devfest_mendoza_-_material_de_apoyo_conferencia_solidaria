/// <reference path="../../../typings/angular2/angular2.d.ts"/>

import {
	Component, 
	View
} from 'angular2/angular2';

import {
	RouterLink
} from 'angular2/router';

@Component({
	selector: 'blog-header'
})
@View({
	templateUrl: 'app/blog/blog-header.html',
	directives: [
		RouterLink
	],
	styleUrls: [
		'app/blog/blog-header.scss'
	]
})
class BlogHeader {
	
}

export {BlogHeader};