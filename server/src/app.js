import server from './api/express-api.js'
import { createServices } from './services/index.js'
import { SERVER_PORT } from './config.js'

createServices()

server.listen(SERVER_PORT, () => {
    console.log(`[express]: Server listening on port ${SERVER_PORT}`)
})