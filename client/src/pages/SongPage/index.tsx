import React, { FC, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import * as SC from "./styles"
import tracksApi from "../../api/tracks"
import { ISong } from "../../types"

const SongPage: FC = () => {
    const [potentialSongs, setPotentialSongs] = useState<ISong[]>()
    const [selectedSong, setSelectedSong] = useState<ISong>()
    const [searchParams] = useSearchParams()
    const songName = searchParams.get("songName")

    const fetchPotentialSongs = async () => {
        if (!songName) return

        const potentialSongs = await tracksApi.getPotentialSongs(songName)

        if (potentialSongs) {
            if (potentialSongs.length == 1) {
                setSelectedSong(potentialSongs[0])
            } else {
                setPotentialSongs(potentialSongs)     
            }
        }
    }

    const handleSelect = (song: ISong) => () => {
        setSelectedSong(song)
    }

    useEffect(() => {
        fetchPotentialSongs()
    }, [songName])

    if (!selectedSong) {
        return (
            <SC.Container>
                <SC.PromptText>Which song is your desired selection?</SC.PromptText>
                <SC.SongsContainer>
                    {potentialSongs?.map((song: ISong, i) => (
                        <SC.SongSelection key={i} onClick={handleSelect(song)}>
                            {song.track.title} - {song.track.subtitle}
                        </SC.SongSelection>
                    ))}
                </SC.SongsContainer>
            </SC.Container>
        )
    }

    return (
        <SC.Container>
        </SC.Container>
    )
}

export default SongPage