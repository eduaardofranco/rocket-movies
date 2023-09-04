import { Container } from './styles'
import { BiLeftArrowAlt } from 'react-icons/bi'

export function ButtonText({ title }) {
    return(
        <Container>
            <BiLeftArrowAlt />
            { title }
        </Container>
    )
}