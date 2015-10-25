/// <reference path="../../../typings/project/project.d.ts"/>

import {Inject, Injectable, provide} from "angular2/angular2";
import {Headers, Http, Response} from "angular2/http";

@Injectable()
export class PostService implements project.IPostService {

	defaultHeaders: Headers;
	
	constructor (@Inject(Http) public http: Http) {
		this.defaultHeaders = new Headers;
		this.defaultHeaders.append('Content-Type', 'application/json');
	}
	
	createPost (post) {
		return new Promise((resolve, reject) => {
			this.http.post(`http://localhost:3002/post`, JSON.stringify(post), {headers: this.defaultHeaders})
				.subscribe(function (res: Response) {
				  resolve(res.json());	
				}, function (res: Response) {
					reject(res);
				});
		 });		
	}
	
	deletePost (id) {
		return new Promise((resolve, reject) => {
			this.http.delete(`http://localhost:3002/post/${id}`)
				.subscribe(function (res: Response) {
				  resolve(res.json());	
				}, function (res: Response) {
					reject(res);
				});
		 });
	}
	
	getPost (id) {
		return new Promise((resolve, reject) => {
			this.http.get(`http://localhost:3002/post/${id}`)
				.subscribe(function (res: Response) {
				  resolve(res.json());	
				}, function (res: Response) {
					reject(res);
				});
		 });
	}
	
	getPostList () {
		return new Promise((resolve, reject) => {
			this.http.request(`http://localhost:3002/post`)
				.subscribe(function (res: Response) {
				  resolve(res.json());	
				}, function (res: Response) {
					reject(res);
				});
		});
	}

	updatePost (post) {
		return new Promise((resolve, reject) => {
			this.http.put(`http://localhost:3002/post/${post.PostID}`, JSON.stringify(post), {headers: this.defaultHeaders})
				.subscribe(function (res: Response) {
				  resolve(res.json());	
				}, function (res: Response) {
					reject(res);
				});
		 });		
	}
	
}

export var postServiceInjectables: Array<any> = [
  provide(PostService, {useClass: PostService})
];