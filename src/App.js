import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Routes/Home';
// import NotFound from "./routes/NotFound";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Trips from "./Routes/Trips";
import MyAccount from "./Routes/MyAccount";
import Friends from "./Routes/Friends";
// import Footer from './components/Footer';

function App() {

  return (
    <div className='global'>
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg" className="navigator">
            <Container>
              <Navbar.Brand>
                <Link to="/" className="brand">
                  {/* Replace with a logo */}
                  Collective Voyage
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as="div">
                    <Link to="/" className='link'>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/trips" className='link'>
                      Trips
                    </Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/account" className='link'>
                      My Account
                    </Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/friends" className='link'>
                      Friends
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/friends" element={<Friends />} />
            {/* Need to make a 404 page  */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
      {/* Create and add a footer component */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;