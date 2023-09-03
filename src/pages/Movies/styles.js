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
        grid-area: content;
        max-width: 133.6rem;
        margin: 0 auto;
        
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
            padding-right: .8rem;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: .8rem;
            }
            &::-webkit-scrollbar-track {
                /* padding-right: 100px; */
            }
            &::-webkit-scrollbar-thumb {
                background: ${({ theme }) => theme.COLORS.PINK};
                border-radius: .8rem;

            }
        }
    }

`;