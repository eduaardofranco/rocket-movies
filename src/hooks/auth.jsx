import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})


    //authentication function
    async function signIn({ email, password, setMessageValidation }) {
        try {
            const response = await api.post(
                'sessions',
                { email, password },
                { withCredentials: true }
            )

            const { user } = response.data

            //set user to the localstorage
            localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

            setData({ user })

        } catch(error) {
            if (error.response && error.response.data) {
                console.error('Error response data:', error.response.data); // Log the error response data
                setMessageValidation(error.response.data.message || 'Unknown error occurred.');
              } else if (error.message) {
                console.error('Error message:', error.message); // Log the error message
                setMessageValidation(error.message || 'Unknown error occurred.');
              } else {
                console.error('Unknown error:', error); // Log the unknown error
                alert('Error while logging in.');
              }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem('@rocketmovies:user')
       
        //if there is user in the localstorage
        if(user) {
            setData({
                user: JSON.parse(user)
            })

        }
    },[])

    function signOut() {
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