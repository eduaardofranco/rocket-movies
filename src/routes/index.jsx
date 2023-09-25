import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'

export function Routes() {
    const { user } = useAuth()
    return(

        <BrowserRouter>
        {/* if is authenticated show <AppRoutes> else show <AuthRoutes> */}
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>

    )
}