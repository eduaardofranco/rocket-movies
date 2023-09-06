
import { Routes, Route } from 'react-router-dom'

import { Detail } from '../pages/Detail'
import { Movies } from '../pages/Movies'
import { New } from '../pages/New'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={ <Movies /> } />
            <Route path="/detail/:id" element={ <Detail />} />
            <Route path="/new" element={ <New />} />
            <Route path="/profile" element={ <Profile/> } />
        </Routes>
    )
}