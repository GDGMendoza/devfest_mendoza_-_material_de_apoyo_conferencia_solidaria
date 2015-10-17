/// <reference path="../../../typings/angular2/angular2.d.ts"/>
/// <reference path="../../../typings/angular2/http.d.ts"/>

import {Http, Response} from "angular2/http";

class PostService {

  http: Http;
	
	constructor(http: Http) {
		this.http = http;
	}
	
	getPostList() {
		
		return new Promise(function (resolve, rejected) {
			
			this.http.request("http://192.168.20.202:3050/post")
				.toRx()
				.subscribe(function (res: Response) {
				  resolve(res.json());	
				}, function (res: Response) {
					rejected(res.json());
				});
		});
		
	}

}

export {PostService};