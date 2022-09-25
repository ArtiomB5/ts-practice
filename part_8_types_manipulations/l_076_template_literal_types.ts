type ReadOrWrite = 'read' | 'write'
type Bulk = 'bulk' | ''

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`

type ReadOnWriteBulk<T> = T extends `can${infer R}` ? R : never

type TestType = ReadOnWriteBulk<Access>

type ErrorOrSuccess = 'error' | 'success'

type ResponseT = {
    result: `http${Capitalize<ErrorOrSuccess>}`
}

const a2: ResponseT = {
    result: 'httpSuccess'
}