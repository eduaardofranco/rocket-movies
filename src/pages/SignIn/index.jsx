import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from 'react'
import { ValidationMessage } from '../../components/ValidationMessage'


export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(false)

    const { signIn } = useAuth()

    //email regex
    const mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    function handleSignIn() {
        if(emailIsValid) {
            signIn({ email, password })
        }
    }

    
    useEffect(() => {
        if(email )
        function validateEmail() {
            if(email.match(mailformat)) {
                setEmailIsValid(true)
                console.log('entrou')
            } else {
                setEmailIsValid(false)
                // console.log('email n passou')
        
            }
    
        }

    }, [email])

    return(
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Application for following all your favorites movies</p>
                <h2>Login</h2>
                <Input 
                    placeholder="E-mail"
                    type="email"
                    icon= {FiMail}
                    onChange={e => setEmail(e.target.value)}
                
                />
                {/* if email is invalid show message */}
                { !emailIsValid && <ValidationMessage><p>Inform a valid e-mail</p></ValidationMessage>}
                
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