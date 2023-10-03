import styled from 'styled-components'

export const Container = styled.div`

    main > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .deleteButton {
        display: flex;
        justify-self: right;
        width: 20rem;
    }
    
    h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-right: 1.9rem;
    }
    .header {
        > div {
            display: flex;
            align-items: center;
            justify-content: start;
            &:nth-child(1) {
                margin-bottom: 2.4rem;
            }
            &+ div {
                margin-bottom: 4rem;
            }

            p {
                color: ${({ theme }) => theme.COLORS.WHITE};
                display: flex;
                align-items: center;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
                svg {
                color: ${({ theme }) => theme.COLORS.PINK};
                margin: 0 .8rem
                
            }

            }
        }
        img {
            border: 1px solid ${({ theme }) => theme.COLORS.BG_700};
            border-radius: 50%;
            margin-right: .8rem;
            height: 1.6rem;
            width: 1.6rem;
        }

    }
        .description {
            p {
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-weight: 400;
                &+ p {
                    margin-top: 2.5rem;
                }
    
            }
        }
`;