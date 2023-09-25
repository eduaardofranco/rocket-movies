import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    //authentication function
    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            //set user and toke to the localstorage
            localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
            localStorage.setItem('@rocketmovies:token', token)

            //add token in the header of requests
            api.defaults.headers.authorization = `Bear ${token}`
            setData({ user, token })

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
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
            api.defaults.headers.authorization = `Bear ${token}`

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

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
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