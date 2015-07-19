// IMPORTANTE en vez de instalar jspm, instalar jspm@beta o tira un error en el forEach :/

//https://github.com/jspm/registry/issues/432
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';

import * as angular from 'angular2/angular2';
import {
	Router, 
	RouteConfig, 
	RouterLink, 
	RouterOutlet, 
	routerInjectables, 
	LocationStrategy, 
	HashLocationStrategy
} from 'angular2/router';

var App = angular.Component({
	selector: 'app',
	appInjector: []
})
.View({
	templateUrl: 'app/template.html',
	directives: [
		RouterLink,
		RouterOutlet
	]
})
.Class({
	constructor: [function(){
		
	}]
});

var PostList = angular.Component({
	'selector': 'post-list'
})
.View({
	template: 'post list view ------ maybe ----- next time '
})
.Class({
	constructor: [function(){
		
	}]
});

RouteConfig({
	path: '/', component: PostList, as: 'postList'
})(App);

angular.bootstrap(App, [
	routerInjectables,
	angular.bind(LocationStrategy).toClass(HashLocationStrategy)
])
.then(
	function(message){
		console.log('app success', message);
	}
)
.catch(function(message){
	console.log('app error', message);
});