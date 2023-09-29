import { Container, Form } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { AddTag } from '../../components/AddTag'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function New() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    const navigate = useNavigate()

    function handleAddTag() {
        
        //add tag if field is not empty and tag doesnt exist 
        if(newTag && !tags.includes(newTag)) {
            setTags(prevState => [...prevState, newTag])
            setNewTag('')
        } else {
            return alert('Please enter a new Tag')
        }
    }
    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter((tag, index) => index !== deleted))
    }

    async function handleNewMovie() {
        if(!title) {
            return alert('Please enter a Title')
        }
        if(!rating) {
            return alert('Please enter a Grade')
        }
        await api.post('/movie_notes',{
            title,
            description,
            tags,
            rating
        })
        alert('Movie registred sucessfully!')
        navigate('/')
    }

    return(
        <Container>
            <Header />
            <main className="main">
                    <ButtonText title="Back" to="/" />
                
                <div className="content">
                    <h1>New Movie</h1>
                    <Form>
                        <div>
                            <Input
                             placeholder="Title"
                             type="text"
                             onChange={e => setTitle(e.target.value)}
                            />
                            <Input
                             placeholder="Your Grade (0 to 5)"
                             type="number"
                             min="0"
                             max="5"
                             onChange={e => setRating(e.target.value)}
                             />
                        </div>
                        <Textarea
                          placeholder="Observations"
                          type="text"
                          onChange={e => setDescription(e.target.value)}
                        />
                    </Form>
                    <Section title="Tags">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <AddTag 
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(index)}
                                        readOnly
                                    />
                                ))
                            }
                            <AddTag 
                                placeholder="New Tag"
                                isnew="true"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    <div className="buttons">
                        <Button title="Cancel" />
                        <Button
                          title="Save"
                          onClick={handleNewMovie}
                        />
                    </div>
                </div>

            </main>
        </Container>
    )
}