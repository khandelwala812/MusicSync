import React, { FC, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import * as SC from './styles'
import { ISongResult } from "../../types"
import tracksApi from "../../api/tracks"
import routes from "../../config/routes"

const HomePage: FC = () => {
    const [searched, setSearched] = useState(false)
    const [query, setQuery] = useState("")
    const [songResults, setSongResults] = useState<ISongResult[]>()

    const fetchSongResults = async () => {
        if (query && !searched) {
            setSearched(true)
        }

        const response = await tracksApi.getSongs(query)
        const loadedSongs = response?.data?.hints
        setSongResults(loadedSongs)
    }
    
    useEffect(() => {
        fetchSongResults()
    }, [query])

    return <SC.Container>
        <SC.SearchContainer>
            <SC.Title>Pick a song</SC.Title>
            <SC.SearchBar 
                value={query} 
                placeholder="Song name" 
                onChange={e => setQuery(e.target.value)} 
            />
            <SC.SongsContainer>
                {songResults?.length && songResults.map((result: ISongResult, i) => (
                    <Link key={i} to={`${routes.SONG}?songName=${result.term}`}>
                        <SC.Song>{result.term}</SC.Song>
                    </Link>
                ))}
                {query && !songResults?.length && <SC.NoResultsText>No results for "{query}"</SC.NoResultsText>}
            </SC.SongsContainer>
        </SC.SearchContainer>
    </SC.Container>
}

export default HomePage