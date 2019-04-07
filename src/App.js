import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import DashboardComponent from './modules/Dashboard/DashboardComponent';
import { hot } from 'react-hot-loader';
import theme from './styles/theme';

import CommonStore from './stores/CommonStore'
import history from './history';

const URLS = {
  DASHBOARD : '/'
}
const stores = {
  CommonStore
};

const App = () => {
  return (
    <Router history={history}>
      <Provider {...stores}>
        <ThemeProvider theme={theme}>
          <Route
            path ={URLS.DASHBOARD}
            exact
            component={DashboardComponent}
            />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default hot(module)(App);
