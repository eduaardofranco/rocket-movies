import { Container } from './styles'
import { Tag } from '../../components/Tags'
import { Rating } from '../../components/Rating'

export function MovieItem({ title, rating, children }) {
    return(
        <Container>
            <h2>{title}</h2>
            <Rating grade={rating} />
            {children}
            <Tag title="Fiction" />
            <Tag title="Dramaturgia" />
            <Tag title="Family" />
        </Container>
    )
}