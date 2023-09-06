import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export function SignIn() {
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
                
                />
                <Input 
                    placeholder="Password"
                    type="password"
                    icon= {FiLock}
                />
                <Button title="Enter" />
                <Link to="/register" >
                    Create Account
                </Link>
            </Form>
            <Background />
        </Container>
    )
}