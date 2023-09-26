import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { MovieItem } from '../../components/MovieItem'
import { LiaPlusSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export function Movies(title) {
    const [movieNotes, setMovieNotes] = useState([])
    
    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await api.get("/movie_notes");
                setMovieNotes(response.data);
            } catch (error) {
                console.error("Error fetching movie notes:", error);
            }
        }
        fetchMovies()
    },[])


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
                    {
                        movieNotes.map(movie => (
                        
                            <MovieItem
                                title={movie.title}
                                rating={movie.rating}
                                key={String(movie.id)}
                                tags={movie.tags}
                                >

                                <p>{movie.description}</p>

                            </MovieItem>
                        ))
                    }
                </div>
            </main>
        </Container>

    )
}