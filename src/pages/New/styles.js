import styled from 'styled-components'

export const Container = styled.div`

    .content {
        height: calc(100vh - 22.5rem);
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
    }
    > textarea {
        margin: 4rem 0;
    }
`;