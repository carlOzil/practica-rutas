import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
            <ul className='nav'>
                <li><NavLink
                    to='/'
                    className={({ active }) => `nav-link ${active ? 'active' : ''} `}>Home</NavLink></li>
                <li><NavLink
                    to='/servicios'
                    className={({ active }) => `nav-link ${active ? 'active' : ''} `}>Servicios</NavLink></li>
            </ul >
        </nav >
    )
}
