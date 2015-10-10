/// <reference path="../../typings/angular2/angular2.d.ts"/>

import {
	bind,
	bootstrap,
	Component, 
	View
} from 'angular2/angular2';
/*
import {
	Http, httpInjectables
} from "angular2/http";
*/
import { 
	routerBindings,
	ROUTER_BINDINGS,
	Router,
	RouteConfig, 
	RouterLink, 
	RouterOutlet
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

import {PostService} from 'components/components.ts?';

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
	]
})
class App {
	constructor() {
		
	}
}

bootstrap(App, [
	locationInjectables,
	shadowDomInjectables,
	routerBindings(App)
])
.then(function(message){
	console.log('app success', message);
})
.catch(function(message){
	console.log('app error', message);
});