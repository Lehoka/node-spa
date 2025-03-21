import { ApiError } from './middleware/error-middleware.js'

export const wronglyTypedPathParamError = (param) =>
    new ApiError(400, `invalid-request.wrongly-typed-path-parameter[${param}]`, true)

export const preconditionFailedError = (where, precondition) =>
    new ApiError(400, `invalid-request.precondition-failed[${where}].${precondition ?? 'unknown'}`, true)