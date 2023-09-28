import { Container } from './styles'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Rating({ grade, isbig }) {
    let stars = []

    for (let i = 1; i <=5; i++) {
        if( i <= grade ) {
            stars.push(<AiFillStar key={i} />)
        } else {
            stars.push(<AiOutlineStar key={i} />)
        }
    }

    return(
        <Container isbig={isbig}>
            {stars}
        </Container>
    )

}