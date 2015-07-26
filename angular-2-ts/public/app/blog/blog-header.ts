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