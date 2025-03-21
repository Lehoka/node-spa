import cors from 'cors'
import express from 'express'
import path from 'path'

import { postsRouter } from './express/posts-router.js'
import { tagsRouter } from './express/tags-router.js'
import { errorMiddleware } from './express/middleware/error-middleware.js'

const server = express()
server.use(cors())
server.use(express.json())

const projectRoot = process.cwd()

const apiRouter = express.Router()
server.use('/api', apiRouter)

// Serve frontend files
server.use(express.static(path.join(projectRoot, '../public')))

// Default route for SPA
// Only if not API call, send back the index.html
server.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(projectRoot, '../public/index.html'))
    } else {
        next()
    }
})

apiRouter.use('/posts', postsRouter)
apiRouter.use('/tags', tagsRouter)

server.use(errorMiddleware)

export default server