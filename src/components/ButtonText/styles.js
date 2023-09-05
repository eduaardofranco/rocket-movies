import styled from 'styled-components'

export const Container = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    margin: 4rem 0 2.4rem 0;
    &:hover {
        background-color: transparent;
    }
    svg {
        font-size: 2.4rem;
        margin-right: .8rem;
    }
`;