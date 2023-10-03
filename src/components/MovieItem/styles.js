import styled from 'styled-components'

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.BG_500};
    border-radius: 1.6rem;
    cursor: pointer;
    display: block;
    padding: 3.2rem;
    width: 130rem;
    &+ div {
        margin-top: 2.4rem;
    }
    h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: .5rem;
    }
    p {
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-size: 1.6rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        margin: 1.5rem 0;
        text-overflow: ellipsis;
        max-height: 4rem;
        overflow: hidden;
    }
    @media (max-width: 130rem) {
        width: 100%;
    }
`;