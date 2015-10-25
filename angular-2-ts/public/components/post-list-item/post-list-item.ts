/// <reference path="../../../typings/project/project.d.ts"/>

import {Component, View} from 'angular2/angular2';

import {RouterLink} from 'angular2/router';

@Component({
	selector: 'post-list-item',
	inputs: ['post']
})
@View({
	templateUrl: 'components/post-list-item/template.html',
	styleUrls: [
		'components/post-list-item/post-list-item.scss', 'styles/buttons.scss', 'styles/card.scss'
	],
	directives: [RouterLink]
})
export class PostListItem implements project.IPost {
	
	PostID;
	PostDate;
	PostTitle;
	PostText;
	
	set post (post: project.IPost) {
		this.PostID = post.PostID;
		this.PostDate = post.PostDate;
		this.PostTitle = post.PostTitle;
		this.PostText = post.PostText;
	}
	
}