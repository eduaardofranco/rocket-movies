import styled from 'styled-components'

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.BG_700};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    input {
        background: transparent;
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        padding: 1.8rem 0 1.8rem 1.2rem;
        height: 5.5rem;
        width: 100%;
    }
    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-size: 2rem;
        margin-left: 1.2rem;
    }
`;