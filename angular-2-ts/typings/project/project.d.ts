/// <reference path="../rx/rx.d.ts" />

declare module project {

	interface IPost {
		PostID?: number;
		PostDate?: string;
		PostTitle: string;
		PostText: string;
		PostCategory: string;
	}
	
	interface IPostID {
		PostID: number;
	}
	
	class PostService {
		createPost(post: IPost): Rx.Observable<IPostID>;
		deletePost(id: number): Rx.Observable<any>;
		getPost(id: number): Rx.Observable<IPost>;
		getPostList(): Rx.Observable<Array<IPost>>;
		updatePost(post: IPost): Rx.Observable<IPost>;
	}
	
}