import { Container } from './styles'
import { Tag } from '../../components/Tags'
import { Rating } from '../../components/Rating'

export function MovieItem({ title, rating, children, tags, onClick }) {
    return(
        <Container onClick={onClick}>
            <h2>{title}</h2>
            <Rating grade={rating} />
            {children}
            
            {
                tags && tags.map(tag => (
                    <Tag
                     title={tag.name}
                     key={String(tag.id)}
                    />
                ))
            }
        </Container>
    )
}