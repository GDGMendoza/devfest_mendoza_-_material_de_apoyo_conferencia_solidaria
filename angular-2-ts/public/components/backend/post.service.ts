/// <reference path="../../../typings/tsd.d.ts"/>

import {Inject, Injectable, provide} from "angular2/angular2";
import {Headers, Http, Response} from "angular2/http";

@Injectable()
export class PostService implements project.PostService {

	defaultHeaders: Headers;
	
	constructor (@Inject(Http) public http: Http) {
		this.defaultHeaders = new Headers();
		this.defaultHeaders.append('Content-Type', 'application/json');
	}
	
	createPost (post) {
		return this.http.post(`http://localhost:3002/post`, JSON.stringify(post), {headers: this.defaultHeaders})
			.map(res => res.json());
	}
	
	deletePost (id) {
		return this.http.delete(`http://localhost:3002/post/${id}`);
	}
	
	getPost (id) {
		return this.http.get(`http://localhost:3002/post/${id}`)
			.map(res => res.json());
	}
	
	getPostList () {
		return this.http.request(`http://localhost:3002/post`)
			.map(res => res.json());
	}

	updatePost (post) {
		return this.http.put(`http://localhost:3002/post/${post.PostID}`, JSON.stringify(post), {headers: this.defaultHeaders})
			.map(res => res.json());
	}
	
}

export var postServiceInjectables: Array<any> = [
  provide(PostService, {useClass: PostService})
];