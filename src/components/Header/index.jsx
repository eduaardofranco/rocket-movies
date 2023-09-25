import { Container, Search, Profile } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header() {
    const { signOut } = useAuth()
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Search>
                <input type="search" placeholder="Search by title" />
            </Search>
            <Profile>
                <div>
                    <Link to="/profile">
                        Eduardo Franco
                    </Link>
                    <Link to="">
                        <span onClick={signOut}>Exit</span>
                    </Link>
                </div>
                <Link to="/profile">
                    <img src="https://github.com/eduaardofranco.png" alt="User prifile photo"></img>
                </Link>
            </Profile>

        </Container>
    )
}