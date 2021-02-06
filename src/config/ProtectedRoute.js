import React, { Component } from 'react'
import { Redirect,Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = this.props.isAuth;
        console.log('in protected route', isAuthenticated)
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}
export default ProtectedRoute;