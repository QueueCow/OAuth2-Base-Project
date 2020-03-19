import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Navbar from './components/navbar/Navbar';
import Notifier from './components/notifier/Notifier';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Dashboard from './pages/Dashboard/Dashboard';
import DiscordCallback from './pages/DiscordCallback/DiscordCallback';

import { useSelector } from 'react-redux';
import { selectors as authSel } from './modules/_common/auth/discord';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background: ${theme.background};
    margin: 0;
  }
`;

const App = () => {
  const auth_Discord = useSelector(authSel.authenticated);
  const route = localStorage.getItem('route');

  return (
    <Router>
      <Notifier />
      <ThemeProvider theme={{ mode: 'dark' }}>
        <GlobalStyle />
        <Navbar auth={auth_Discord} />
        <Switch>
          <Route path='/api/discordCallback' component={DiscordCallback} />

          <PrivateRoute
            exact
            path='/dashboard'
            component={Dashboard}
            auth={auth_Discord}
          />

          <PrivateRoute
            exact
            path='/private'
            component={Dashboard}
            auth={auth_Discord}
          />

          <Route
            exact
            path='/login'
            render={() => <Home auth={auth_Discord} route={route} />}
          />

          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
