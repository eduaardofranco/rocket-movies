import { Container, Form } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { AddTag } from '../../components/AddTag'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function New() {

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    function handleAddTag() {
        
        //add tag if field is not empty and tag doesnt exist 
        if(newTag && !tags.includes(newTag)) {
            setTags(prevState => [...prevState, newTag])
            setNewTag('')
        } else {
            alert('Please enter a new Tag')
        }
    }
    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter((tag, index) => index !== deleted))
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
                            <Input placeholder="Title" type="text" />
                            <Input placeholder="Your Grade (0 to 5)" type="number" min="0" max="5" />
                        </div>
                        <Textarea placeholder="Observations" type="text" />
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
                                isNew
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    <div className="buttons">
                        <Button title="Cancel" />
                        <Button title="Save" />
                    </div>
                </div>

            </main>
        </Container>
    )
}