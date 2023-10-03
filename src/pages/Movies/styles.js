import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
        "header"
        "content";
    h1 {
        @media (max-width: 630px) {
            display: none;
        }
    }

    > main {
        
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
        > .content {
            > h2 {
                color: ${({ theme }) => theme.COLORS.GRAY};
                font-size: 3rem;
                font-style: italic;
                font-weight: 400;
                text-align: center;
        }

        }
    }

`;