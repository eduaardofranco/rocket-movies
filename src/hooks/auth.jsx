import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})


    //authentication function
    async function signIn({ email, password, setMessageValidation }) {
        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            //set user and token to the localstorage
            localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
            localStorage.setItem('@rocketmovies:token', token)

            //add token in the header of requests
            api.defaults.headers.common['Authorization'] = `Bear ${token}`
            setData({ user, token })

        } catch(error) {
            if(error.response) {
                setMessageValidation(error.response.data.message)
            } else {
                alert('Error to Enter')
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('@rocketmovies:token')
        const user = localStorage.getItem('@rocketmovies:user')
        //if there is token e user in the localstorage
        if(token && user) {
            //sets token to the header of requests again
            api.defaults.headers.common['Authorization'] = `Bear ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })

        }
    },[])

    function signOut() {
        localStorage.removeItem('@rocketmovies:token')
        localStorage.removeItem('@rocketmovies:user')

        setData({})
    }
    
    async function updateProfile({ user, avatarFile, setMessageValidation }) {
        try {

            //if there is avatar, update it
            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append('avatar', avatarFile)

                const response = await api.patch('/users/avatar',fileUploadForm)
                user.avatar = response.data.avatar
            }
            //update user details
            await api.put('/users', user)
            //update infos localstorage also
            localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

            setData({ user, token: data.token})
            setMessageValidation('Profile updated!')

        } catch(error) {
            if(error.response) {
                setMessageValidation(error.response.data.message)
            } else {
                alert('Error to update infos')
            }
        }
    }

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }