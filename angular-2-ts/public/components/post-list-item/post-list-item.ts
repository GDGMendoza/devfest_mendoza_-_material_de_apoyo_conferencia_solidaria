import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';


import {Component, View} from 'angular2/angular2';

interface IPostListItem {
	_title: string;
	_description: string;
	_id: number;
}

@Component({
	selector: 'post-list-item',
	properties: ['title', 'description', 'id']
})
@View({
	templateUrl: 'components/post-list-item/template.html'
})
class PostListItem implements IPostListItem {
	
	/*
		To avoid infinite loop, we prefix with '_'
	*/
	_description;
	_id;
	_title;
	
	constructor(){
		console.log('post list item', this);
	}
	
	get description(){
		return this._description;
	}
	
	get id(){
		return this._id;
	}
	
	get title(){
		return this._title;
	}
	
	set description(description: string) {
		console.log('description', description);
		this._description = description;
	}
	
	set id(id: string) {
		this._id = id;
	}
	
	set title(title: string) {
		this._title = title;
	}
	
}

export {PostListItem};