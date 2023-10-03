import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        font-size: 62.5%;
        &::-webkit-scrollbar {
            width: .8rem;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.PINK};
            border-radius: .8rem;

        }
    }
    body, input, textarea, button {
        background-color: ${({ theme }) => theme.COLORS.BG_900};
        border: 0;
        font-size: 1.6rem;
        font-family: 'Roboto Slab', serif;
        outline: none;
    }
    a {
        text-decoration: none;
    }
    a, button {
        cursor: pointer;
        transition: filter 0.2s;
    }
    a:hover, button:hover {
        filter: brightness(0.8);
    }

    main.main {
        grid-area: content;
        width: 133.6rem;
        margin: 0 auto;
        @media (max-width: 1300px) {
            padding: 0 2rem 2rem 2rem;
            width: 100%;
        }
        
    }
    .content {
        /* overflow-y: auto; */
        /* padding-right: .8rem; */
       
    }
`;