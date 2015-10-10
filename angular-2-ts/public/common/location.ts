import { bind } from 'angular2/angular2';
import { 
 LocationStrategy, 
 HashLocationStrategy 
} from 'angular2/router';

export const locationInjectables: Array<any> = [
	bind(LocationStrategy).toClass(HashLocationStrategy)
];