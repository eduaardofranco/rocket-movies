import styled from 'styled-components'
import backgroundImg from '../../assets/bgLogin.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

`;
export const Form = styled.form`
    padding: 0 13.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 4.8rem;
    }
    h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: 500;
        margin: 6.5rem 0 4.8rem 0;
    }
    p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        
    }
    > div + div {
        margin-top: .8rem;
    }
    button {
        margin-top: 2.4rem;
    }
    @media (max-width: 50rem) {
        padding: 0 3rem;
        width: 100%;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;