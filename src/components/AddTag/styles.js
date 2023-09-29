import styled from 'styled-components'

export const Container = styled.span`
   
   background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.BG_700};
    border: ${({ theme, isnew }) => isnew ? `.1rem dashed ${theme.COLORS.GRAY}` : 'none'};
    border-radius: 1rem;
    
    display: flex;
    align-items: center;
    
    font-family: 'Robot', sans-serif;
    margin: 0 2.4rem 1.6rem 1.6rem;
    padding: 1.6rem;
    
    > input {
        border: none;
        background: none;
        color: ${({ theme, isnew }) => isnew ? theme.COLORS.GRAY : theme.COLORS.WHITE};
        width: auto;

    }

    button {
        background-color: transparent;
        margin-left: 1.6rem;
    }
    
     svg {
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.2rem;
    }
`;