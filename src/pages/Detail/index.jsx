import { Container } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tags'
import { FiClock } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
// import { format } from 'date-fns'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/auth'

 
export function Detail() {
    const [movie, setMovie] = useState({user:{name: ''}})
    const [dateCreated, setDateCreated] = useState('')
    const [timeCreated, setTimeCreated] = useState('')
    const { user } = useAuth()

    const params = useParams()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


    useEffect(() => {
        api.get(`movie_notes/${params.id}`).then(response => {
            setMovie(response.data)

        })
        //format the date
        .then(() => {

            const dateCreated = new Date(movie.created_at).toLocaleDateString("en-GB")
            const timeCreated = new Date(movie.created_at).toLocaleTimeString("en-GB",{ hour: "2-digit", minute: "2-digit" })
            console.log(typeof new Date(movie.created_at).toLocaleTimeString("en-GB",{ hour: "2-digit", minute: "2-digit" }))

            setDateCreated(dateCreated)
            setTimeCreated(timeCreated)

        })
    },[])
    return(
        <Container>
            <Header />
            <main className="main">
                <ButtonText title="Back" to="/"/>
                <div className="content">
                    <div className='header'>
                        <div>
                            <h1>{movie.title}</h1>
                            <Rating grade={movie.rating}  isBig/>
                        </div>
                        <div>
                            <img src={avatarUrl} alt={`${movie.user.name}'s photo`}/>
                            <p>Por {movie.user.name}</p>
                            <p>
                                <FiClock />
                                {dateCreated} ás {timeCreated}
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