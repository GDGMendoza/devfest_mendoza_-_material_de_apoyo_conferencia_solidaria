import {bootstrap} from 'angular2/angular2';

import {HTTP_PROVIDERS} from 'angular2/http';

import {ROUTER_PROVIDERS} from 'angular2/router';

import {locationInjectables} from '../common/location';

import {shadowDomInjectables} from '../common/shadow_dom'; // custom injectable that checks if ShadowDom is available to inject

import {backendInjectables} from '../components/components';

import {App} from './app';

bootstrap(App, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	backendInjectables,
	locationInjectables,
	shadowDomInjectables
])
.then(function(message) {
	console.log('app success', message);
})
.catch(function(message) {
	console.log('app error', message);
});