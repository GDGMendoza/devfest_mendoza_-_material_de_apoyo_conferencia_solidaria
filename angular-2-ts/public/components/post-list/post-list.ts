import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';


import {Component, View, NgFor} from 'angular2/angular2';

@Component({
	selector: 'post-list'
})
@View({
	templateUrl: 'components/post-list/template.html',
	directives: [NgFor]
})
class PostList {
	postItem = {
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		title: 'Post Title'
	};
	
	postList = [];
	
	constructor(){
		this.postList = Array(5).fill(this.postItem);
	}
}

export {PostList};