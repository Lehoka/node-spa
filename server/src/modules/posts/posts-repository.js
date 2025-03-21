import path from 'path'
import fs from 'fs/promises'

export class PostsJsonRepository {

    constructor(filePath, fileName) {
        const projectRoot = process.cwd()
        this.filePath = path.resolve(projectRoot, filePath, fileName)
    }

    async getAllPosts() {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8')
            return JSON.parse(data)
        } catch (err) {

            if (err.code === 'ENOENT') {
                throw new Error(`file-not-found.unknown-file-path[${this.filePath}]`)
            }

            console.error('error-reading-posts:', err)
            return []
        }
    }

    async getPostById(id) {
        const posts = await this.getAllPosts()
        return posts.find(post => post.id === id)
    }

    async getPostsByTag(tag) {
        const posts = await this.getAllPosts()
        return posts.filter(post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase()))
    }

}