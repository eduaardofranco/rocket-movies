import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { MovieItem } from '../../components/MovieItem'
import { LiaPlusSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Movies(title) {
    const [movieNotes, setMovieNotes] = useState([])
    const [search, setSearch] = useState('')


    const navigate = useNavigate()

    function handleDetail(id) {
        //navigate to detail page
        navigate(`/detail/${id}`)
    }
    useEffect(() => {
        async function fetchMovieNotes() {
          const response = await api.get(`/movie_notes?title=${search}`);
          setMovieNotes(response.data);
        }
    
        fetchMovieNotes();
      }, [search]);


    return (
        <Container>
            <Header>
                <input
                  type="text"
                  placeholder="Search by title"
                  onChange={(e) => setSearch(e.target.value)}
                />
            </Header>
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
                    
                    {/* if there is no movie, show message */}
                    {movieNotes.length === 0 && <h2>no movies</h2>}
                    {    
                        movieNotes && movieNotes.map(movie => (
                        
                            <MovieItem
                                title={movie.title}
                                rating={movie.rating}
                                key={String(movie.id)}
                                tags={movie.tags}
                                onClick={() => handleDetail(movie.id)}
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