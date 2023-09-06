import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { MovieItem } from '../../components/MovieItem'
import { LiaPlusSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

export function Movies(title) {
    return (
        <Container>
            <Header />
            <main className='main'>
                <header>
                    <h2>My Movies</h2>
                    <Link to="/new">
                        <Button 
                            title="Add Movie"
                            icon={LiaPlusSolid}
                        />
                    </Link>
                </header>
                <div className="content">
                    <MovieItem title="Interestelar" rating="4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nulla fugit ab vel totam minima repellat quas, nihil earum voluptate repudiandae optio asperiores. Amet est ipsa beatae soluta eaque aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt hic ut architecto distinctio mollitia, culpa ipsam eaque doloribus eum nulla et repudiandae odit exercitationem, laudantium odio perferendis ad corrupti!</p>
                    </MovieItem>
                    <MovieItem title="Hang of power" rating="3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nulla fugit ab vel totam minima repellat quas, nihil earum voluptate repudiandae optio asperiores. Amet est ipsa beatae soluta eaque aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt hic ut architecto distinctio mollitia, culpa ipsam eaque doloribus eum nulla et repudiandae odit exercitationem, laudantium odio perferendis ad corrupti!</p>
                    </MovieItem>
                    <MovieItem title="Kill Bill 2" rating="1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nulla fugit ab vel totam minima repellat quas, nihil earum voluptate repudiandae optio asperiores. Amet est ipsa beatae soluta eaque aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt hic ut architecto distinctio mollitia, culpa ipsam eaque doloribus eum nulla et repudiandae odit exercitationem, laudantium odio perferendis ad corrupti!</p>
                    </MovieItem>
                    <MovieItem title="West Side" rating="5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nulla fugit ab vel totam minima repellat quas, nihil earum voluptate repudiandae optio asperiores. Amet est ipsa beatae soluta eaque aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt hic ut architecto distinctio mollitia, culpa ipsam eaque doloribus eum nulla et repudiandae odit exercitationem, laudantium odio perferendis ad corrupti!</p>
                    </MovieItem>
                </div>
            </main>
        </Container>

    )
}