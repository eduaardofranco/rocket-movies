import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    header {
        background-color: ${({ theme }) => theme.COLORS.BG_500};
        display: flex;
        align-items: center;
        height: 14.4rem;
        > div {
            margin: 0 auto;
            width: 133.6rem;
        }
        h1 {
            display: block;
            font-size: 2.4rem;
            @media (max-width: 350px) {
                display: block!important;
            }
        }
        @media (max-width: 35rem) {
            align-items: start;
        }
    }
`;

export const Form = styled.form`
    margin: 0 auto;
    width: 34rem;
    .fields {
        > div {
            margin-bottom: .8rem;
        }
        > div:nth-child(3) {
            margin-top: 2.4rem
        }
    }
    button {
        margin-top: 1.6rem
    }
    @media (max-width: 35rem) {
        padding: 0 1rem;
        width: 100%;
    }

`;
export const Avatar = styled.div`

    margin: -10rem auto 6.4rem auto;
    position: relative;
    width: 18.6rem;
    height: 18.6rem;
    > img {
        border-radius: 50%;
        height: 18.6rem;
        width: 18.6rem;
    }
    input {
        display: none;
    }
    label {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 4.8rem;
        width: 4.8rem;
        svg {
            height: 2rem;
            width: 2rem;
        }
    }
`;