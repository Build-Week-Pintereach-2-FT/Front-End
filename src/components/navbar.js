import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from '../actions/actions';

function NavBar (props) {

    return (
    
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>
                        <i class="fas fa-home fa-3x"></i>
                        <span className='link-text'>Home</span>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='BoardList'>
                        <i class="fas fa-clipboard-list fa-3x"></i>
                        <span className='link-text'>Board List</span>
                    </Link>
                </li>

                {/* if no token (so user is not logged in), show signin/sign up options. Otherwise, show signout */}
                {props.user.id === null
                    ?
                    <>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/SignUp'>
                                <i class="fas fa-user-plus fa-3x"></i>
                                <span className='link-text'>Sign Up</span>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to='/SignIn'>
                                <i class="fas fa-sign-in-alt fa-3x"></i>
                                <span className='link-text'>Sign In</span>
                            </Link>
                        </li>
                    </>
                    : 
                    <>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/UserDashboard'>
                                <i class="fa fa-user-circle fa-3x"></i>
                                <span className='link-text'>User Dashboard</span>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' onClick={props.logout}>
                                <i class="fas fa-sign-in-alt fa-3x"></i>
                                <span className='link-text'>Sign Out</span>
                            </Link>
                        </li>
                    </>
                }
            
            </ul>
        </nav>
    )

}


const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
  
  export default connect(mapStateToProps, {logout})(NavBar)