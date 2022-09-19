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
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import 'assets/css/style.css';
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: '',
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: '',
    });
  };

  render() {
    const { onChangeMode } = this.props;
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main">
            <Container>
              <NavbarBrand
                className="mr-lg-5"
                to="/"
                tag={Link}
                style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img
                  style={{ width: 80, height: 80 }}
                  alt="..."
                  src={require('assets/img/brand/logo.png')}
                />
                <h5
                  style={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    margin: 0,
                  }}>
                  Big Data Club
                </h5>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}>
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require('assets/img/brand/logo.png')}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavLink to="/home" tag={Link}>
                    Home
                  </NavLink>
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About Us</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Our Story
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        Our Member
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Projects</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/home" tag={Link}>
                        Data Science
                      </DropdownItem>
                      <DropdownItem to="/home" tag={Link}>
                        AI
                      </DropdownItem>
                      <DropdownItem to="/home" tag={Link}>
                        Software
                      </DropdownItem>
                      <DropdownItem to="/home" tag={Link}>
                        System
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavLink to="https://docs.hpcc.vn/display/BDC/">
                    <a
                      href="https://docs.hpcc.vn/display/BDC/"
                      className="navbar__blog">
                      Our Blog
                    </a>
                  </NavLink>
                  {/* <NavLink to="/register-page" tag={Link}>
                    Our Blog
                  </NavLink> */}
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavLink to="/register-page" tag={Link}>
                    Event
                  </NavLink>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/BDCofHCMUT"
                      id="tooltip333589074"
                      target="_blank">
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.youtube.com/channel/UC95gkDbiRPY17hiRWP5o5Yg"
                      id="tooltip356693867"
                      target="_blank">
                      <i className="fa fa-brands fa-youtube"></i>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Youtobe
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Youtobe
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
                <NavItem className="d-none d-lg-block ml-lg-4">
                  <NavLink to="/contact-us" tag={Link}>
                    <Button color="info" type="button">
                      Contact Us
                    </Button>
                  </NavLink>
                </NavItem>
                <Button
                  className="btn-icon btn-2 toggle-btn"
                  color="primary"
                  type="button"
                  onClick={() => onChangeMode()}
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    color: 'white',
                  }}>
                  <span className="btn-inner--icon">
                    <i class="fa fa-moon-o"></i>
                  </span>
                </Button>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
