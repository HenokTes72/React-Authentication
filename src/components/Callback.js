import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from '../model/Auth';
import { getLocation } from '../localStorage/local';

class Callback extends Component {
    async componentDidMount() {
        console.log("Is Authenticated: "+auth0Client.isAuthenticated());
        await auth0Client.handleAuthentication();
        console.log("Is Authenticated: " + auth0Client.isAuthenticated());
        var redirect = getLocation();
        redirect === null ? this.props.history.replace('/') : this.props.history.replace(redirect);
    }

    render() {
        return (
            <p>Loading profile...</p>
        );
    }
}

export default withRouter(Callback);