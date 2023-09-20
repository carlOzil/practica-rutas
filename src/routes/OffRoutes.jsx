import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from "../pages"
import { useLogin } from '../hooks/useLogin';
import { AppRoutes } from './AppRoutes';

export const OffRoutes = () => {
    const { state } = useLogin()
    console.log(state, 'offroutes console')
    return (
        <Routes>
            {
                (state === 'no-auth') ?
                    (<>
                        <Route path='/' element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to={'/'} />} />
                    </>) :
                    (<>
                        <AppRoutes />
                    </>)
            }
        </Routes>
    )
}
