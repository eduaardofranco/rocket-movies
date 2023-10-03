import styled from 'styled-components'

export const Container = styled.div`
    header h1 {
        display: block;
        font-size: 2.4rem;
        @media (max-width: 350px) {
            font-size: 1.8rem;
        }
    }

    .content {
        padding-right: 1.5rem;
        > h1 {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 3.6rem;
            font-weight: 400;
            margin-bottom: 2.4rem;
        }
    }

    .tags {
        background: ${({ theme }) => theme.COLORS.BLACK};
        border-radius: .8rem;
        display: flex;
        flex-wrap: wrap;
        padding-top: 1.6rem;
        input {
            width: 100%;
        }

    }
    .buttons {
        display: flex;
        margin-top: 4rem;
        gap: 4rem;
        
        button {
            height: 5.6rem;
            &:nth-child(1) {
                 background-color: ${({ theme }) => theme.COLORS.BLACK};
                 color: ${({ theme }) => theme.COLORS.PINK};
             }
        }
    }
`;

export const Form = styled.form`
    
    > div {
        display: flex;
        gap: 4rem;
        @media (max-width: 400px) {
            display: block;
            gap: 0;
            > div {
                margin-top: 4rem;

            }
        }
    }
    > textarea {
        margin: 4rem 0;
    }
`;