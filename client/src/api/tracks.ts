import client from "./client"

const getSongs = (query: string) => {
    return client.get(
        "/auto-complete", 
        { term: query, locale: "en-US" }, 
        {
            headers: {
                'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        })
}

export default { getSongs }