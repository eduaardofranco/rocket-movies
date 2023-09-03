import styled from 'styled-components'

export const Container = styled.span`

    background: ${({ theme }) => theme.COLORS.BG_300};
    border-radius: .8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    margin-right: .8rem;
    padding: .5rem 1.6rem;

`;