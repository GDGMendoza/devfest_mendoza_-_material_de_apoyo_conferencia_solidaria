//https://github.com/jspm/registry/issues/432
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';


import {
	bootstrap,
	Component, 
	View
} from 'angular2/angular2';

import {
	bind, Injectable
} from "angular2/di";

import {
	Http, httpInjectables
} from "angular2/http";

import {
	ShadowDomStrategy, 
	NativeShadowDomStrategy
} from "angular2/render";

import {
	Router, 
	RouteConfig, 
	RouterLink, 
	RouterOutlet, 
	routerInjectables
} from 'angular2/router';

import {
	PostList
} from '../components/components.ts?';


@RouteConfig([
	{path: '/', component: PostList, as: 'post-list'}
])
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
class App {
	constructor(router: Router){
		
	}
}



bootstrap(App, [
	routerInjectables,
	bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)
])
.then(function(message){
	console.log('app success', message);
})
.catch(function(message){
	console.log('app error', message);
});