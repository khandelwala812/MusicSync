import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
`

export const Title = styled.h1`
    font-size: 64px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    margin-bottom: 32px;
    padding: 0;
`

export const SearchBar = styled.input`
    width: 20vw;
    height: 32px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 1px solid gray;
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 4px;
    outline: none;
`

export const SongsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    height: 20vh;
`

export const Song = styled.button`
    background: white; 
    border: none;
    cursor: pointer;
`

export const NoResultsText = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
`