export interface Result<T> {
    resCode: number,
    resMessage: string,
    info: T
}