import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const CustomNavbar=(props)=> {
 return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid={true}>
        <Navbar.Brand href="#home">Epistaurant - {props.additionalText}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Menu'</Nav.Link>
            <Nav.Link href="#pricing">Prenotazioni</Nav.Link>
            <Nav.Link href="#pricing">Come Raggiungerci</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default CustomNavbar;