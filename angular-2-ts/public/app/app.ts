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
	BlogList
} from 'app/blog/list/blog-list.module.ts?';

import {
	BlogCreate
} from 'app/blog/create/blog-create.module.ts?';

import {
	BlogDetail
} from 'app/blog/detail/blog-detail.module.ts?';

import {
	BlogEdit
} from 'app/blog/edit/blog-edit.module.ts?';

/*

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('blog.list', {
        url: '/',
        templateUrl: 'app/blog/list/list.html',
        controller: 'PostListController',
        controllerAs: 'PostList'
      })
      .state('blog.create', {
        url: '/create',
        templateUrl: 'app/blog/form/form.html',
        controller: 'PostCreateController',
        controllerAs: 'PostCreate'
      })
      .state('blog.detail', {
        url: '/:id',
        templateUrl: 'app/blog/detail/detail.html',
        controller: 'PostDetailController',
        controllerAs: 'PostDetail'
      })
      .state('blog.edit', {
        url: '/:id/edit',
        templateUrl: 'app/blog/form/form.html',
        controller: 'PostEditController',
        controllerAs: 'PostEdit'
      });


 */

@RouteConfig([
	{path: '/', component: BlogList, as: 'blog-list'},
	{path: '/create', component: BlogCreate, as: 'blog-create'},
	{path: '/:id', component: BlogDetail, as: 'blog-detail'},
	{path: '/:id/edit', component: BlogEdit, as: 'blog-edit'}
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