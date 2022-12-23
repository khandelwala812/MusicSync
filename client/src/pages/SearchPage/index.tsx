import React, { FC } from "react"
import * as SC from './styles'

const SearchPage: FC = () => {
    return <SC.Container>
        <SC.SearchContainer>
            <SC.Title>Pick a song</SC.Title>
            <SC.SearchBar placeholder="Song name" />
        </SC.SearchContainer>
    </SC.Container>
}

export default SearchPage