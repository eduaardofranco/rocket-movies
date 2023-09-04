import styled from 'styled-components'

export const Container = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    margin-bottom: 2.4rem;
    &:hover {
        background-color: transparent;
    }
    svg {
        font-size: 2.4rem;
        margin-right: .8rem;
    }
`;