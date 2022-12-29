import client from "./client"
import { ISong, ISongResult } from "../types"
import { SHAZAM_API_KEY } from "../config/constants"

interface ISongResultsResponse {
    hints: ISongResult[]
}

const getSongs = (query: string) => {
    if (!query) return

    return client.get<ISongResultsResponse>(
        "/auto-complete", 
        { term: query, locale: "en-US" }, 
        {
            headers: {
                'X-RapidAPI-Key': SHAZAM_API_KEY,
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        })
}


interface IPotentialSongsResponse {
    tracks: {
        hits: ISong[]
    }
}

const getPotentialSongs = async (songName: string) => {
    const response = await client.get<IPotentialSongsResponse>(
        "/search", 
        { term: songName, locale: "en-US" },
        {
            headers: {
                'X-RapidAPI-Key': SHAZAM_API_KEY,
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        })
    
    if (response?.data) {
        const potentialSongs = response.data.tracks.hits
        return potentialSongs
    }
}

export default { getSongs, getPotentialSongs }