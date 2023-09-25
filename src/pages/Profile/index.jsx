import { Container, Form, Avatar } from './styles'
import { ButtonText} from '../../components/ButtonText'
import { FiCamera, FiUser, FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
 
export function Profile() {
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email) 
    const [passwordOld, setPasswordOld] = useState('')
    const [passwordNew, setPasswordNew] = useState('')

    async function handleUpdate() {
        if(name === "") return alert('Name can not be empty')
        if(email === "") return alert('E-mail can not be empty')
        const user = {
            name, 
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        await updateProfile({ user })
    }

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
                    <Input
                        type="text"
                        placeholder="Name"
                        icon={FiUser}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        type="email"
                        placeholder="E-mail"
                        icon={FiMail}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        icon={FiLock}
                        onChange={e => setPasswordOld(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="New Password"
                        icon={FiLock}
                        onChange={e => setPasswordNew(e.target.value)}

                    />
                </div>
                <Button title="Save" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}