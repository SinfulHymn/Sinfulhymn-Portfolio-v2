import fs from 'fs'
import path from 'path'

const pipe =
  (...fns: Array<(x: any) => any>) =>
  (x: any) =>
    fns.reduce((v, f) => f(v), x)

const flattenArray = (input: any[]): string[] =>
  input.reduce((acc: string[], item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])

const map = (fn: (x: any) => any) => (input: any[]) => input.map(fn)

const walkDir = (fullPath: string): string | string[] => {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath)
}

const pathJoinPrefix = (prefix: string) => (extraPath: string) => path.join(prefix, extraPath)

const getAllFilesRecursively = (folder: string): string[] => {
  // Check if the directory exists, create it if it does not
  if (!fs.existsSync(folder)) {
    console.error(`Directory ${folder} does not exist.`)
    return [] // or throw an error, depending on your use case
  }
  return pipe(fs.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder)
}

export default getAllFilesRecursively
