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
	
	interface IPostService {
		createPost(post: IPost): Promise<IPostID>;
		deletePost(id: number): Promise<any>;
		getPost(id: number): Promise<IPost>;
		getPostList(): Promise<Array<IPost>>;
		updatePost(post: IPost): Promise<IPost>;
	}
	
}