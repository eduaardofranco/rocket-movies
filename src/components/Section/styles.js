import styled from 'styled-components' 

export const Container = styled.section`
    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 2.4rem;
    }
`;