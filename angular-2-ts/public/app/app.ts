//https://github.com/jspm/registry/issues/432
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';

import {
	bind, 
	bootstrap,
	Component, 
	View
} from 'angular2/angular2';

import {
	Router, 
	RouteConfig, 
	RouterLink, 
	RouterOutlet, 
	routerInjectables, 
	LocationStrategy, 
	HashLocationStrategy
} from 'angular2/router';

import {
	PostList
} from '../components/components.ts?';

@Component({
	selector: 'app',
	appInjector: []
})
@View({
	templateUrl: 'app/template.html',
	directives: [
		RouterLink,
		RouterOutlet
	]
})
@RouteConfig({
	path: '/', component: PostList, as: 'postList'
})
class App {}



bootstrap(App, [
	routerInjectables,
	bind(LocationStrategy).toClass(HashLocationStrategy)
])
.then(function(message){
	console.log('app success', message);
})
.catch(function(message){
	console.log('app error', message);
});