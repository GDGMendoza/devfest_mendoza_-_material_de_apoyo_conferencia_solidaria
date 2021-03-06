/// <reference path="../../../typings/tsd.d.ts" />

import {
	Component, 
	View
} from 'angular2/angular2';

import {
	RouterLink
} from 'angular2/router';

@Component({
	selector: 'header'
})
@View({
	templateUrl: 'app/blog/header/header.html',
	directives: [
		RouterLink
	],
	styleUrls: [
		'app/blog/header/header.scss'
	]
})
export class Header {
	
}