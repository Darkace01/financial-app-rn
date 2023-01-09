import { apiResponse } from "./Interfaces/apiResponse"
import wretch from "wretch"
import { responseMapper } from "./mapResponse"

const baseUrl = "https://faapi.azurewebsites.net"

export const HttpHelper  = (authToken : string = null) : any => {

    const myHeaders = authToken ? 
        { 'Authorization' : `Bearer ${authToken}`, 'Content-Type': 'application/json'} : 
        { 'Content-Type': 'application/json' }

    const api = wretch(baseUrl, { myHeaders,  mode: "cors" })
                .errorType("json")
                .resolve(r => r.json())

    const getJson = async (url : string) : Promise<apiResponse> => {
        
        try {
            const result  = await api.get(url)
            return responseMapper(result)
        }
        catch(error){
            handleErrors(error)
        }
    }

    const postJson = async (url : string, data : any) : Promise<apiResponse> => {
        
        try{
            const result = await api.url(url).post(data)
            return responseMapper(result)
        }
        catch(error){
            handleErrors(error)
        }

    }

    function handleErrors (error : any) {
        const message =
                typeof error.message === "object" && Object.keys(error.message).length > 0
                ? JSON.stringify(error.message)
                : error.response.statusText
                console.error(`${error.status}: ${message}`)
    }
    
    return {
        getJson,
        postJson
    }
}