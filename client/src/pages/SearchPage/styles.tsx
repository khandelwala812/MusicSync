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
    gap: 32px;
`

export const Title = styled.text`
    font-size: 64px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const SearchBar = styled.input`
    width: 20vw;
    height: 32px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 1px solid gray;
    border-radius: 8px;
    padding: 4px;
    outline: none;
`