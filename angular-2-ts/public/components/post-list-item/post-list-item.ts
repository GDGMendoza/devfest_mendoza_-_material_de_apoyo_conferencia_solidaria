/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgStyle} from 'angular2/angular2';

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
	directives: [NgStyle, RouterLink]
})
export class PostListItem implements project.IPost {
	
	PostID;
	PostDate;
	PostTitle;
	PostText;
	PostCategory;
	PostURL = "https://g-design.storage.googleapis.com/production/v5/assets/renditions/wallpaper-1-1240.jpg";
	
	set post (post: project.IPost) {
		this.PostID = post.PostID;
		this.PostDate = post.PostDate;
		this.PostTitle = post.PostTitle;
		this.PostText = post.PostText;
		this.PostCategory = post.PostCategory;
	}
	
}