import path from 'path'
import fs from 'fs/promises'

export class CommentsRepository {

    constructor(filePath, fileName) {
        const projectRoot = process.cwd()
        this.filePath = path.resolve(projectRoot, filePath, fileName)
    }

    async getCommentsForPost(id) {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8')
            const comments = JSON.parse(data)

            return comments.filter(comment => comment.post_id === id)
                           .map(({ post_id, ...rest }) => rest)
        } catch (err) {

            if (err.code === 'ENOENT') {
                throw new Error(`file-not-found.unknown-file-path[${this.filePath}]`)
            }

            console.error('error-reading-comments:', err)
            return []
        }
    }

}