import express from 'express'
import { postsService } from '../../services/index.js'

export const tagsRouter = express.Router()

tagsRouter.get('/:name', (req, res, next) => {
    const { name: tag } = req.params

    postsService.getPostsByTag(tag)
        .then(posts => { res.json({ data: posts }) })
        .catch(next)
})