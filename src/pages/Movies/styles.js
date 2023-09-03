import styled from 'styled-components'

export const Container = styled.div`
.content {
    header {
        display: flex;
        justify-content: space-between;
        margin: 5rem 0;
        > button {
            width: 20.7rem;
        }
        > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 3.2rem;
        font-weight: 400;
        }
    }
    
}

`;