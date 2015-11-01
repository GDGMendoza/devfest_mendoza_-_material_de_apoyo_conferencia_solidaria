/// <reference path="../../typings/tsd.d.ts" />

import {
	Component,
	View
} from 'angular2/angular2';

import {
	RouteConfig,
	RouterOutlet
} from 'angular2/router';

import {
	Blog
} from './blog/blog.module';

@RouteConfig([{path: '/blog/...', component: Blog, as: 'Blog'}])
@Component({
	selector: 'app'
})
@View({
	template: '<router-outlet></router-outlet>',
	directives: [
		RouterOutlet
	],
	styleUrls: [
		'app/app.scss'
	]
})
export class App {
	
}