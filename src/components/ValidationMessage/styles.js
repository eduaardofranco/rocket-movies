import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    font-size: 1.2rem;
    align-self: start;
    margin-bottom: 1rem;
    p {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;