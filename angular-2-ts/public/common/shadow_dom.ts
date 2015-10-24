import { ShadowDomStrategy, NativeShadowDomStrategy } from 'angular2/render';
import { bind } from 'angular2/angular2';
import { document } from 'angular2/src/facade/browser';


// se supone que el navegador que estoy usando soporta ShadowDom.... 
// pero no renderiza el contenido de la vista, por lo cual por el momento lo fuerzo a false
//export const isNativeShadowDOMSupported: boolean = Boolean(document && document.body && document.body.createShadowRoot); // http://caniuse.com/#feat=shadowdom
export const isNativeShadowDOMSupported = false;

export const shadowDomInjectables: Array<any> = !isNativeShadowDOMSupported ? [] : [
	bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy)
];