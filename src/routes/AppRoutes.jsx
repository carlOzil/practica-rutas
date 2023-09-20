import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, ServiciosPage } from '../pages';
import { NavBar } from '../components/NavBar';

export const AppRoutes = () => {

  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/servicios' element={<ServiciosPage />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </>
  )
}
