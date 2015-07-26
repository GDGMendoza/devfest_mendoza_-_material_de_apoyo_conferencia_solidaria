/// <reference path="../../../../typings/angular2/angular2.d.ts"/>

//https://github.com/jspm/registry/issues/432
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';

import {
	Component, 
	View
} from 'angular2/angular2';

import {
	BlogHeader
} from 'app/blog/blog-header.ts?';

import {
	PostList
} from 'components/post-list/post-list.ts?';

@Component({
	selector: 'blog-list'
})
@View({
	templateUrl: 'app/blog/list/template.html',
	directives: [
		BlogHeader,
		PostList
	]
})
class BlogList {
	
}

export {BlogList};