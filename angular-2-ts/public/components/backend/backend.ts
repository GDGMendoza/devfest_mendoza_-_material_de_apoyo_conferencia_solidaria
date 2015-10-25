import {postServiceInjectables} from "./post.service";

export * from "./post.service";

export var backendInjectables: Array<any> = [
  postServiceInjectables
];