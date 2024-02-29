import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

// Define TopMenu component
const TopMenu = () => (
  <Container fluid id="topMenu" className="green-navbar"> {/* Apply green-navbar class */}
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/wod-dukes-logo.png"
            width="200px"
            alt="Duke's Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">MENUS</Nav.Link>
            <Nav.Link href="#">DUKE</Nav.Link>
            <Nav.Link href="#">SHOP</Nav.Link>
            <Nav.Link href="#">JOIN OUR TEAM</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
            <Nav.Link href="#" className="orange">ORDER TAKEOUT & DELIVERY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);

// Define CenterImage component
const CenterImage = () => (
  <div id="centerImage">
    <img
      src="https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/wod-dukes-center-image.png"
      width="100%"
      alt="Center Image"
    />
  </div>
);

// Define Footer component
const Footer = () => (
  <footer className="mt-auto">
    <div id="bottomText" className="container">
      <h1>
        HOME OF <strong>DUKE KAHANAMOKU</strong>
      </h1>
      <p>
        Make yourself at home, where the legend Duke Kahanamoku grew up swimming, surfing, canoeing and bodysurfing. In 1929, Duke rode a monster wave for 1 1/8 miles at Waikiki, likely the longest ride in modern times. You know that image in your mind of Waikiki Beach, the one with Diamond Head in the distance and outrigger canoes in a turquoise bay of warm water? It’s real and it’s here every day. Splash, body surf or surf, in the warm, turquoise water just below Hawaii’s icon, Diamond Head – just like Duke did.
      </p>
    </div>
    <div id="bottomFooter" className="container">
      <ul className="nav">
        <li className="nav-item nav-link">
          <strong>TS RESTAURANTS</strong>
        </li>
        <li className="nav-item nav-link">
          <strong>JOIN THE TEAM</strong>
        </li>
        <li className="nav-item nav-link">
          <strong>BUY GIFT CARDS</strong>
        </li>
        <li className="nav-item nav-link">
          <strong>WHAT IS HULA PIE</strong>
        </li>
        <li className="nav-item nav-link">
          <strong>LEGACY OF ALOHA</strong>
        </li>
        <li className="nav-item nav-link">
          <strong>AWARDS</strong>
        </li>
        <li className="nav-item nav-link">
          <strong>CALL 808.922.2268</strong>
        </li>
        <li className="nav-item nav-link">
          <i className="bi-facebook"></i>
        </li>
        <li className="nav-item nav-link">
          <i className="bi-twitter"></i>
        </li>
        <li className="nav-item nav-link">
          <i className="bi-instagram"></i>
        </li>
      </ul>
    </div>
  </footer>
);

// Render components
ReactDOM.render(
  <div className="d-flex flex-column h-100">
    <TopMenu />
    <CenterImage />
    <Footer />
  </div>,
  document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dukes />);
