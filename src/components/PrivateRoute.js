import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = window.localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={props => {
                if (token) {
                    //return the component
                    return <Component {...props} />;
                } else {
                    //redirect user to /login
                    return <Redirect to="/SignIn" />;
                }
            }}
        />
    );
}

export default PrivateRoute;