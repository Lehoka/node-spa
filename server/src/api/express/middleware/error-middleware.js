export class ApiError extends Error {
    discriminator = 'api-error'
    constructor(statusCode, debugMessage, loggable) {
        this.statusCode = statusCode
        this.loggable = loggable
        super(debugMessage)
    }
}

function isApiError(variable) {
    return variable['discriminator'] === 'api-error'
}

export const errorMiddleware = (cause, request, response, _next) => {

    if (isApiError(cause)) {
        const error = cause
        if (error.loggable) {
            console.error(error.debugMessage, request.path, request.query, request.body)
        }

        response.status(error.statusCode ?? 500).send({ debugMessage: error.debugMessage })
        return
    }

    console.error(cause.message, request.path, request.query, request.body)
    response.status(500).send({ debugMessage: cause.message })
}