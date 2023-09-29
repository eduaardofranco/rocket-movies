import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
        "header"
        "content";

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
            height: calc(100vh - 31.4rem);
            margin-bottom: 5rem;
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