import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Container,  Navbar, Nav} from 'react-bootstrap';
import './App.css';


import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';



class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'Mitchell Foley',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Mitchell\'s Portfolio',
        subTitle: 'Unique projects',
        text: "Checkout my projects below"
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

render() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        
        <Navbar bg="transparent" expand="lg">
          <Navbar.Brand>Mitchell Foley</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

           {/* Using the exact render attribute here, it checks for a perfect match so that all the
            webpages don't have the same content as the home page. We do this because the home page
            has no custom url. 
        */}

        <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/about" render={() => <About title={this.state.about.title} />} />
        <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
        
        <Footer />

      </Container>
    </Router>
  );
}
}

export default App;