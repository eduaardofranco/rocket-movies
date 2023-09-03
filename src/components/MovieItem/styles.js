import styled from 'styled-components'

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.BG_500};
    border-radius: 1.6rem;
    padding: 3.2rem;
    &+ div {
        margin-top: 2.4rem;
    }
    /* margin-bottom: 2.4rem; */
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
    }
`;