import { Container } from './styles'
import { Tag } from '../../components/Tags'
import { Rating } from '../../components/Rating'

export function MovieItem({ title, rating, children, tags }) {
    return(
        <Container to="/detail/1">
            <h2>{title}</h2>
            <Rating grade={rating} />
            {children}

            {
                tags.map(tag => (
                    <Tag
                     title={tag.name}
                     key={String(tag.id)}
                    />
                ))
            }
        </Container>
    )
}