import express from 'express'
import { postsService } from '../../services/index.js'
import { wronglyTypedPathParamError, preconditionFailedError } from './model.js'
export const postsRouter = express.Router()

postsRouter.get('/', (_req, res, next) => {
    postsService.getAllPosts()
        .then(posts => { res.json({ data: posts }) })
        .catch(next)
})

postsRouter.get('/:id', (req, res, next) => {
    const { id } = req.params

    if (typeof +id !== 'number' || isNaN(+id)) {
        throw wronglyTypedPathParamError('id')
    }

    if (!Number.isInteger(+id) || +id < 1) {
        throw preconditionFailedError('id', 'must-be-a-positive-integer')
    }

    postsService.getPostById(+id)
        .then(post => {
            if (!post) {
                res.status(400).json({ error: `post-not-found.unknown-post-id[${id}]` })
            } else {
                res.json({ data: post })
            }
        }).catch(next)
})

postsRouter.get('/:id/comments', (req, res, next) => {
    const { id } = req.params

    if (typeof +id !== 'number' || isNaN(+id)) {
        throw wronglyTypedPathParamError('id')
    }

    if (!Number.isInteger(+id) || +id < 1) {
        throw preconditionFailedError('id', 'must-be-a-positive-integer')
    }

    postsService.getCommentsForPost(+id)
        .then(comments => { res.json({ data: comments }) })
        .catch(next)
})