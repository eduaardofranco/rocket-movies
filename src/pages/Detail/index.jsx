import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tags'
import { FiClock } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useParams, useNavigate } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/auth'

 
export function Detail() {
    const [movie, setMovie] = useState({user:{name: ''}})
    const [dateCreated, setDateCreated] = useState('')
    const [timeCreated, setTimeCreated] = useState('')
    
    const { user } = useAuth()
    const params = useParams()
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    async function handleDeleteMovie() {
        const confirmDelete = window.confirm('Are you sure you want to delete the Movie?')
        
        if(confirmDelete) {
            await api.delete(`/movie_notes/${params.id}`)
            navigate('/')
        }
    }

    useEffect(() => {
        api.get(`movie_notes/${params.id}`).then(response => {
            setMovie(response.data)

        }).catch(error => {
            console.error('Error fetching movie data:', error);
          });
    },[])
    
    //format the date
    useEffect(() => {
        //This approach ensures that the date and time formatting is done after the movie state is properly set
        //and handles potential issues related to invalid date formats
        if(movie.created_at) {
            const dateCreated = new Date(movie.created_at).toLocaleDateString("en-GB")
            const timeCreated = new Date(movie.created_at).toLocaleTimeString("en-GB",{ hour: "2-digit", minute: "2-digit" })
    
            setDateCreated(dateCreated)
            setTimeCreated(timeCreated)
        }
    }, [movie.created_at])


    return(
        <Container>
            <Header />
            <main className="main">
                <div>
                    <ButtonText title="Back" to="/"/>
                    <Button className="deleteButton" title='Delete Movie' onClick={handleDeleteMovie} />
                </div>
                <div className="content">
                    <div className='header'>
                        <div>
                            <h1>{movie.title}</h1>
                            <Rating grade={movie.rating}  isbig="true" />
                        </div>
                        <div>
                            <img src={avatarUrl} alt={`${movie.user.name}'s photo`}/>
                            <p>Por {movie.user.name}</p>
                            <p>
                                <FiClock />
                                {dateCreated} às {timeCreated}
                                {/* {movie.created_at} */}
                            </p>
                        </div>
                        <div>
                            {
                                movie.tags && movie.tags.map(tag => (
                                    <Tag
                                     title={tag.name}
                                     key={String(tag.id)}
                                     />
                                ))
                            }
                        </div>
                    </div>
                    <div className="description">
                        <p>{movie.description}</p>
                    </div>
                </div>
            </main>
        </Container>
    )
}