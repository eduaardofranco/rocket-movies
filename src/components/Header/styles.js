import styled from 'styled-components'

export const Container = styled.header`

    grid-area: header;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BG_300};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem 0;
    width: 100%;

     h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
    }
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Search = styled.div`
    margin: 0 18.1rem;
    width: 63rem;
    
    input {
        background: ${({ theme }) => theme.COLORS.BG_700};
        border-radius: 1rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        padding: 1.9rem 2.4rem;
        font-weight: 400;
        height: 5.6rem;
        width: 100%;
        
        &:focus {
            outline: 1px solid ${({ theme }) => theme.COLORS.GRAY};;
        }

    }
`;
export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        font-weight: 700;
        margin-right: .9rem;
        text-align: right;
        
    }
    a {
        color: ${({ theme }) => theme.COLORS.WHITE};

    }
    span {
            color: ${({ theme }) => theme.COLORS.GRAY};
            font-weight: 400;
            cursor: pointer;
        }
    img {
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY };
        border-radius: 50%;
        height: 6.4rem;
        width: 6.4rem;
    }
`;