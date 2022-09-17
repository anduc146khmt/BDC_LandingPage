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

// core components
import DemoNavbar from 'components/Navbars/Navbar';
import CardsFooter from 'components/Footers/CardsFooter.js';

// index page sections
import Hero from '../IndexSections/Hero';
import Intro from '../components/Intro/Intro';
import Expertise from 'views/components/Expertise/Expertise';

class OurStory extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <Intro />
          <Expertise />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default OurStory;
