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