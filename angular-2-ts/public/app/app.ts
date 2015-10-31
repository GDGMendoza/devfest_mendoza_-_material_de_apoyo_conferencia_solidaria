/// <reference path="../../typings/tsd.d.ts" />

import {
	Component,
	View
} from 'angular2/angular2';

import {
	RouteConfig, 
	RouterLink, 
	RouterOutlet
} from 'angular2/router';

import {Header} from './header/header';

import {
	BlogCreate,
	BlogDetail,
	BlogEdit,
	BlogList
} from './blog/blog';

@RouteConfig([
	{path: '/', component: BlogList, as: 'BlogList'},
	{path: '/create', component: BlogCreate, as: 'BlogCreate'},
	{path: '/:id', component: BlogDetail, as: 'BlogDetail'},
	{path: '/:id/edit', component: BlogEdit, as: 'BlogEdit'}
])
@Component({
	selector: 'app'
})
@View({
	templateUrl: 'app/template.html',
	directives: [
		Header,
		RouterLink,
		RouterOutlet
	],
	styleUrls: [
		'app/app.scss'
	]
})
export class App {

}