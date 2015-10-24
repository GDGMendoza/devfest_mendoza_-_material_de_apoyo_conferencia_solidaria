/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.44/angular2.d.ts"/>

import {Inject, Injectable, provide} from "angular2/angular2";
import {Http, Response} from "angular2/http";

@Injectable()
export class PostService {

	fakeList = [];
	
	constructor (@Inject(Http) public http: Http) {
		this.http = http;
		
		var lorem = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
		
		for (var i = 0; i < 10; i++) {
			this.fakeList.push({
				'PostTitle': 'The number ' + i,
				'PostText': i + lorem,
				'PostDate': new Date(),
				'PostID': String(i)
			});
		}
		
	}
	
	getPost (id) {
		
		var self = this;
		
		return new Promise(function (resolve, reject) {
			
			for (var i = 0; i < self.fakeList.length; i++) {
				var item = self.fakeList[i];
				if (item.PostID === id) {
					resolve(item);
					break;
				}
			}
			
		});
		
	}
	
	getPostList () {
		
		var self = this;
		
		return new Promise(function (resolve, reject) {
			
			resolve(self.fakeList);
			
			return;
			
			// give me a server :(
			this.http.request("http://192.168.20.202:3050/post")
				.toRx()
				.subscribe(function (res: Response) {
				  resolve(res.json());	
				}, function (res: Response) {
					reject(res.json());
				});
		});
		
	}

}

export var postServiceInjectables: Array<any> = [
  provide(PostService, {useClass: PostService})
];