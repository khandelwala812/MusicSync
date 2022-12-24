import React, { FC, useState, useEffect } from "react"

import * as SC from './styles'
import tracksApi from "../../api/tracks"

const SearchPage: FC = () => {
    const [query, setQuery] = useState()
    const [songs, setSongs] = useState()

    const fetchSongs = async () => {
        const response = await tracksApi.getSongs()
        const loadedSongs = response.data
        setSongs(loadedSongs)
    }

    useEffect(() => {
        fetchSongs()
    }, [])

    return <SC.Container>
        <SC.SearchContainer>
            <SC.Title>Pick a song</SC.Title>
            <SC.SearchBar placeholder="Song name" />
        </SC.SearchContainer>
    </SC.Container>
}

export default SearchPage