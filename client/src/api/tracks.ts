import client from "./client"
import { ISong } from "../types"
import { SHAZAM_API_KEY } from "../config/constants"

interface IResponseBody {
    hints: ISong[]
}

const getSongs = (query: string) => {
    if (!query) return

    return client.get<IResponseBody>(
        "/auto-complete", 
        { term: query, locale: "en-US" }, 
        {
            headers: {
                'X-RapidAPI-Key': SHAZAM_API_KEY,
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        })
}

export default { getSongs }