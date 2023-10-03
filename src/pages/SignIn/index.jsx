import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from 'react'
import { ValidationMessage } from '../../components/ValidationMessage'
import { validateEmail } from '../../services/validateEmail'


export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailIsValid, setEmailIsValid] = useState(true)
    const [ messageValidation, setMessageValidation] = useState('')

    const { signIn } = useAuth()
    const mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    function handleSignIn() {
        //verify email before send data
        if(!email.match(mailformat)) {
            return setMessageValidation('Inform a valid E-mail')
        }
        setMessageValidation('')
        signIn({ email, password, setMessageValidation })
    }
    //login w/ enter key
    useEffect(() => {
        document.addEventListener('keydown', (event) =>{
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSignIn();
              }
        })
    },[])
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
                
                <Input 
                    placeholder="Password"
                    type="password"
                    icon= {FiLock}
                    onChange={e => setPassword(e.target.value)}
                    />
                {messageValidation !== '' && <ValidationMessage><p>{ messageValidation }</p></ValidationMessage>}
                <Button title="Enter" onClick={handleSignIn} />
                <Link to="/register" >
                    Create Account
                </Link>
            </Form>
            <Background />
        </Container>
    )
}