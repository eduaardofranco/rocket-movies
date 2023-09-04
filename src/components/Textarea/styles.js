import styled from 'styled-components'

export const Container = styled.textarea`
    background: ${({ theme }) => theme.COLORS.BG_300};
    border-radius: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    padding: 1.2rem;
    resize: none;
    height: 27.5rem;
    width: 100%;

`;