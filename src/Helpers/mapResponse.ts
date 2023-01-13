import { apiResponse } from "./Interfaces/apiResponse";

export const responseMapper  = (source : any) : apiResponse => {
    const hasError : boolean = source.hasError
    const statusCode : number = source.statusCode
    const message : string = source.message
    const data : any = source.data

    const destination : apiResponse = {hasError, statusCode, message, data}
    return destination
}