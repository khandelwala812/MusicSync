import React, { FC, useState, useEffect } from "react"

import * as SC from './styles'
import { ISong } from "../../types"
import tracksApi from "../../api/tracks"

const SearchPage: FC = () => {
    const [query, setQuery] = useState("")
    const [songs, setSongs] = useState<ISong[]>()

    const fetchSongs = async () => {
        const response = await tracksApi.getSongs(query)
        const loadedSongs = response?.data?.hints
        console.log(loadedSongs)
        setSongs(loadedSongs)
    }

    useEffect(() => {
        fetchSongs()
    }, [query])

    return <SC.Container>
        <SC.SearchContainer>
            <SC.Title>Pick a song</SC.Title>
            <SC.SearchBar 
                value={query} 
                placeholder="Song name" 
                onChange={e => setQuery(e.target.value)} 
            />
            {songs?.length && songs.map((song: ISong) => (
                <SC.SongContainer>{song.term}</SC.SongContainer>
            ))}
        </SC.SearchContainer>
    </SC.Container>
}

export default SearchPage