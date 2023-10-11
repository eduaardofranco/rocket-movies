import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'


export function Routes() {
    const { user, signOut } = useAuth()

    useEffect(() => {
        api.get('/users/validated').catch((error) => {
            console.log(error)
            signOut()
        })
    },[])

    return(

        <BrowserRouter>
        {/* if is authenticated show <AppRoutes> else show <AuthRoutes> */}
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>

    )
}