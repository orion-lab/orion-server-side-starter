import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Helmet from 'react-helmet';
import 'normalize.css';
import config from '../config';
import Header from './components/header';
import Footer from './components/footer';
import Error404 from './pages/not-found';
import Landing from './pages/landing/async';
import Signup from './pages/signup/async';
import Signin from './pages/signin/async';
import './global.css';

export const routes = [{
    path: '/',
    component: Landing,
    exact: true,
  }, {
    path: '/signup',
    component: Signup,
  }, {
    path: '/signin',
    component: Signin,
  },
];

function App() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{config('htmlPage.defaultTitle')}</title>
        <meta name="application-name" content={config('htmlPage.defaultTitle')} />
        <meta name="description" content={config('htmlPage.description')} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#2b2b2b" />
        <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
        <meta name="theme-color" content="#2b2b2b" />
        <title>{config('htmlPage.defaultTitle')}</title>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/favicons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon-180x180.png"
        />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#00a9d9" />
        <link rel="icon" type="image/png" href="/favicons/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/favicons/favicon-128.png" sizes="128x128" />
        <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" sizes="16x16 32x32" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2b2b2b" />
        <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/favicons/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/favicons/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/favicons/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/favicons/mstile-310x310.png" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
      <Header />
      <Switch>
        {routes.map((route, index) => <Route {...route} key={index} />)}
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
