
import { NavLink } from 'react-router-dom';
import CustomLink from './CustomLink';
import '../App.css';

// const setActive = ({ isActive }) => isActive ? 'active-link' : '';
// const setStyleActive = ({ isActive }) => ({ color: isActive ? '#007bff' : '#fff' });

export default function HeaderComponent() {
    return (
        <>
            <header>
                {/* <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Blog</NavLink>
                <NavLink to="/about">About</NavLink> */}

                {/* <NavLink to="/" style={setStyleActive}>Home</NavLink>
                <NavLink to="/posts" style={setStyleActive}>Blog</NavLink>
                <NavLink to="/about" style={setStyleActive}>About</NavLink> */}

                {/* <NavLink to="/" className={setActive}>Home</NavLink>
                <NavLink to="/posts" className={setActive}>Blog</NavLink>
                <NavLink to="/about" className={setActive}>About</NavLink> */}

                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>
        </>
    )
}