import { Container, Search, Profile } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Header() {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


    return(
        <Container>
            <h1>RocketMovies</h1>
            <Search>
                <input type="search" placeholder="Search by title" />
            </Search>
            <Profile>
                <div>
                    <Link to="/profile">
                        {user.name}
                    </Link>
                    <Link to="">
                        <span onClick={signOut}>Exit</span>
                    </Link>
                </div>
                <Link to="/profile">
                    <img src={avatarUrl} alt={`${user.name} photo`}></img>
                </Link>
            </Profile>

        </Container>
    )
}