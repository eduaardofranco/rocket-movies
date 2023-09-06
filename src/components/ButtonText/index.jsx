import { Container } from './styles'
import { BiLeftArrowAlt } from 'react-icons/bi'

export function ButtonText({ title, ...rest }) {
    return(
        <Container { ...rest }>
            <BiLeftArrowAlt />
            { title }
        </Container>
    )
}