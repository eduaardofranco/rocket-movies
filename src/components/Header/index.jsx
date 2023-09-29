import { Container, Search, Profile } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


export function Header({ children }) {
    const { signOut, user } = useAuth()
    const [search, setSearch] = useState('')

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    const navigation = useNavigate()

    function handleSignOut() {
        navigation("/")
        signOut()
    }


    return(
        <Container>
            <h1>RocketMovies</h1>
            <Search>
                {children}
            </Search>
            <Profile>
                <div>
                    <Link to="/profile">
                        {user.name}
                    </Link>
                    <span onClick={handleSignOut}>Exit</span>
                </div>
                <Link to="/profile">
                    <img src={avatarUrl} alt={`${user.name} photo`}></img>
                </Link>
            </Profile>

        </Container>
    )
}