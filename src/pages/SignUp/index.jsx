import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'



export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()
    
   function handleSignUp() {
        if(!name || !email || !password) {
           return alert('All fields required!')
        }

        api.post('/users', { name, email, password })
        .then(() => {
            alert('User suscefully registred!')
            navigate('/')
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
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
                <Button title="Register" onClick={handleSignUp} />
                <Link to="/">
                    <ButtonText title="Back to Login" />
                </Link>
            </Form>
            <Background />
        </Container>
    )
}