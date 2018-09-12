import React, { Component } from 'react';
import NavBar from './NavBar';
import Question from './Question';
import Questions from './Questions';
import Callback from './Callback';
import NewQuestion from './NewQuestion';
import SecuredRoute from './securedRoute/SecuredRoute';
import { Route, withRouter } from 'react-router-dom';
import auth0Client from '../model/Auth';

class App extends Component {

  async componentDidMount() {
    // console.log("Path name: "+this.props.location.pathname);
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === 'login_required') return;
      console.log("ERROR: "+err.error);
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={Questions} />
        <Route exact path='/question/:questionId' component={Question} />
        <Route exact path='/callback' component={Callback} />
        <SecuredRoute path='/new-question' component={NewQuestion} />
      </div>
    );
  }
}

export default withRouter(App);