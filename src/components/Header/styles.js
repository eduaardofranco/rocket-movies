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
        @media (max-width: 1000px) {
            font-size: 1.8rem;
        }
    }
    .center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 133.6rem;
        @media (max-width: 1300px) {
            padding: 0 2rem;
            width: 100%;
        }
    }
`;

export const Search = styled.div`
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
    @media (max-width: 1000px) {
        width: 75%;
        margin: 0 1rem;
    }
    @media (min-width: 73rem) {
        /* width: 30rem; */
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
        @media (max-width: 40rem) {
            height: 3rem;
            width: 3rem;
        }
    }
`;