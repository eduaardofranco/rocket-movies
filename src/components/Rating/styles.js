import styled from 'styled-components' 

export const Container = styled.div`
    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.5rem;

        &+ svg {
            margin-left: .6rem;
        }
    }

`;