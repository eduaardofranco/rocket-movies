import { createContext, useContext } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    //authentication function
    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            //add toke in the header of requests
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

    return(
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }