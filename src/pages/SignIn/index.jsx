import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { ValidationMessage } from '../../components/ValidationMessage'


export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return(
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Application for following all your favorites movies</p>
                <h2>Login</h2>
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon= {FiMail}
                    onChange={e => setEmail(e.target.value)}
                
                />
                <ValidationMessage>
                    <p>Inform a valid e-mail</p>
                </ValidationMessage>
                <Input 
                    placeholder="Password"
                    type="password"
                    icon= {FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Enter" onClick={handleSignIn} />
                <Link to="/register" >
                    Create Account
                </Link>
            </Form>
            <Background />
        </Container>
    )
}