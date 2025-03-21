import { REPOSITORY_PATH } from '../config.js'
import { CommentsRepository } from '../modules/posts/comments/comments-repository.js'
import { PostsJsonRepository } from '../modules/posts/posts-repository.js'
import { PostsService } from '../modules/posts/posts-service.js'

let services = undefined

export function createServices() {
    if (!services) {

        const postsRepository = new PostsJsonRepository(REPOSITORY_PATH, 'posts.json')
        const commentsRepository = new CommentsRepository(REPOSITORY_PATH, 'comments.json')
        const postsService = new PostsService(postsRepository, commentsRepository)

        services = { postsService }
    }
    return services
}


export const { postsService } = createServices()