import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../layouts';

import routes from './routes';

class Pages extends React.Component {
  render() {
    return (
      <Route render={({ location, history }) =>
        <Layout location={location} history={history} routes={routes}>
          <Switch>
            {
              routes.map((route, key) =>
                <Route
                  key={key}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              )
            }
            <Route path="*" render={() => <h1>Not Found</h1>} />
          </Switch>
        </Layout>
      } />
    );
  }
};

export default connect()(Pages);
