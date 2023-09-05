import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'


export function SignUp() {
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
                
                />
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
                <Button title="Register" />
                <ButtonText title="Back to Login" />
            </Form>
            <Background />
        </Container>
    )
}