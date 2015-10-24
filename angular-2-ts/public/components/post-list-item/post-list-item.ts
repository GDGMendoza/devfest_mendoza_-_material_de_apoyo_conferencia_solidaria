import {Component, View} from 'angular2/angular2';

import {RouterLink} from 'angular2/router';

interface IPostListItem {
	PostID: number;
	PostDate: string;
	PostTitle: string;
	PostText: string;
}

@Component({
	selector: 'post-list-item',
	inputs: ['post']
})
@View({
	templateUrl: 'components/post-list-item/template.html',
	styleUrls: [
		'components/post-list-item/post-list-item.scss'
	],
	directives: [RouterLink]
})
export class PostListItem implements IPostListItem {
	
	PostID;
	PostDate;
	PostTitle;
	PostText;
	
	set post (post: IPostListItem) {
		this.PostID = post.PostID;
		this.PostDate = post.PostDate;
		this.PostTitle = post.PostTitle;
		this.PostText = post.PostText;
	}
	
}