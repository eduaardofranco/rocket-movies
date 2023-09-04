import { Container, Form, Avatar } from './styles'
import { ButtonText} from '../../components/ButtonText'
import { FiCamera, FiUser, FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
    return( 
        <Container>
            <header>
                <div>
                    <ButtonText title="Back" />
                </div>
            </header>
            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/eduaardofranco.png"
                        alt="User photo"
                    />
                    <label htmlFor='avatar'>
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                <div className="fields">
                    <Input type="text" placeholder="Name" icon={FiUser}/>
                    <Input type="email" placeholder="E-mail" icon={FiMail}/>
                    <Input type="password" placeholder="Password" icon={FiLock}/>
                    <Input type="password" placeholder="New Password" icon={FiLock}/>
                </div>
                <Button title="Save" />
            </Form>
        </Container>
    )
}