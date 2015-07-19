import {Component, View} from 'angular2/angular2';

@Component({
	'selector': 'post-list'
})
@View({
	templateUrl: 'components/post-list/template.html'
})
class PostList {}

export {PostList};