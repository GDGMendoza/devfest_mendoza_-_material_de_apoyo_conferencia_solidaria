/// <reference path="../jspm_packages/npm/angular2@2.0.0-alpha.44/angular2.d.ts"/>

import {
	bootstrap,
	Component,
	View
} from 'angular2/angular2';

import {
	HTTP_PROVIDERS
} from "angular2/http";

import {
	ROUTER_PROVIDERS,
	Router,
	RouteConfig, 
	RouterLink, 
	RouterOutlet
} from 'angular2/router';

import { 
	locationInjectables 
} from 'common/location';

import { 
	shadowDomInjectables 
} from 'common/shadow_dom'; // custom injectable that checks if ShadowDom is available to inject

import {
	BlogList
} from 'app/blog/list/blog-list.module';

import {
	BlogCreate
} from 'app/blog/create/blog-create.module';

import {
	BlogDetail
} from 'app/blog/detail/blog-detail.module';

import {
	BlogEdit
} from 'app/blog/edit/blog-edit.module';

import {backendInjectables} from '../components/components';

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
		RouterLink,
		RouterOutlet
	],
	styleUrls: [
		'app/app.scss'
	]
})
class App {

}

bootstrap(App, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	backendInjectables,
	locationInjectables,
	shadowDomInjectables
])
.then(function(message) {
	console.log('app success', message);
})
.catch(function(message) {
	console.log('app error', message);
});