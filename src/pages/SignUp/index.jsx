import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { validateEmail } from '../../services/validateEmail'
import { ValidationMessage } from '../../components/ValidationMessage'



export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [messageValidation, setMessageValidation] = useState('')
    
    const navigate = useNavigate()
    const mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
   function handleSignUp() {
        //input validation
        if(!name) {
            return setMessageValidation('Inform a valid Name')
        }
        if(!email.match(mailformat)) {
            return setMessageValidation('Inform a valid E-mail')
        }
        if(!password) {
            return setMessageValidation('Inform a valid Password')
        }

        api.post('/users', { name, email, password })
        .then(() => {
            alert('User suscefully registred!')
            navigate('/')
        })
        .catch(error => {
            if(error.response) {
                setMessageValidation(error.response.data.message)
            } else {
                alert('User not registred')
            }
        })


    }


    return(
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Application for following all your favorites movies</p>
                <h2>Create your Account</h2>
                <Input 
                    placeholder="Name"
                    type="text"
                    icon= {FiUser}
                    onChange={e => setName(e.target.value)}
                    required
                    
                    />
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon= {FiMail}
                    onChange={e => setEmail(e.target.value)}
                    
                    />
                <Input 
                    placeholder="Password"
                    type="password"
                    icon= {FiLock}
                    onChange={e => setPassword(e.target.value)}
                    />
                {messageValidation !== '' && <ValidationMessage><p>{ messageValidation }</p></ValidationMessage>}
                <Button title="Register" onClick={handleSignUp} />
                <ButtonText title="Back to Login" to="/" />
            </Form>
            <Background />
        </Container>
    )
}