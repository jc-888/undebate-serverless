import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

import SignUp from './containers/SignUp';
import Login from './containers/Login';
import Campaigns from './containers/Campaigns';
import Campaign from './containers/Campaign';
import CreateCampaigns from './containers/CreateCampaign';
import CreateQuestion from './containers/CreateQuestion';
import Question from './containers/Question';
import CreateAnswer from './containers/CreateAnswer';

// import Home from './containers/Home';

import {AppState} from './redux/rootAppState';

interface RouterProps {}

type Props = RouterProps & LinkStateProps;

const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}: any) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: props.location},
          }}
        />
      )
    }
  />
);

class MyRouter extends Component<Props, RouterProps> {
  render() {
    return (
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
        {/* <RestrictedRoute
          exact
          path="/"
          component={Home}
          isLoggedIn={this.props.isLoggedIn}
        /> */}
        <RestrictedRoute
          exact
          path="/"
          component={Campaigns}
          isLoggedIn={this.props.isLoggedIn}
        />
        <RestrictedRoute
          exact
          path="/create-campaign"
          component={CreateCampaigns}
          isLoggedIn={this.props.isLoggedIn}
        />
        <RestrictedRoute
          exact
          path="/campaign/:campaignID"
          component={Campaign}
          isLoggedIn={this.props.isLoggedIn}
        />
        <RestrictedRoute
          exact
          path="/campaign/:campaignID/create-question"
          component={CreateQuestion}
          isLoggedIn={this.props.isLoggedIn}
        />
        <RestrictedRoute
          exact
          path="/campaign/:campaignID/question/:questionID"
          component={Question}
          isLoggedIn={this.props.isLoggedIn}
        />
        <RestrictedRoute
          exact
          path="/campaign/:campaignID/question/:questionID/create-answer"
          component={CreateAnswer}
          isLoggedIn={this.props.isLoggedIn}
        />
      </Switch>
    );
  }
}

interface LinkStateProps {
  isLoggedIn: boolean;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  isLoggedIn: state.Auth.isLoggedIn,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyRouter);
