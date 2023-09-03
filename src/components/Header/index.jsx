import { Container, Search, Profile } from './styles'

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Search>
                <input type="search" placeholder="Search by title" />
            </Search>
            <Profile>
                <div>
                    Eduardo Franco
                    <span>Exit</span>
                </div>
                <img src="https://github.com/eduaardofranco.png" alt="User prifile photo"></img>
            </Profile>

        </Container>
    )
}