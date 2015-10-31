import {App} from 'base/app/app.ts';

describe ('App', () => {
	
	it('can be instantiated', () => {
		expect(new App() instanceof App).toBeTruthy();
	});
	
});