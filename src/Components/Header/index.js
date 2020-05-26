import React from 'react';
import './style.scss'
import Logo from './../../Assets/logo.png'
import {Link} from 'react-router-dom'
const Header = props => {
    const {currentUser} = props;
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Ravan's Logo" />
                    </Link>
                    
                </div>
                <div className="linkaction">
                    {currentUser && (
                        <ul>
                            <li>
                                <span>
                                    LogOut
                                </span>
                            </li>
                        </ul>
                    )}
                    {!currentUser && (
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                    )}
                </div>
            </div>
        </header>
    );
};
Header.defaultProps={
    currentUser:null
};

export default Header