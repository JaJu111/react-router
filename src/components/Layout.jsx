
import { Outlet, useLocation } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import '../App.css';

export default function Layout() {
    const location = useLocation();

    return (
        <div className="app-box">
            <HeaderComponent />

            <div className={`main-box ${location.pathname === '/posts' || location.pathname === '/posts/' ? 'scrollY' : ''}`}>
                <div className="container">
                    <Outlet />
                </div>
            </div>

            {/* <div className='main-box' style={{height: location.pathname === '/posts' || location.pathname === '/posts/' ? 'auto' : 'calc(100vh - 200px)'}}>
                <div className="container">
                    <Outlet />
                </div>
            </div> */}

            <FooterComponent />
        </div>
    )
}