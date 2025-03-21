import path from 'path'

export const SERVER_PORT = process.env.SERVER_PORT ?? 3080

export const REPOSITORY_PATH = process.env.REPOSITORY_PATH ?? `src${path.sep}repository`