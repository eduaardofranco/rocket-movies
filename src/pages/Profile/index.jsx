import { Container, Form, Avatar } from './styles'
import { ButtonText} from '../../components/ButtonText'
import { FiCamera, FiUser, FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'
import { ValidationMessage } from '../../components/ValidationMessage'
 
export function Profile() {
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email) 
    const [passwordOld, setPasswordOld] = useState('')
    const [passwordNew, setPasswordNew] = useState('')
    const [messageValidation, setMessageValidation] = useState('')
    

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setavatarFile] = useState(null)

    const mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    async function handleUpdate() {
        if(name === "") return setMessageValidation('Enter a valid Name')
        if(!email.match(mailformat)) return setMessageValidation('Enter a valid E-mail')
        const updated = {
            name, 
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        const userUpdated = Object.assign(user, updated)
        
        // return console.log(userUpdated)
        await updateProfile({ user: userUpdated, avatarFile, setMessageValidation })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setavatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)

    }

    return( 
        <Container>
            <header>
                <div>
                    <ButtonText title="Back" to="/" />
                </div>
            </header>
            <Form>
                <Avatar>
                    <img 
                        src={avatar}
                        alt="User photo"
                    />
                    <label htmlFor='avatar'>
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
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
                {messageValidation !== '' && <ValidationMessage><p>{ messageValidation }</p></ValidationMessage>}
                <Button title="Save" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}