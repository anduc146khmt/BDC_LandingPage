/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './global.scss';
import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import Index from 'views/Index';
import Landing from 'views/examples/Landing.js';
import Login from 'views/examples/Login.js';
import Profile from 'views/examples/Profile.js';
import Register from 'views/examples/Register.js';
import OurStory from 'views/examples/OurStory';
import ContactUs from 'views/examples/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      <Route path="/home" exact render={(props) => <Landing {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={(props) => <OurStory {...props} />}
      />
      <Route
        path="/login-page"
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/contact-us"
        exact
        render={(props) => <ContactUs {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
