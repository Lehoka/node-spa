export class PostsService {

    constructor(postsRepository, commentsRepository) {
        this.postsRepository = postsRepository,
            this.commentsRepository = commentsRepository
    }

    getAllPosts() {
        return this.postsRepository.getAllPosts()
    }

    getPostById(postId) {
        return this.postsRepository.getPostById(postId)
    }

    getCommentsForPost(postId) {
        return this.commentsRepository.getCommentsForPost(postId)
    }

    getPostsByTag(tag) {
        return this.postsRepository.getPostsByTag(tag)
    }

}