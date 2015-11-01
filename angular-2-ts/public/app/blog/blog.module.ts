import {BlogList} from './list/blog-list.module';

import {BlogCreate} from './create/blog-create.module';

import {BlogDetail} from './detail/blog-detail.module';

import {BlogEdit} from './edit/blog-edit.module';

import {Header} from './header/header';

import {
	Component,
	View
} from 'angular2/angular2';

import {
	RouteConfig,
	RouterOutlet
} from 'angular2/router';

@RouteConfig([
	{path: '/', component: BlogList, as: 'BlogList'},
	{path: '/create', component: BlogCreate, as: 'BlogCreate'},
	{path: '/:id', component: BlogDetail, as: 'BlogDetail'},
	{path: '/:id/edit', component: BlogEdit, as: 'BlogEdit'}
])
@Component({
	selector: 'blog'
})
@View({
	template: `
	blog
		<header></header>
		<router-outlet></router-outlet>
	`,
	directives: [
		Header,
		RouterOutlet
	]
})
export class Blog {
	
}