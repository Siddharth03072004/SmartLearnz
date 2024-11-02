import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    

   /* const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }*/

    const handleNavClick = (path) => {
        props.setLoading(true);
        setTimeout(() => {
            navigate(path);
            props.setLoading(false);
        }, 1000); // Simulate a network delay
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <img src='/logo.svg' alt='SmartlearnX Logo' height="40" width="150" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/" onClick={() => handleNavClick("/")}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/learn" ? "active" : ""}`} to="/learn" onClick={() => handleNavClick("/learn")}>Learn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/quiz" ? "active" : ""}`} to="/quiz" onClick={() => handleNavClick("/quiz")}>Quiz</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/analysis" ? "active" : ""}`} to="/analysis" onClick={() => handleNavClick("/analysis")}>Analyzer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/help" ? "active" : ""}`} to="/help" onClick={() => handleNavClick("/help")}>Chatbot</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/converter" ? "active" : ""}`} to="/converter" onClick={() => handleNavClick("/Converter")}>Text Converter</Link>
                        </li>
                       
                    </ul>
                    
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input
                            className="form-check-input"
                            onClick={props.toggleMode}
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            checked={props.mode === 'dark'}
                            readOnly
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
