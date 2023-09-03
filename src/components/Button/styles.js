import styled from 'styled-components'

export const Container = styled.button`
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: .8rem;
    color: ${({ theme }) => theme.COLORS.BG_900};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    padding: 0 3.2rem;
    height: 4.8rem;
    width: 100%;

    &:disabled {
        opacity: .5;
        cursor: auto;
    }
    > svg {
        font-size: 2.5rem;
        margin-right: .8rem;
    }
`;