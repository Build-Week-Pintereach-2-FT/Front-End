import React from "react";
import { Link } from "react-router-dom";

export default function NavBar () {

    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>

                <li className='nav-item'>
                    <Link className='nav-link' to='/'>
                        <i className="fas fa-home fa-3x"></i>
                        <span className='link-text'>Home</span>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/SignUp'>
                        <i className="fas fa-user-plus fa-3x"></i>
                        <span className='link-text'>Sign Up</span>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/SignIn'>
                        <i className="fas fa-sign-in-alt fa-3x"></i>
                        <span className='link-text'>Sign In</span>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/BoardList'>
                        <i className="fas fa-clipboard-list fa-3x"></i>
                        <span className='link-text'>Board List</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}