import { Container } from './styles'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Rating({ grade, isBig }) {
    let stars = []

    for (let i = 1; i <=5; i++) {
        if( i <= grade ) {
            stars.push(<AiFillStar />)
        } else {
            stars.push(<AiOutlineStar />)
        }
    }

    return(
        <Container isBig={isBig}>
            {stars}
        </Container>
    )

}