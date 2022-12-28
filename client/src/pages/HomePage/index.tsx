import React, { FC, useState, useEffect } from "react"
import { Link } from "react-router-dom"

import * as SC from './styles'
import { ISong } from "../../types"
import tracksApi from "../../api/tracks"
import routes from "../../config/routes"

const HomePage: FC = () => {
    const [searched, setSearched] = useState(false)
    const [query, setQuery] = useState("")
    const [songs, setSongs] = useState<ISong[]>()
    const [selectedSong, setSelectedSong] = useState<string>()

    const fetchSongs = async () => {
        if (query && !searched) {
            setSearched(true)
        }

        const response = await tracksApi.getSongs(query)
        const loadedSongs = response?.data?.hints
        setSongs(loadedSongs)
    }

    const resetState = () => {
        setQuery("")
        setSongs([])
    }

    const handleSelect = (song: ISong) => () => {
        setSelectedSong(song.term)
        resetState()
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
            <SC.SongsContainer>
                {songs?.length && songs.map((song: ISong) => (
                    <Link to={routes.SONG}>
                        <SC.Song>{song.term}</SC.Song>
                    </Link>
                ))}
                {query && songs?.length && <SC.NoResultsText>No results for "{query}"</SC.NoResultsText>}
            </SC.SongsContainer>
        </SC.SearchContainer>
    </SC.Container>
}

export default HomePage