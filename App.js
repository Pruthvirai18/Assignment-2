import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Carousel, Card, Container, Row, Col, Modal } from 'react-bootstrap';

const books = [
  {
    id: 1,
    title: 'Believe in Yourself',
    author: 'Dr Joseph Murphy',
    price: 120,
    description: 'In Believe in Yourself, Dr. Murphy stresses about having faith in ones abilities, believing in the inner self and in having the courage to chase your dream, come what may.',
    image: 'https://m.media-amazon.com/images/I/51JoXgnIciL.SY466.jpg',
  },
  {
    id: 2,
    title: 'Energize Your Mind',
    author: 'Gaur Gopal Das',
    price: 140,
    description: 'In the book Energize your mind, Bestselling author and life coach Gaur Gopal Das decodes how the mind works. He combines his anecdotal style with analytical research to teach us how to discipline our mind for our greater well-being.',
    image: 'https://m.media-amazon.com/images/I/71B4h-dSVzL.SL1500.jpg',

  },
  {
    id: 3,
    title: 'Destiny of Souls',
    author: 'Michael Newton',
    price: 160,
    description: 'New Case Studies of Life Between Lives Dr. Michael Newton, internationally recognized for his work in the spiritual aspects of life, brings to you Destiny of Souls that comprises 67 real-life stories of people under hypnosis.',
    image: 'https://m.media-amazon.com/images/I/71KphI0AdzL.SY466.jpg',
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData.entries()));
    
    handleCloseModal();
  };

  return (
    <Router>
      <div>
        {/* Header */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Bookstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/">Books</Nav.Link>
              <Nav.Link as={Link} to="/">Categories</Nav.Link>
              <Nav.Link as={Link} to="/">About Us</Nav.Link>
              <Nav.Link onClick={handleShowModal}>Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hips.hearstapps.com/hmg-prod/images/harry-potter-and-the-philosopher-s-stone-1615905532.jpg?crop=1xw:1xh;center,top&resize=980:*"
              width="700"
              height="700"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Harry Potter</h3>
              <p>Throughout the series, Harry is described as having his father's perpetually untidy black hair, his mother's bright green eyes, and a lightning bolt-shaped scar on his forehead.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://5.imimg.com/data5/SELLER/Default/2021/8/ML/TJ/IT/133456484/rich-dad-poor-dad-what-the-rich-teach-their-kids-about-money.jpeg"
              width="700"
              height="700"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Rich Dad Poor Dad</h3>
              <p>What the rich teach their kids about money That the poor and middle class do not!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.bodylinetshirts.com/image/cache/catalog/books/beyond-a-boundary-book_design-1000x1000.jpg"
              width="700"
              height="700"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Beyond a Boundary</h3>
              <p>The most finely crafted book on cricket ever wr</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Main Content */}
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>

        {/* Contact Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Footer */}
        <footer className="bg-light text-center text-lg-start mt-5">
          <Container className="p-4">
            <Row>
              <Col lg={6} md={12} className="mb-4 mb-md-0">
                <h5 className="text-uppercase">About Us</h5>
                <p>
                  Welcome to Bookstore! We are dedicated to enhancing your reading experience by providing a seamless and intuitive interface for exploring and enjoying your favorite books. Our mission is to bring literature to life with innovative features and personalized recommendations.
                </p>
              </Col>
              <Col lg={3} md={6} className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-dark">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">Contact</a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6} className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Follow Us</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-dark">Facebook</a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">Twitter</a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark">Instagram</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="text-center p-3 bg-dark text-white">
            © 2024 Bookstore
          </div>
        </footer>
      </div>
    </Router>
  );
}

function BookList() {
  return (
    <Container className="mt-5">
      <Row>
        {books.map((book) => (
          <Col md={4} key={book.id}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Price: ${book.price}</Card.Text>
                <Card.Text>{book.description}</Card.Text>
                <Button variant="outline-secondary" size="sm" as={Link} to={`/book/${book.id}`}>
                  View Details
                </Button>
                <Button variant="outline-secondary" size="sm" className="ml-2">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <img src={book.image} alt={book.title} className="img-fluid" />
        </Col>
        <Col md={8}>
          <h2>{book.title}</h2>
          <h4>Author: {book.author}</h4>
          <h4>Price: ${book.price}</h4>
          <p>{book.description}</p>
          <Button variant="primary">Buy Now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
