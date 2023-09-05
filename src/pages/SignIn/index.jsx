import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'


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
                <a href="#">Create Account</a>
            </Form>
            <Background />
        </Container>
    )
}