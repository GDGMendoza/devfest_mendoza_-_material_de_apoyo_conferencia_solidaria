/// <reference path="../../typings/angular2/angular2.d.ts"/>

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
	Http, httpInjectables
} from "angular2/http";

import {
	Router, 
	RouteConfig, 
	RouterLink, 
	RouterOutlet, 
	routerInjectables
} from 'angular2/router';

import { 
	locationInjectables 
} from 'common/location.ts?';

import { 
	shadowDomInjectables 
} from 'common/shadow_dom.ts?'; // custom injectable that checks if ShadowDom is available to inject

import {
	PostList
} from 'components/components.ts?';

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
	locationInjectables,
	shadowDomInjectables
])
.then(function(message){
	console.log('app success', message);
})
.catch(function(message){
	console.log('app error', message);
});